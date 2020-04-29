export default [
  {
    id: "test",
    name: "PUZZLE 测试模块",
    leaf: false,
    children: [
      {
        id: "test1",
        name: "测试页面 KeepAlive",
        leaf: true,
        page: "/test1",
        puzzle: "test"
      },
      {
        id: "test2",
        name: "测试长页面记录滚动条位置",
        leaf: true,
        page: "/test2",
        puzzle: "test"
      },
      {
        id: "puzzlesDetail",
        name: "模块加载详情",
        leaf: true,
        page: "/puzzlesDetail",
        puzzle: "test"
      },
      {
        id: "changeFrame",
        name: "切换基座（灰度测试）",
        leaf: true,
        page: "/changeFrame",
        puzzle: "test"
      }
    ],
    icon: "puzzle",
    puzzle: "test",
    version: "0.1.0",
    host: "http://www.shuva.cn/demo/puzzle-parts"
  },
  {
    id: "elastic",
    name: "弹性计算",
    leaf: false,
    children: [
      {
        id: "ecs",
        name: "云服务器 ECS",
        leaf: true,
        page: "/ecs",
        puzzle: "elastic"
      },
      {
        id: "slb",
        name: "负载均衡",
        leaf: true,
        page: "/slb",
        puzzle: "elastic"
      },
      {
        id: "ess",
        name: "弹性伸缩",
        leaf: true,
        page: "/ess",
        puzzle: "elastic"
      },
      {
        id: "cs",
        name: "容器服务",
        leaf: true,
        page: "/cs",
        puzzle: "elastic"
      },
      {
        id: "csk",
        name: "容器服务 Kubernetes 版",
        leaf: true,
        page: "/csk",
        puzzle: "elastic"
      },
      {
        id: "cr",
        name: "容器镜像服务",
        leaf: true,
        page: "/cr",
        puzzle: "elastic"
      },
      {
        id: "ros",
        name: "资源编排",
        leaf: true,
        page: "/ros",
        puzzle: "elastic"
      },
      {
        id: "batchcompute",
        name: "批量计算",
        leaf: true,
        page: "/batchcompute",
        puzzle: "elastic"
      },
      {
        id: "fc",
        name: "函数计算",
        leaf: true,
        page: "/fc",
        puzzle: "elastic"
      },
      {
        id: "ehpc",
        name: "弹性高性能计算",
        leaf: true,
        page: "/ehpc",
        puzzle: "elastic"
      },
      {
        id: "swas",
        name: "轻量应用服务器",
        leaf: true,
        page: "/swas",
        puzzle: "elastic"
      },
      {
        id: "gws",
        name: "图形工作站",
        leaf: true,
        page: "/gws",
        puzzle: "elastic"
      },
      {
        id: "eci",
        name: "弹性容器实例 ECI",
        leaf: true,
        page: "/eci",
        puzzle: "elastic"
      }
    ],
    icon: "cpu",
    puzzle: "elastic",
    version: "0.1.0"
  },
  {
    id: "database",
    name: "数据库",
    leaf: false,
    children: [
      {
        id: "polarDB",
        name: "云数据库 POLARDB",
        leaf: true,
        page: "/polarDB",
        puzzle: "database"
      },
      {
        id: "rds",
        name: "云数据库 RDS 版",
        leaf: true,
        page: "/rds",
        puzzle: "database"
      },
      {
        id: "dds",
        name: "云数据库 MongoDB 版",
        leaf: true,
        page: "/dds",
        puzzle: "database"
      },
      {
        id: "kvstore",
        name: "云数据库 Redis 版",
        leaf: true,
        page: "/kvstore",
        puzzle: "database"
      },
      {
        id: "memcache",
        name: "云数据库 Memcache 版",
        leaf: true,
        page: "/memcache",
        puzzle: "database"
      },
      {
        id: "petadata",
        name: "云数据库 HybridDB for MySQL ",
        leaf: true,
        page: "/petadata",
        puzzle: "database"
      },
      {
        id: "hbase",
        name: "云数据库 HBase 版",
        leaf: true,
        page: "/hbase",
        puzzle: "database"
      },
      {
        id: "tsdb",
        name: "时序时空数据库 TSDB",
        leaf: true,
        page: "/tsdb",
        puzzle: "database"
      },
      {
        id: "gpdb",
        name: "分析型数据库 PostgreSQL版",
        leaf: true,
        page: "/gpdb",
        puzzle: "database"
      },
      {
        id: "oce",
        name: "云数据库 OceanBase",
        leaf: true,
        page: "/oce",
        puzzle: "database"
      },
      {
        id: "dts",
        name: "数据传输服务 DTS",
        leaf: true,
        page: "/dts",
        puzzle: "database"
      },
      {
        id: "dms",
        name: "数据管理 DMS",
        leaf: true,
        page: "/dms",
        puzzle: "database"
      },
      {
        id: "dbs",
        name: "数据库备份 DBS",
        leaf: true,
        page: "/dbs",
        puzzle: "database"
      },
      {
        id: "hdm",
        name: "混合云数据库管理 HDM",
        leaf: true,
        page: "/hdm",
        puzzle: "database"
      },
      {
        id: "drds",
        name: "分布式关系型数据库 DRDS",
        leaf: true,
        page: "/drds",
        puzzle: "database"
      },
      {
        id: "gds",
        name: "图数据库 GDB",
        leaf: true,
        page: "/gds",
        puzzle: "database"
      },
      {
        id: "adam",
        name: "数据库和应用迁移",
        leaf: true,
        page: "/adam",
        puzzle: "database"
      }
    ],
    icon: "database",
    puzzle: "database",
    version: "0.1.0"
  },
  {
    id: "cdn",
    name: "存储与CDN",
    leaf: false,
    children: [
      {
        id: "oss",
        name: "对象存储 OSS",
        leaf: true,
        page: "/oss",
        puzzle: "cdn"
      },
      {
        id: "nas",
        name: "文件存储 NAS",
        leaf: true,
        page: "/nas",
        puzzle: "cdn"
      },
      {
        id: "ots",
        name: "表格存储",
        leaf: true,
        page: "/ots",
        puzzle: "cdn"
      },
      {
        id: "oas",
        name: "归档存储",
        leaf: true,
        page: "/oas",
        puzzle: "cdn"
      },
      {
        id: "cdn",
        name: "CDN",
        leaf: true,
        page: "",
        puzzle: "cdn"
      },
      {
        id: "pcdn",
        name: "PCDN",
        leaf: true,
        page: "/pcdn",
        puzzle: "cdn"
      },
      {
        id: "dcdn",
        name: "全站加速",
        leaf: true,
        page: "/dcdn",
        puzzle: "cdn"
      },
      {
        id: "sgw",
        name: "云存储网关",
        leaf: true,
        page: "/sgw",
        puzzle: "cdn"
      },
      {
        id: "cloudphoto",
        name: "智能云相册",
        leaf: true,
        page: "/cloudphoto",
        puzzle: "cdn"
      },
      {
        id: "hbr",
        name: "混合云备份",
        leaf: true,
        page: "/hbr",
        puzzle: "cdn"
      },
      {
        id: "hdr",
        name: "混合云容灾",
        leaf: true,
        page: "/hdr",
        puzzle: "cdn"
      },
      {
        id: "scdn",
        name: "安全加速 SCDN",
        leaf: true,
        page: "/scdn",
        puzzle: "cdn"
      },
      {
        id: "imm",
        name: "智能媒体管理",
        leaf: true,
        page: "/imm",
        puzzle: "cdn"
      },
      {
        id: "hcs_mgw",
        name: "闪电立方",
        leaf: true,
        page: "/hcs_mgw",
        puzzle: "cdn"
      },
      {
        id: "ens",
        name: "边缘节点服务 ENS",
        leaf: true,
        page: "/ens",
        puzzle: "cdn"
      },
      {
        id: "alidfs",
        name: "文件存储HDFS",
        leaf: true,
        page: "/alidfs",
        puzzle: "cdn"
      }
    ],
    icon: "download-cloud",
    puzzle: "cdn",
    version: "0.1.0"
  },
  {
    id: "network",
    name: "网络",
    leaf: false,
    children: [
      {
        id: "vpc",
        name: "专有网络 VPC",
        leaf: true,
        page: "/vpc",
        puzzle: "network"
      },
      {
        id: "nat_gw",
        name: "NAT 网关",
        leaf: true,
        page: "/nat_gw",
        puzzle: "network"
      },
      {
        id: "stp",
        name: "共享流量包",
        leaf: true,
        page: "/stp",
        puzzle: "network"
      },
      {
        id: "ip",
        name: "弹性公网 IP",
        leaf: true,
        page: "/ip",
        puzzle: "network"
      },
      {
        id: "ri",
        name: "高速通道",
        leaf: true,
        page: "/ri",
        puzzle: "network"
      },
      {
        id: "vpn",
        name: "VPN 网关",
        leaf: true,
        page: "/vpn",
        puzzle: "network"
      },
      {
        id: "cbwp",
        name: "共享带宽",
        leaf: true,
        page: "/cbwp",
        puzzle: "network"
      },
      {
        id: "ga",
        name: "全球加速",
        leaf: true,
        page: "/ga",
        puzzle: "network"
      },
      {
        id: "smartag",
        name: "智能接入网关",
        leaf: true,
        page: "/smartag",
        puzzle: "network"
      },
      {
        id: "ipv6trans",
        name: "IPv6 转换服务",
        leaf: true,
        page: "/ipv6trans",
        puzzle: "network"
      },
      {
        id: "cbn",
        name: "云企业网",
        leaf: true,
        page: "/cbn",
        puzzle: "network"
      }
    ],
    icon: "globe",
    puzzle: "network",
    version: "0.1.0"
  },
  {
    id: "analysis",
    name: "分析",
    leaf: false,
    children: [
      {
        id: "emr",
        name: "E-MapReduce",
        leaf: true,
        page: "/emr",
        puzzle: "analysis"
      },
      {
        id: "odps",
        name: "MaxCompute",
        leaf: true,
        page: "/odps",
        puzzle: "analysis"
      },
      {
        id: "ads",
        name: "分析型数据库",
        leaf: true,
        page: "/ads",
        puzzle: "analysis"
      },
      {
        id: "cdp",
        name: "数据集成（旧版）",
        leaf: true,
        page: "/cdp",
        puzzle: "analysis"
      },
      {
        id: "openanalytics",
        name: "Data Lake Analytics",
        leaf: true,
        page: "/openanalytics",
        puzzle: "analysis"
      }
    ],
    icon: "pie-chart",
    puzzle: "analysis",
    version: "0.1.0"
  },
  {
    id: "yuntongxin",
    name: "云通信",
    leaf: false,
    children: [
      {
        id: "dyvms",
        name: "语音服务",
        leaf: true,
        page: "/dyvms",
        puzzle: "yuntongxin"
      },
      {
        id: "dycdp",
        name: "流量服务",
        leaf: true,
        page: "/dycdp",
        puzzle: "yuntongxin"
      },
      {
        id: "dysms",
        name: "短信服务",
        leaf: true,
        page: "/dysms",
        puzzle: "yuntongxin"
      },
      {
        id: "dyiot",
        name: "物联网无线连接服务",
        leaf: true,
        page: "/dyiot",
        puzzle: "yuntongxin"
      },
      {
        id: "dypls",
        name: "号码隐私保护",
        leaf: true,
        page: "/dypls",
        puzzle: "yuntongxin"
      },
      {
        id: "dypns",
        name: "号码认证服务",
        leaf: true,
        page: "/dypns",
        puzzle: "yuntongxin"
      },
      {
        id: "snsu",
        name: "云通信网络加速",
        leaf: true,
        page: "/snsu",
        puzzle: "yuntongxin"
      }
    ],
    icon: "mail",
    puzzle: "yuntongxin",
    version: "0.1.0"
  },
  {
    id: "jkgl",
    name: "监控与管理",
    leaf: false,
    children: [
      {
        id: "cms",
        name: "云监控",
        leaf: true,
        page: "/cms",
        puzzle: "jkgl"
      },
      {
        id: "ram",
        name: "访问控制",
        leaf: true,
        page: "/ram",
        puzzle: "jkgl"
      },
      {
        id: "actiontrail",
        name: "操作审计",
        leaf: true,
        page: "/actiontrail",
        puzzle: "jkgl"
      },
      {
        id: "kms",
        name: "密钥管理服务",
        leaf: true,
        page: "/kms",
        puzzle: "jkgl"
      },
      {
        id: "advisor",
        name: "智能顾问",
        leaf: true,
        page: "/advisor",
        puzzle: "jkgl"
      }
    ],
    icon: "aperture",
    puzzle: "jkgl",
    version: "0.1.0"
  },
  {
    id: "apps",
    name: "应用服务",
    leaf: false,
    children: [
      {
        id: "sls",
        name: "日志服务",
        leaf: true,
        page: "/sls",
        puzzle: "apps"
      },
      {
        id: "opensearch",
        name: "开放搜索",
        leaf: true,
        page: "/opensearch",
        puzzle: "apps"
      },
      {
        id: "pts",
        name: "性能测试服务",
        leaf: true,
        page: "/pts",
        puzzle: "apps"
      },
      {
        id: "dm",
        name: "邮件推送",
        leaf: true,
        page: "/dm",
        puzzle: "apps"
      },
      {
        id: "apigateway",
        name: "API 网关",
        leaf: true,
        page: "/apigateway",
        puzzle: "apps"
      },
      {
        id: "iot",
        name: "物联网平台",
        leaf: true,
        page: "/iot",
        puzzle: "apps"
      },
      {
        id: "sca",
        name: "智能对话分析",
        leaf: true,
        page: "/sca",
        puzzle: "apps"
      },
      {
        id: "rdc",
        name: "云效",
        leaf: true,
        page: "/rdc",
        puzzle: "apps"
      },
      {
        id: "cloudap",
        name: "云 AP",
        leaf: true,
        page: "/cloudap",
        puzzle: "apps"
      },
      {
        id: "clouddesktop",
        name: "云桌面",
        leaf: true,
        page: "/clouddesktop",
        puzzle: "apps"
      },
      {
        id: "codepipeline",
        name: "CodePipeline",
        leaf: true,
        page: "/codepipeline",
        puzzle: "apps"
      },
      {
        id: "ccs",
        name: "云客服",
        leaf: true,
        page: "/ccs",
        puzzle: "apps"
      },
      {
        id: "beebot",
        name: "云小蜜",
        leaf: true,
        page: "/beebot",
        puzzle: "apps"
      },
      {
        id: "ccc",
        name: "云呼叫中心",
        leaf: true,
        page: "/ccc",
        puzzle: "apps"
      },
      {
        id: "npp",
        name: "Node.js 性能平台",
        leaf: true,
        page: "/npp",
        puzzle: "apps"
      },
      {
        id: "developer",
        name: "API 控制台",
        leaf: true,
        page: "/developer",
        puzzle: "apps"
      },
      {
        id: "iovcc",
        name: "智联车管理云平台",
        leaf: true,
        page: "/iovcc",
        puzzle: "apps"
      },
      {
        id: "baas",
        name: "区块链服务",
        leaf: true,
        page: "/baas",
        puzzle: "apps"
      },
      {
        id: "airec",
        name: "智能推荐",
        leaf: true,
        page: "/airec",
        puzzle: "apps"
      },
      {
        id: "linkwan",
        name: "物联网络管理平台",
        leaf: true,
        page: "/linkwan",
        puzzle: "apps"
      },
      {
        id: "iotid",
        name: "IoT 设备身份认证",
        leaf: true,
        page: "/iotid",
        puzzle: "apps"
      },
      {
        id: "yida",
        name: "宜搭",
        leaf: true,
        page: "/yida",
        puzzle: "apps"
      }
    ],
    icon: "grid",
    puzzle: "apps",
    version: "0.1.0"
  },
  {
    id: "hlwzjj",
    name: "互联网中间件",
    leaf: false,
    children: [
      {
        id: "edas",
        name: "企业级分布式应用服务 EDAS",
        leaf: true,
        page: "/edas",
        puzzle: "hlwzjj"
      },
      {
        id: "csb",
        name: "云服务总线",
        leaf: true,
        page: "/csb",
        puzzle: "hlwzjj"
      },
      {
        id: "arms",
        name: "业务实时监控服务",
        leaf: true,
        page: "/arms",
        puzzle: "hlwzjj"
      },
      {
        id: "gts",
        name: "全局事务服务",
        leaf: true,
        page: "/gts",
        puzzle: "hlwzjj"
      },
      {
        id: "acms",
        name: "应用配置管理",
        leaf: true,
        page: "/acms",
        puzzle: "hlwzjj"
      },
      {
        id: "xtrace",
        name: "链路追踪",
        leaf: true,
        page: "/xtrace",
        puzzle: "hlwzjj"
      },
      {
        id: "ahas",
        name: "应用高可用服务",
        leaf: true,
        page: "/ahas",
        puzzle: "hlwzjj"
      }
    ],
    icon: "layers",
    puzzle: "hlwzjj",
    version: "0.1.0"
  },
  {
    id: "mq",
    name: "消息队列 MQ",
    leaf: false,
    children: [
      {
        id: "ons",
        name: "消息队列 RocketMQ",
        leaf: true,
        page: "/ons",
        puzzle: "mq"
      },
      {
        id: "alikafka",
        name: "消息队列 Kafka",
        leaf: true,
        page: "/alikafka",
        puzzle: "mq"
      },
      {
        id: "amqp",
        name: "消息队列 AMQP",
        leaf: true,
        page: "/amqp",
        puzzle: "mq"
      },
      {
        id: "mq4iot",
        name: "微消息队列 for IoT",
        leaf: true,
        page: "/mq4iot",
        puzzle: "mq"
      },
      {
        id: "mns",
        name: "消息服务 MNS",
        leaf: true,
        page: "/mns",
        puzzle: "mq"
      }
    ],
    icon: "message-square",
    puzzle: "mq",
    version: "0.1.0"
  },
  {
    id: "yidongyun",
    name: "移动云",
    leaf: false,
    children: [
      {
        id: "httpdns",
        name: "HTTPDNS",
        leaf: true,
        page: "/httpdns",
        puzzle: "yidongyun"
      },
      {
        id: "mqc",
        name: "移动测试",
        leaf: true,
        page: "/mqc",
        puzzle: "yidongyun"
      },
      {
        id: "hotfix",
        name: "移动热修复",
        leaf: true,
        page: "/hotfix",
        puzzle: "yidongyun"
      },
      {
        id: "cps",
        name: "移动推送",
        leaf: true,
        page: "/cps",
        puzzle: "yidongyun"
      },
      {
        id: "man",
        name: "移动数据分析",
        leaf: true,
        page: "/man",
        puzzle: "yidongyun"
      },
      {
        id: "feedback",
        name: "移动用户反馈",
        leaf: true,
        page: "/feedback",
        puzzle: "yidongyun"
      }
    ],
    icon: "smartphone",
    puzzle: "yidongyun",
    version: "0.1.0"
  },
  {
    id: "dtplus",
    name: "大数据（数加）",
    leaf: false,
    children: [
      {
        id: "dtplus_overview",
        name: "数加控制台概览",
        leaf: true,
        page: "/dtplus_overview",
        puzzle: "dtplus"
      },
      {
        id: "dide",
        name: "DataWorks",
        leaf: true,
        page: "/dide",
        puzzle: "dtplus"
      },
      {
        id: "quickbi",
        name: "Quick BI",
        leaf: true,
        page: "/quickbi",
        puzzle: "dtplus"
      },
      {
        id: "pai",
        name: "机器学习",
        leaf: true,
        page: "/pai",
        puzzle: "dtplus"
      },
      {
        id: "receng",
        name: "推荐引擎",
        leaf: true,
        page: "/receng",
        puzzle: "dtplus"
      },
      {
        id: "prophet",
        name: "公众趋势分析",
        leaf: true,
        page: "/prophet",
        puzzle: "dtplus"
      },
      {
        id: "dataphin",
        name: "智能数据构建与管理 Dataphin",
        leaf: true,
        page: "/dataphin",
        puzzle: "dtplus"
      },
      {
        id: "datav",
        name: "DataV 数据可视化",
        leaf: true,
        page: "/datav",
        puzzle: "dtplus"
      },
      {
        id: "nls",
        name: "智能语音交互",
        leaf: true,
        page: "/nls",
        puzzle: "dtplus"
      },
      {
        id: "stream",
        name: "实时计算",
        leaf: true,
        page: "/stream",
        puzzle: "dtplus"
      },
      {
        id: "portrait",
        name: "画像分析",
        leaf: true,
        page: "/portrait",
        puzzle: "dtplus"
      },
      {
        id: "eprofile",
        name: "企业图谱",
        leaf: true,
        page: "/eprofile",
        puzzle: "dtplus"
      },
      {
        id: "datai",
        name: "数据集成",
        leaf: true,
        page: "/datai",
        puzzle: "dtplus"
      },
      {
        id: "face",
        name: "人脸识别",
        leaf: true,
        page: "/face",
        puzzle: "dtplus"
      },
      {
        id: "image",
        name: "图像识别",
        leaf: true,
        page: "/image",
        puzzle: "dtplus"
      },
      {
        id: "elasticsearch",
        name: "阿里云 Elasticsearch",
        leaf: true,
        page: "/elasticsearch",
        puzzle: "dtplus"
      },
      {
        id: "nlp",
        name: "自然语言处理",
        leaf: true,
        page: "/nlp",
        puzzle: "dtplus"
      },
      {
        id: "alimt",
        name: "机器翻译",
        leaf: true,
        page: "/alimt",
        puzzle: "dtplus"
      },
      {
        id: "iplus",
        name: "I+ 关系网络分析",
        leaf: true,
        page: "/iplus",
        puzzle: "dtplus"
      },
      {
        id: "imagesearch",
        name: "图像搜索",
        leaf: true,
        page: "/imagesearch",
        puzzle: "dtplus"
      }
    ],
    icon: "codesandbox",
    puzzle: "dtplus",
    version: "0.1.0"
  },
  {
    id: "yundun",
    name: "安全（云盾）",
    leaf: false,
    children: [
      {
        id: "sas",
        name: "云安全中心（态势感知）",
        leaf: true,
        page: "/sas",
        puzzle: "yundun"
      },
      {
        id: "ddos",
        name: "DDoS 基础防护",
        leaf: true,
        page: "/ddos",
        puzzle: "yundun"
      },
      {
        id: "ddospro",
        name: "DDoS 高防",
        leaf: true,
        page: "/ddospro",
        puzzle: "yundun"
      },
      {
        id: "gameshield",
        name: "游戏盾",
        leaf: true,
        page: "/gameshield",
        puzzle: "yundun"
      },
      {
        id: "waf",
        name: "Web 应用防火墙（网络安全）",
        leaf: true,
        page: "/waf",
        puzzle: "yundun"
      },
      {
        id: "aqs",
        name: "云安全中心（安骑士）",
        leaf: true,
        page: "/aqs",
        puzzle: "yundun"
      },
      {
        id: "cas",
        name: "SSL 证书（应用安全）",
        leaf: true,
        page: "/cas",
        puzzle: "yundun"
      },
      {
        id: "dbaudit",
        name: "数据库审计（数据安全）",
        leaf: true,
        page: "/dbaudit",
        puzzle: "yundun"
      },
      {
        id: "hsm",
        name: "加密服务（数据安全）",
        leaf: true,
        page: "/hsm",
        puzzle: "yundun"
      },
      {
        id: "saf",
        name: "风险识别（业务安全）",
        leaf: true,
        page: "/saf",
        puzzle: "yundun"
      },
      {
        id: "cts",
        name: "内容安全（业务安全）",
        leaf: true,
        page: "/cts",
        puzzle: "yundun"
      },
      {
        id: "bastion",
        name: "堡垒机（安全管理）",
        leaf: true,
        page: "/bastion",
        puzzle: "yundun"
      },
      {
        id: "mss",
        name: "安全管家（安全服务）",
        leaf: true,
        page: "/mss",
        puzzle: "yundun"
      },
      {
        id: "xz",
        name: "先知（安全服务）",
        leaf: true,
        page: "/xz",
        puzzle: "yundun"
      },
      {
        id: "cfw",
        name: "云防火墙",
        leaf: true,
        page: "/cfw",
        puzzle: "yundun"
      },
      {
        id: "cloudauth",
        name: "实人认证",
        leaf: true,
        page: "/cloudauth",
        puzzle: "yundun"
      },
      {
        id: "avds",
        name: "网站威胁扫描（应用安全）",
        leaf: true,
        page: "/avds",
        puzzle: "yundun"
      },
      {
        id: "afs",
        name: "数据风控（业务安全）",
        leaf: true,
        page: "/afs",
        puzzle: "yundun"
      },
      {
        id: "antibot",
        name: "爬虫风险管理",
        leaf: true,
        page: "/antibot",
        puzzle: "yundun"
      },
      {
        id: "sddp",
        name: "敏感数据保护（数据安全）",
        leaf: true,
        page: "/sddp",
        puzzle: "yundun"
      },
      {
        id: "idaas",
        name: "应用身份服务",
        leaf: true,
        page: "/idaas",
        puzzle: "yundun"
      }
    ],
    icon: "shield",
    puzzle: "yundun",
    version: "0.1.0"
  },
  {
    id: "netcn",
    name: "域名与网站（万网）",
    leaf: false,
    children: [
      {
        id: "domain",
        name: "域名",
        leaf: true,
        page: "/domain",
        puzzle: "netcn"
      },
      {
        id: "dns",
        name: "云解析 DNS",
        leaf: true,
        page: "/dns",
        puzzle: "netcn"
      },
      {
        id: "host",
        name: "云虚拟主机",
        leaf: true,
        page: "/host",
        puzzle: "netcn"
      },
      {
        id: "mail",
        name: "企业邮箱",
        leaf: true,
        page: "/mail",
        puzzle: "netcn"
      },
      {
        id: "website",
        name: "标准建站",
        leaf: true,
        page: "/website",
        puzzle: "netcn"
      },
      {
        id: "ews",
        name: "弹性 Web 托管",
        leaf: true,
        page: "/ews",
        puzzle: "netcn"
      },
      {
        id: "trademark",
        name: "商标服务",
        leaf: true,
        page: "/trademark",
        puzzle: "netcn"
      }
    ],
    icon: "server",
    puzzle: "netcn",
    version: "0.1.0"
  },
  {
    id: "others",
    name: "其他服务",
    leaf: false,
    children: [
      {
        id: "video",
        name: "视频服务",
        leaf: false,
        children: [
          {
            id: "mts",
            name: "媒体处理",
            leaf: true,
            page: "/mts",
            puzzle: "others"
          },
          {
            id: "vod",
            name: "视频点播",
            leaf: true,
            page: "/vod",
            puzzle: "others"
          },
          {
            id: "live",
            name: "视频直播",
            leaf: true,
            page: "/live",
            puzzle: "others"
          },
          {
            id: "rtc",
            name: "音视频通信 RTC",
            leaf: true,
            page: "/rtc",
            puzzle: "others"
          },
          {
            id: "ivision",
            name: "智能视觉（模型训练预测）",
            leaf: true,
            page: "/ivision",
            puzzle: "others"
          },
          {
            id: "vs",
            name: "视频监控",
            leaf: true,
            page: "/vs",
            puzzle: "others"
          }
        ],
        icon: "film",
        puzzle: "others"
      },
      {
        id: "market",
        name: "云市场",
        leaf: false,
        children: [
          {
            id: "market",
            name: "云市场",
            leaf: true,
            page: "/market",
            puzzle: "others"
          }
        ],
        icon: "cloud",
        puzzle: "others"
      },
      {
        id: "spc",
        name: "支持与服务",
        leaf: false,
        children: [
          {
            id: "spc",
            name: "支持与服务",
            leaf: true,
            page: "/spc",
            puzzle: "others"
          }
        ],
        icon: "help-circle",
        puzzle: "others"
      }
    ],
    icon: "box",
    puzzle: "others",
    version: "0.1.0"
  }
];
