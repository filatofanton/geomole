<script>
export default {
  data() {
    return {
      points:[
        {id:1,type:'т.с.з.',number:'1',depth:'30',absMark:'-1.2'},
        {id:2,type:'т.с.з.',number:'2',depth:'25',absMark:'2.1'},
        {id:3,type:'т.с.з.',number:'3',depth:'35',absMark:'3.7'},
        {id:4,type:'т.с.з.',number:'4',depth:'40',absMark:'0.5'}
      ],
      points2:[
        {id:1,type:'скв.',number:'1',depth:'30',absMark:'-1.2'},
        {id:2,type:'скв.',number:'2',depth:'25',absMark:'2.1'},
        {id:3,type:'скв.',number:'3',depth:'35',absMark:'3.7'},
        {id:4,type:'скв.',number:'4',depth:'40',absMark:'0.5'}
      ],
      cpt:[
        {
          "depth": 0,
          "qc": 0,
          "fs": 0
        },
        {
            "depth": 0.025,
            "qc": 2.08,
            "fs": 0.01
        },
        {
            "depth": 0.05,
            "qc": 1.6,
            "fs": 0.011
        },
        {
            "depth": 0.075,
            "qc": 6.4,
            "fs": 0.014
        },
        {
            "depth": 0.1,
            "qc": 10.24,
            "fs": 0.023
        },
        {
            "depth": 0.125,
            "qc": 14.24,
            "fs": 0.048
        },
        {
            "depth": 0.15,
            "qc": 15.52,
            "fs": 0.037
        },
        {
            "depth": 0.175,
            "qc": 17.04,
            "fs": 0.143
        },
        {
            "depth": 0.2,
            "qc": 17.04,
            "fs": 0.194
        },
        {
            "depth": 0.225,
            "qc": 8.72,
            "fs": 0.128
        },
        {
            "depth": 0.25,
            "qc": 6.8,
            "fs": 0.176
        },
        {
            "depth": 0.275,
            "qc": 6.8,
            "fs": 0.19
        },
        {
            "depth": 0.3,
            "qc": 5.92,
            "fs": 0.207
        },
        {
            "depth": 0.325,
            "qc": 7.84,
            "fs": 0.17
        },
        {
            "depth": 0.35,
            "qc": 9.2,
            "fs": 0.17
        },
        {
            "depth": 0.375,
            "qc": 0.8,
            "fs": 0.006
        },
        {
            "depth": 0.4,
            "qc": 4.24,
            "fs": 0.007
        },
        {
            "depth": 0.425,
            "qc": 5.76,
            "fs": 0.01
        },
        {
            "depth": 0.45,
            "qc": 6.88,
            "fs": 0.014
        },
        {
            "depth": 0.475,
            "qc": 7.52,
            "fs": 0.016
        },
        {
            "depth": 0.5,
            "qc": 8.48,
            "fs": 0.021
        },
        {
            "depth": 0.525,
            "qc": 9.52,
            "fs": 0.033
        },
        {
            "depth": 0.55,
            "qc": 10.08,
            "fs": 0.034
        },
        {
            "depth": 0.575,
            "qc": 10.72,
            "fs": 0.031
        },
        {
            "depth": 0.6,
            "qc": 10.72,
            "fs": 0.042
        },
        {
            "depth": 0.625,
            "qc": 10.8,
            "fs": 0.049
        },
        {
            "depth": 0.65,
            "qc": 10.72,
            "fs": 0.055
        },
        {
            "depth": 0.675,
            "qc": 10.72,
            "fs": 0.062
        },
        {
            "depth": 0.7,
            "qc": 11.04,
            "fs": 0.069
        },
        {
            "depth": 0.725,
            "qc": 11.92,
            "fs": 0.08
        },
        {
            "depth": 0.75,
            "qc": 12.96,
            "fs": 0.09
        },
        {
            "depth": 0.775,
            "qc": 12.64,
            "fs": 0.091
        },
        {
            "depth": 0.8,
            "qc": 13.2,
            "fs": 0.119
        },
        {
            "depth": 0.825,
            "qc": 15.84,
            "fs": 0.128
        },
        {
            "depth": 0.85,
            "qc": 15.12,
            "fs": 0.142
        },
        {
            "depth": 0.875,
            "qc": 11.04,
            "fs": 0.131
        },
        {
            "depth": 0.9,
            "qc": 10.56,
            "fs": 0.152
        },
        {
            "depth": 0.925,
            "qc": 10.24,
            "fs": 0.173
        },
        {
            "depth": 0.95,
            "qc": 9.36,
            "fs": 0.174
        },
        {
            "depth": 0.975,
            "qc": 8.96,
            "fs": 0.182
        },
        {
            "depth": 1,
            "qc": 8.8,
            "fs": 0.184
        },
        {
            "depth": 1.025,
            "qc": 9.12,
            "fs": 0.187
        },
        {
            "depth": 1.05,
            "qc": 10,
            "fs": 0.184
        },
        {
            "depth": 1.075,
            "qc": 11.2,
            "fs": 0.174
        },
        {
            "depth": 1.1,
            "qc": 12.48,
            "fs": 0.149
        },
        {
            "depth": 1.125,
            "qc": 9.52,
            "fs": 0.139
        },
        {
            "depth": 1.15,
            "qc": 7.44,
            "fs": 0.121
        },
        {
            "depth": 1.175,
            "qc": 6.8,
            "fs": 0.075
        },
        {
            "depth": 1.2,
            "qc": 6.48,
            "fs": 0.074
        },
        {
            "depth": 1.225,
            "qc": 5.6,
            "fs": 0.054
        },
        {
            "depth": 1.25,
            "qc": 5.52,
            "fs": 0.056
        },
        {
            "depth": 1.275,
            "qc": 5.44,
            "fs": 0.057
        },
        {
            "depth": 1.3,
            "qc": 5.2,
            "fs": 0.06
        },
        {
            "depth": 1.325,
            "qc": 4.88,
            "fs": 0.062
        },
        {
            "depth": 1.35,
            "qc": 4.56,
            "fs": 0.062
        },
        {
            "depth": 1.375,
            "qc": 3.68,
            "fs": 0.062
        },
        {
            "depth": 1.4,
            "qc": 3.2,
            "fs": 0.064
        },
        {
            "depth": 1.425,
            "qc": 2.8,
            "fs": 0.062
        },
        {
            "depth": 1.45,
            "qc": 2.32,
            "fs": 0.061
        },
        {
            "depth": 1.475,
            "qc": 1.92,
            "fs": 0.058
        },
        {
            "depth": 1.5,
            "qc": 1.76,
            "fs": 0.058
        },
        {
            "depth": 1.525,
            "qc": 1.28,
            "fs": 0.054
        },
        {
            "depth": 1.55,
            "qc": 0.8,
            "fs": 0.054
        },
        {
            "depth": 1.575,
            "qc": 0.48,
            "fs": 0.051
        },
        {
            "depth": 1.6,
            "qc": 0.48,
            "fs": 0.048
        },
        {
            "depth": 1.625,
            "qc": 0.48,
            "fs": 0.045
        },
        {
            "depth": 1.65,
            "qc": 0.48,
            "fs": 0.041
        },
        {
            "depth": 1.675,
            "qc": 0.4,
            "fs": 0.038
        },
        {
            "depth": 1.7,
            "qc": 0.32,
            "fs": 0.038
        },
        {
            "depth": 1.725,
            "qc": 0.32,
            "fs": 0.037
        },
        {
            "depth": 1.75,
            "qc": 0.32,
            "fs": 0.036
        },
        {
            "depth": 1.775,
            "qc": 0.32,
            "fs": 0.034
        },
        {
            "depth": 1.8,
            "qc": 0.32,
            "fs": 0.034
        },
        {
            "depth": 1.825,
            "qc": 0.4,
            "fs": 0.033
        },
        {
            "depth": 1.85,
            "qc": 0.4,
            "fs": 0.031
        },
        {
            "depth": 1.875,
            "qc": 0.32,
            "fs": 0.029
        },
        {
            "depth": 1.9,
            "qc": 0.32,
            "fs": 0.027
        },
        {
            "depth": 1.925,
            "qc": 0.32,
            "fs": 0.026
        },
        {
            "depth": 1.95,
            "qc": 0.32,
            "fs": 0.025
        },
        {
            "depth": 1.975,
            "qc": 0.32,
            "fs": 0.022
        },
        {
            "depth": 2,
            "qc": 0.32,
            "fs": 0.021
        },
        {
            "depth": 2.025,
            "qc": 0.24,
            "fs": 0.019
        },
        {
            "depth": 2.05,
            "qc": 0.24,
            "fs": 0.018
        },
        {
            "depth": 2.075,
            "qc": 0.24,
            "fs": 0.018
        },
        {
            "depth": 2.1,
            "qc": 0.24,
            "fs": 0.018
        },
        {
            "depth": 2.125,
            "qc": 0.24,
            "fs": 0.017
        },
        {
            "depth": 2.15,
            "qc": 0.24,
            "fs": 0.016
        },
        {
            "depth": 2.175,
            "qc": 0.24,
            "fs": 0.015
        },
        {
            "depth": 2.2,
            "qc": 0.32,
            "fs": 0.014
        },
        {
            "depth": 2.225,
            "qc": 0.32,
            "fs": 0.014
        },
        {
            "depth": 2.25,
            "qc": 3.2,
            "fs": 0.011
        },
        {
            "depth": 2.275,
            "qc": 4.88,
            "fs": 0.01
        },
        {
            "depth": 2.3,
            "qc": 4.72,
            "fs": 0.012
        },
        {
            "depth": 2.325,
            "qc": 2.56,
            "fs": 0.019
        },
        {
            "depth": 2.35,
            "qc": 0.56,
            "fs": 0.031
        },
        {
            "depth": 2.375,
            "qc": 0.56,
            "fs": 0.032
        },
        {
            "depth": 2.4,
            "qc": 0.48,
            "fs": 0.033
        },
        {
            "depth": 2.425,
            "qc": 0.48,
            "fs": 0.034
        },
        {
            "depth": 2.45,
            "qc": 0.32,
            "fs": 0.036
        },
        {
            "depth": 2.475,
            "qc": 0.32,
            "fs": 0.038
        },
        {
            "depth": 2.5,
            "qc": 0.32,
            "fs": 0.038
        },
        {
            "depth": 2.525,
            "qc": 0.24,
            "fs": 0.038
        },
        {
            "depth": 2.55,
            "qc": 0.24,
            "fs": 0.038
        },
        {
            "depth": 2.575,
            "qc": 0.24,
            "fs": 0.038
        },
        {
            "depth": 2.6,
            "qc": 0.24,
            "fs": 0.036
        },
        {
            "depth": 2.625,
            "qc": 0.24,
            "fs": 0.027
        },
        {
            "depth": 2.65,
            "qc": 0.16,
            "fs": 0.016
        },
        {
            "depth": 2.675,
            "qc": 0.16,
            "fs": 0.014
        },
        {
            "depth": 2.7,
            "qc": 0.16,
            "fs": 0.013
        },
        {
            "depth": 2.725,
            "qc": 0.16,
            "fs": 0.011
        },
        {
            "depth": 2.75,
            "qc": 0.16,
            "fs": 0.01
        },
        {
            "depth": 2.775,
            "qc": 0.16,
            "fs": 0.01
        },
        {
            "depth": 2.8,
            "qc": 0.16,
            "fs": 0.01
        },
        {
            "depth": 2.825,
            "qc": 0.16,
            "fs": 0.009
        },
        {
            "depth": 2.85,
            "qc": 0.16,
            "fs": 0.009
        },
        {
            "depth": 2.875,
            "qc": 0.24,
            "fs": 0.009
        },
        {
            "depth": 2.9,
            "qc": 0.24,
            "fs": 0.009
        },
        {
            "depth": 2.925,
            "qc": 0.24,
            "fs": 0.009
        },
        {
            "depth": 2.95,
            "qc": 0.24,
            "fs": 0.009
        },
        {
            "depth": 2.975,
            "qc": 0.24,
            "fs": 0.009
        },
        {
            "depth": 3,
            "qc": 0.24,
            "fs": 0.009
        },
        {
            "depth": 3.025,
            "qc": 0.4,
            "fs": 0.009
        },
        {
            "depth": 3.05,
            "qc": 2.48,
            "fs": 0.007
        },
        {
            "depth": 3.075,
            "qc": 3.6,
            "fs": 0.007
        },
        {
            "depth": 3.1,
            "qc": 4.56,
            "fs": 0.006
        },
        {
            "depth": 3.125,
            "qc": 5.2,
            "fs": 0.007
        },
        {
            "depth": 3.15,
            "qc": 5.36,
            "fs": 0.009
        },
        {
            "depth": 3.175,
            "qc": 5.92,
            "fs": 0.012
        },
        {
            "depth": 3.2,
            "qc": 6.16,
            "fs": 0.015
        },
        {
            "depth": 3.225,
            "qc": 5.52,
            "fs": 0.018
        },
        {
            "depth": 3.25,
            "qc": 6.24,
            "fs": 0.021
        },
        {
            "depth": 3.275,
            "qc": 6.24,
            "fs": 0.026
        },
        {
            "depth": 3.3,
            "qc": 6.56,
            "fs": 0.03
        },
        {
            "depth": 3.325,
            "qc": 6.88,
            "fs": 0.034
        },
        {
            "depth": 3.35,
            "qc": 6.96,
            "fs": 0.038
        },
        {
            "depth": 3.375,
            "qc": 7.2,
            "fs": 0.042
        },
        {
            "depth": 3.4,
            "qc": 7.36,
            "fs": 0.043
        },
        {
            "depth": 3.425,
            "qc": 7.36,
            "fs": 0.043
        },
        {
            "depth": 3.45,
            "qc": 7.76,
            "fs": 0.043
        },
        {
            "depth": 3.475,
            "qc": 9.04,
            "fs": 0.045
        },
        {
            "depth": 3.5,
            "qc": 10.16,
            "fs": 0.046
        },
        {
            "depth": 3.525,
            "qc": 10.72,
            "fs": 0.048
        },
        {
            "depth": 3.55,
            "qc": 11.04,
            "fs": 0.052
        },
        {
            "depth": 3.575,
            "qc": 11.28,
            "fs": 0.058
        },
        {
            "depth": 3.6,
            "qc": 11.68,
            "fs": 0.065
        },
        {
            "depth": 3.625,
            "qc": 11.68,
            "fs": 0.071
        },
        {
            "depth": 3.65,
            "qc": 11.84,
            "fs": 0.078
        },
        {
            "depth": 3.675,
            "qc": 11.84,
            "fs": 0.087
        },
        {
            "depth": 3.7,
            "qc": 11.76,
            "fs": 0.094
        },
        {
            "depth": 3.725,
            "qc": 11.84,
            "fs": 0.102
        },
        {
            "depth": 3.75,
            "qc": 11.76,
            "fs": 0.111
        },
        {
            "depth": 3.775,
            "qc": 11.84,
            "fs": 0.12
        },
        {
            "depth": 3.8,
            "qc": 12.08,
            "fs": 0.126
        },
        {
            "depth": 3.825,
            "qc": 12.16,
            "fs": 0.131
        },
        {
            "depth": 3.85,
            "qc": 12.24,
            "fs": 0.134
        },
        {
            "depth": 3.875,
            "qc": 12.48,
            "fs": 0.138
        },
        {
            "depth": 3.9,
            "qc": 12.88,
            "fs": 0.142
        },
        {
            "depth": 3.925,
            "qc": 13.44,
            "fs": 0.143
        },
        {
            "depth": 3.95,
            "qc": 13.76,
            "fs": 0.145
        },
        {
            "depth": 3.975,
            "qc": 14.16,
            "fs": 0.147
        },
        {
            "depth": 4,
            "qc": 14.48,
            "fs": 0.15
        },
        {
            "depth": 4.025,
            "qc": 14.4,
            "fs": 0.152
        },
        {
            "depth": 4.05,
            "qc": 14.16,
            "fs": 0.156
        },
        {
            "depth": 4.075,
            "qc": 14,
            "fs": 0.16
        },
        {
            "depth": 4.1,
            "qc": 14,
            "fs": 0.165
        },
        {
            "depth": 4.125,
            "qc": 13.92,
            "fs": 0.168
        },
        {
            "depth": 4.15,
            "qc": 14.08,
            "fs": 0.171
        },
        {
            "depth": 4.175,
            "qc": 14.24,
            "fs": 0.174
        },
        {
            "depth": 4.2,
            "qc": 14.08,
            "fs": 0.177
        },
        {
            "depth": 4.225,
            "qc": 12.96,
            "fs": 0.146
        },
        {
            "depth": 4.25,
            "qc": 13.04,
            "fs": 0.158
        },
        {
            "depth": 4.275,
            "qc": 12.88,
            "fs": 0.166
        },
        {
            "depth": 4.3,
            "qc": 12.88,
            "fs": 0.171
        },
        {
            "depth": 4.325,
            "qc": 12.96,
            "fs": 0.174
        },
        {
            "depth": 4.35,
            "qc": 12.88,
            "fs": 0.177
        },
        {
            "depth": 4.375,
            "qc": 12.96,
            "fs": 0.178
        },
        {
            "depth": 4.4,
            "qc": 12.8,
            "fs": 0.178
        },
        {
            "depth": 4.425,
            "qc": 12.32,
            "fs": 0.181
        },
        {
            "depth": 4.45,
            "qc": 12,
            "fs": 0.183
        },
        {
            "depth": 4.475,
            "qc": 11.68,
            "fs": 0.182
        },
        {
            "depth": 4.5,
            "qc": 11.68,
            "fs": 0.182
        },
        {
            "depth": 4.525,
            "qc": 11.76,
            "fs": 0.181
        },
        {
            "depth": 4.55,
            "qc": 11.68,
            "fs": 0.178
        },
        {
            "depth": 4.575,
            "qc": 11.2,
            "fs": 0.178
        },
        {
            "depth": 4.6,
            "qc": 10.64,
            "fs": 0.179
        },
        {
            "depth": 4.625,
            "qc": 10.08,
            "fs": 0.181
        },
        {
            "depth": 4.65,
            "qc": 9.76,
            "fs": 0.182
        },
        {
            "depth": 4.675,
            "qc": 9.84,
            "fs": 0.18
        },
        {
            "depth": 4.7,
            "qc": 10.16,
            "fs": 0.179
        },
        {
            "depth": 4.725,
            "qc": 10.32,
            "fs": 0.174
        },
        {
            "depth": 4.75,
            "qc": 10.32,
            "fs": 0.173
        },
        {
            "depth": 4.775,
            "qc": 10.32,
            "fs": 0.17
        },
        {
            "depth": 4.8,
            "qc": 11.12,
            "fs": 0.167
        },
        {
            "depth": 4.825,
            "qc": 12.56,
            "fs": 0.162
        },
        {
            "depth": 4.85,
            "qc": 16.8,
            "fs": 0.167
        },
        {
            "depth": 4.875,
            "qc": 11.28,
            "fs": 0.132
        },
        {
            "depth": 4.9,
            "qc": 8.32,
            "fs": 0.171
        },
        {
            "depth": 4.925,
            "qc": 7.2,
            "fs": 0.166
        },
        {
            "depth": 4.95,
            "qc": 7.04,
            "fs": 0.157
        },
        {
            "depth": 4.975,
            "qc": 7.12,
            "fs": 0.155
        },
        {
            "depth": 5,
            "qc": 7.28,
            "fs": 0.153
        },
        {
            "depth": 5.025,
            "qc": 7.52,
            "fs": 0.158
        },
        {
            "depth": 5.05,
            "qc": 7.68,
            "fs": 0.149
        },
        {
            "depth": 5.075,
            "qc": 7.84,
            "fs": 0.164
        },
        {
            "depth": 5.1,
            "qc": 8,
            "fs": 0.165
        },
        {
            "depth": 5.125,
            "qc": 7.84,
            "fs": 0.154
        },
        {
            "depth": 5.15,
            "qc": 7.68,
            "fs": 0.157
        },
        {
            "depth": 5.175,
            "qc": 7.28,
            "fs": 0.14
        },
        {
            "depth": 5.2,
            "qc": 6.88,
            "fs": 0.094
        },
        {
            "depth": 5.225,
            "qc": 6.48,
            "fs": 0.05
        },
        {
            "depth": 5.25,
            "qc": 6.56,
            "fs": 0.047
        },
        {
            "depth": 5.275,
            "qc": 6.56,
            "fs": 0.047
        },
        {
            "depth": 5.3,
            "qc": 6.24,
            "fs": 0.049
        },
        {
            "depth": 5.325,
            "qc": 6.08,
            "fs": 0.051
        },
        {
            "depth": 5.35,
            "qc": 6.24,
            "fs": 0.055
        },
        {
            "depth": 5.375,
            "qc": 6.64,
            "fs": 0.057
        },
        {
            "depth": 5.4,
            "qc": 7.44,
            "fs": 0.06
        },
        {
            "depth": 5.425,
            "qc": 8,
            "fs": 0.062
        },
        {
            "depth": 5.45,
            "qc": 8.08,
            "fs": 0.066
        },
        {
            "depth": 5.475,
            "qc": 8.08,
            "fs": 0.073
        },
        {
            "depth": 5.5,
            "qc": 8.32,
            "fs": 0.082
        },
        {
            "depth": 5.525,
            "qc": 8.48,
            "fs": 0.09
        },
        {
            "depth": 5.55,
            "qc": 8.4,
            "fs": 0.098
        },
        {
            "depth": 5.575,
            "qc": 8.16,
            "fs": 0.107
        },
        {
            "depth": 5.6,
            "qc": 7.92,
            "fs": 0.117
        },
        {
            "depth": 5.625,
            "qc": 7.6,
            "fs": 0.124
        },
        {
            "depth": 5.65,
            "qc": 7.28,
            "fs": 0.131
        },
        {
            "depth": 5.675,
            "qc": 7.2,
            "fs": 0.138
        },
        {
            "depth": 5.7,
            "qc": 7.28,
            "fs": 0.143
        },
        {
            "depth": 5.725,
            "qc": 7.36,
            "fs": 0.15
        },
        {
            "depth": 5.75,
            "qc": 7.44,
            "fs": 0.156
        },
        {
            "depth": 5.775,
            "qc": 7.52,
            "fs": 0.162
        },
        {
            "depth": 5.8,
            "qc": 7.6,
            "fs": 0.164
        },
        {
            "depth": 5.825,
            "qc": 7.68,
            "fs": 0.166
        },
        {
            "depth": 5.85,
            "qc": 7.68,
            "fs": 0.164
        },
        {
            "depth": 5.875,
            "qc": 7.52,
            "fs": 0.161
        },
        {
            "depth": 5.9,
            "qc": 7.36,
            "fs": 0.156
        },
        {
            "depth": 5.925,
            "qc": 7.28,
            "fs": 0.15
        },
        {
            "depth": 5.95,
            "qc": 7.2,
            "fs": 0.142
        },
        {
            "depth": 5.975,
            "qc": 7.12,
            "fs": 0.137
        },
        {
            "depth": 6,
            "qc": 7.04,
            "fs": 0.138
        },
        {
            "depth": 6.025,
            "qc": 6.96,
            "fs": 0.142
        },
        {
            "depth": 6.05,
            "qc": 6.96,
            "fs": 0.144
        },
        {
            "depth": 6.075,
            "qc": 6.96,
            "fs": 0.145
        },
        {
            "depth": 6.1,
            "qc": 6.8,
            "fs": 0.144
        },
        {
            "depth": 6.125,
            "qc": 6.56,
            "fs": 0.14
        },
        {
            "depth": 6.15,
            "qc": 6.32,
            "fs": 0.133
        },
        {
            "depth": 6.175,
            "qc": 5.92,
            "fs": 0.124
        },
        {
            "depth": 6.2,
            "qc": 5.04,
            "fs": 0.062
        },
        {
            "depth": 6.225,
            "qc": 5.36,
            "fs": 0.061
        },
        {
            "depth": 6.25,
            "qc": 5.44,
            "fs": 0.065
        },
        {
            "depth": 6.275,
            "qc": 5.52,
            "fs": 0.069
        },
        {
            "depth": 6.3,
            "qc": 6,
            "fs": 0.072
        },
        {
            "depth": 6.325,
            "qc": 6.08,
            "fs": 0.074
        },
        {
            "depth": 6.35,
            "qc": 6.08,
            "fs": 0.074
        },
        {
            "depth": 6.375,
            "qc": 6.24,
            "fs": 0.075
        },
        {
            "depth": 6.4,
            "qc": 6.4,
            "fs": 0.077
        },
        {
            "depth": 6.425,
            "qc": 6.56,
            "fs": 0.078
        },
        {
            "depth": 6.45,
            "qc": 6.56,
            "fs": 0.081
        },
        {
            "depth": 6.475,
            "qc": 6.48,
            "fs": 0.084
        },
        {
            "depth": 6.5,
            "qc": 6.56,
            "fs": 0.089
        },
        {
            "depth": 6.525,
            "qc": 6.64,
            "fs": 0.094
        },
        {
            "depth": 6.55,
            "qc": 6.8,
            "fs": 0.097
        },
        {
            "depth": 6.575,
            "qc": 6.96,
            "fs": 0.099
        },
        {
            "depth": 6.6,
            "qc": 7.2,
            "fs": 0.103
        },
        {
            "depth": 6.625,
            "qc": 7.28,
            "fs": 0.107
        },
        {
            "depth": 6.65,
            "qc": 7.36,
            "fs": 0.11
        },
        {
            "depth": 6.675,
            "qc": 7.6,
            "fs": 0.113
        },
        {
            "depth": 6.7,
            "qc": 7.84,
            "fs": 0.116
        },
        {
            "depth": 6.725,
            "qc": 8.16,
            "fs": 0.12
        },
        {
            "depth": 6.75,
            "qc": 8.24,
            "fs": 0.123
        },
        {
            "depth": 6.775,
            "qc": 8.24,
            "fs": 0.126
        },
        {
            "depth": 6.8,
            "qc": 8.4,
            "fs": 0.127
        },
        {
            "depth": 6.825,
            "qc": 8.48,
            "fs": 0.127
        },
        {
            "depth": 6.85,
            "qc": 8.48,
            "fs": 0.128
        },
        {
            "depth": 6.875,
            "qc": 8.4,
            "fs": 0.13
        },
        {
            "depth": 6.9,
            "qc": 8.48,
            "fs": 0.132
        },
        {
            "depth": 6.925,
            "qc": 8.64,
            "fs": 0.135
        },
        {
            "depth": 6.95,
            "qc": 8.88,
            "fs": 0.138
        },
        {
            "depth": 6.975,
            "qc": 8.88,
            "fs": 0.142
        },
        {
            "depth": 7,
            "qc": 8.88,
            "fs": 0.147
        },
        {
            "depth": 7.025,
            "qc": 8.72,
            "fs": 0.151
        },
        {
            "depth": 7.05,
            "qc": 8.48,
            "fs": 0.152
        },
        {
            "depth": 7.075,
            "qc": 8.24,
            "fs": 0.151
        },
        {
            "depth": 7.1,
            "qc": 8.4,
            "fs": 0.147
        },
        {
            "depth": 7.125,
            "qc": 8.72,
            "fs": 0.142
        },
        {
            "depth": 7.15,
            "qc": 8.96,
            "fs": 0.136
        },
        {
            "depth": 7.175,
            "qc": 9.12,
            "fs": 0.132
        },
        {
            "depth": 7.2,
            "qc": 8,
            "fs": 0.062
        },
        {
            "depth": 7.225,
            "qc": 8.56,
            "fs": 0.062
        },
        {
            "depth": 7.25,
            "qc": 8.8,
            "fs": 0.068
        },
        {
            "depth": 7.275,
            "qc": 8.72,
            "fs": 0.074
        },
        {
            "depth": 7.3,
            "qc": 8.56,
            "fs": 0.078
        },
        {
            "depth": 7.325,
            "qc": 8.48,
            "fs": 0.082
        },
        {
            "depth": 7.35,
            "qc": 8.8,
            "fs": 0.082
        },
        {
            "depth": 7.375,
            "qc": 8.96,
            "fs": 0.079
        },
        {
            "depth": 7.4,
            "qc": 9.04,
            "fs": 0.076
        },
        {
            "depth": 7.425,
            "qc": 9.2,
            "fs": 0.075
        },
        {
            "depth": 7.45,
            "qc": 9.76,
            "fs": 0.076
        },
        {
            "depth": 7.475,
            "qc": 10.32,
            "fs": 0.077
        },
        {
            "depth": 7.5,
            "qc": 10.72,
            "fs": 0.078
        },
        {
            "depth": 7.525,
            "qc": 10.64,
            "fs": 0.08
        },
        {
            "depth": 7.55,
            "qc": 10.48,
            "fs": 0.085
        },
        {
            "depth": 7.575,
            "qc": 10.08,
            "fs": 0.091
        },
        {
            "depth": 7.6,
            "qc": 9.84,
            "fs": 0.096
        },
        {
            "depth": 7.625,
            "qc": 9.84,
            "fs": 0.102
        },
        {
            "depth": 7.65,
            "qc": 10.08,
            "fs": 0.107
        },
        {
            "depth": 7.675,
            "qc": 11.04,
            "fs": 0.102
        },
        {
            "depth": 7.7,
            "qc": 14.16,
            "fs": 0.106
        },
        {
            "depth": 7.725,
            "qc": 22.88,
            "fs": 0.206
        },
        {
            "depth": 7.75,
            "qc": 27.92,
            "fs": 0.238
        },
        {
            "depth": 7.775,
            "qc": 38.56,
            "fs": 0.191
        }
      ]
    }
  },
  methods: {
    getEgeData(egeId) {
      return this.eges.find(ege => ege.id === egeId);
    },
    printPage() {
      window.print();
    }
  },
  mounted() {
    this.selectedPoint = this.points[0];
    this.selectedEge = this.eges[0];
    this.layersByPoint = this.layers.filter(layer => layer.pointId == this.selectedPoint.id);
  },
  watch: {
    selectedPoint() {
      this.layersByPoint = this.layers.filter(layer => layer.pointId == this.selectedPoint.id);
    },
    selectedPoint2() {
      this.layersByPoint = this.layers.filter(layer => layer.pointId == this.selectedPoint.id);
    }
  }
}
//оффсет по муфте
//qc fs 
</script>
<template>
  <div class="row mb-3">
    <div class="col-3">
      <label for="formFileSm" class="form-label">Выберите файл/файлы стат. зонд.</label>
      <input class="form-control form-control-sm" id="formFileSm" type="file">
    </div>
  </div>
  <div class="row mb-3">
    <div class="d-flex align-items-center">
      <span class="me-2">Точка:</span>
      <div class="me-3">
        <select class="form-select">
          <option v-for="point in points" :key="point.id" :value="point">{{ point.type }} {{ point.number }} | {{ point.depth }} | {{ point.absMark }}</option>
        </select>
      </div>
      <span class="me-2">Сопоставление с выработкой:</span>
      <div class="me-2">
        <select class="form-select">
          <option v-for="point in points2" :key="point.id" :value="point">{{ point.type }} {{ point.number }} | {{ point.depth }} | {{ point.absMark }}</option>
        </select>
      </div>
      <div class="ms-3 ms-auto">
        <div class="d-flex align-items-center">
          <span class="me-1">Шаблон для печати:</span>
          <div class="me-2">
            <select class="form-select">
              <option value="A4">A4 штамп 297*210</option>
              <option value="A4_border">A4*2 штамп 297*420</option>
              <option value="A4_border">A4 297*210</option>
            </select>
          </div>
          <div class="me-2">
            <select class="form-select">
              <option value="A4">Печать текущей колонки</option>
              <option value="A4_border">Печать всех колонок</option>
            </select>
          </div>
          <button @click="printPage" class="btn btn-success">*.pdf</button>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-3 border no-print overflow-auto" style="height: 60vh;">
      <table class="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th>№</th>
            <th>h, м</th>
            <th>q<sub>c</sub>, МПа</th>
            <th>f<sub>s</sub>, МПа</th>
            <th>U, МПа</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, index) in cpt" :key="value.depth">
            <td>{{ index }}</td>
            <td>{{ value.depth }}</td>
            <td>{{ value.qc }}</td>
            <td>{{ value.fs }}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-4 border no-print">
      <img src="../assets/cpt_layers.png" width="600px">
    </div>
  </div>
</template>