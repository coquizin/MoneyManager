import {
  AreaChart,
  BadgeDelta,
  Card,
  Flex,
  Icon,
  Metric,
  ProgressBar,
  Text,
  Title,
  Toggle,
  ToggleItem,
} from "@tremor/react";
import { InformationCircleIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { useListSpending } from "@/services/spendings";

export default function HomeScreen() {
  const spending = useListSpending();
  console.log(spending.data);
  console.log("teste");

  const spendigns = spending.data?.map((item) => {
    return {
      date: item.created_at.slice(0, 10),
      Gastos: item.amount,
      // Categoria: item.category,
    };
  });

  console.log(spendigns, 1);

  const performance = [
    {
      date: "2021-01-01",
      Sales: 900.73,
      Profit: 173,
      Customers: 73,
    },
    {
      date: "2021-01-02",
      Sales: 1000.74,
      Profit: 174.6,
      Customers: 74,
    },
    // ...
    {
      date: "2021-03-13",
      Sales: 882,
      Profit: 682,
      Customers: 682,
    },
  ];

  const realFormatter = (value: number) =>
    `R$ ${Intl.NumberFormat("pt-br").format(value).toString()} `;

  const numberFormatter = (value: number) =>
    `${Intl.NumberFormat("pt-br").format(value).toString()}${" "} `;

  const [selectedKpi, setSelectedKpi] = useState("Gastos");

  // map formatters by selectedKpi
  const formatters: { [key: string]: any } = {
    Gastos: realFormatter,
  };

  return (
    <>
      <div className="min-h-screen pt-10 px-6 bg-[#f1f5f8]">
        <div className="space-y-10">
          <h1 className="text-2xl font-medium text-secundary">Dashboard</h1>
          <Card>
            <div className="justify-between md:flex">
              <div>
                <Flex
                  justifyContent="start"
                  className="space-x-0.5"
                  alignItems="center"
                >
                  <Title> Performance History </Title>
                  <Icon
                    icon={InformationCircleIcon}
                    variant="simple"
                    tooltip="Shows day-over-day (%) changes of past performance"
                  />
                </Flex>
                <Text> Daily increase or decrease per domain </Text>
              </div>
              <div className="mt-6 md:mt-0">
                <Toggle
                  color="zinc"
                  defaultValue={selectedKpi}
                  onValueChange={(value) => setSelectedKpi(value)}
                >
                  <ToggleItem value="Gastos" text="Gastos" />
                </Toggle>
              </div>
            </div>
            {spendigns && (
              <AreaChart
                data={spendigns}
                index="date"
                categories={[selectedKpi]}
                colors={["blue"]}
                showLegend={false}
                valueFormatter={formatters[selectedKpi]}
                yAxisWidth={56}
                className="mt-8 h-96"
              />
            )}
          </Card>
          <Card className="max-w-lg">
            <Flex alignItems="start">
              <div>
                <Text>Sales</Text>
                <Metric>$ 12,699</Metric>
              </div>
              <BadgeDelta deltaType="moderateIncrease">13.2%</BadgeDelta>
            </Flex>
            <Flex className="mt-4">
              <Text className="truncate">68% ($ 149,940)</Text>
              <Text> $ 220,500 </Text>
            </Flex>
            <ProgressBar percentageValue={15.9} className="mt-2" />
          </Card>
        </div>
      </div>
    </>
  );
}
