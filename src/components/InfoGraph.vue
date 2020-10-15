<template>
  <div id="chart">
    <v-row>
      <v-col>
        <v-card>
          <apexchart
            type="line"
            height="520"
            :options="chartOptions"
            :series="series"
          />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import axios from "axios";
import { buildChartData } from "@/utils";

export default {
  name: "InfoGraph",

  data: function() {
    return {
      globalHistoricalData: [],
      graphData: [],
      series: [
        {
          name: "Cases &Delta;",
          data: []
        }
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "line"
        },
        stroke: {
          width: 7,
          curve: "smooth"
        },
        xaxis: {
          title: {
            text: "Date"
          },
          type: "datetime",
          categories: [],
          labels: {
            formatter: function(value, timestamp, opts) {
              return opts.dateFormatter(new Date(timestamp), "dd MMM");
            }
          }
        },
        title: {
          text: "New Cases Daily - Worldwide",
          align: "left",
          style: {
            fontSize: "16px",
            color: "#666"
          }
        },
        noData: {
          text: "Loading..."
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            gradientToColors: ["#FDD835"],
            shadeIntensity: 1,
            type: "horizontal",
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
          }
        },
        markers: {
          size: 4,
          colors: ["#FFA41B"],
          strokeColors: "#fff",
          strokeWidth: 2,
          hover: {
            size: 7
          }
        },
        yaxis: {
          title: {
            text: "Change"
          }
        },
        tooltip: {
          enabled: true,
          theme: true,
          x: {
            show: true,
            format: "dd MMM",
            formatter: undefined
          },
          y: {
            formatter: undefined,
            title: {
              formatter: seriesName => seriesName
            }
          }
        }
      }
    };
  },
  created() {
    this.getGlobalHistoricalData();
  },

  methods: {
    getGlobalHistoricalData(days = 30) {
      axios
        .get(`https://disease.sh/v3/covid-19/historical/all?lastdays=${days}`)
        .then(data => {
          this.graphData = buildChartData(data.data);

          this.series = [
            {
              data: this.graphData
            }
          ];
        })
        .catch(err => console.error(err));
    }
  }
};
</script>

<style>
.apexcharts-tooltip {
  background: #272727;
  color: orange;
  opacity: 0;
}
</style>
