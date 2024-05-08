export const RoutersTest = {
    Router1: {
      interfaces: [ '192.168.122.21', '192.168.10.26', '192.168.10.30' ],
      neighbor: [ '192.168.10.25', '192.168.10.29', '192.168.122.1' ]
    },
    Router2: {
      interfaces: [
        '192.168.10.25',
        '192.168.10.5',
        '192.168.10.13',
        '192.168.10.21',
        '192.168.10.33'
      ],
      neighbor: [
        '192.168.10.6',
        '192.168.10.14',
        '192.168.10.22',
        '192.168.10.26',
        '192.168.10.34'
      ]
    },
    Router3: {
      interfaces: [
        '192.168.10.29',
        '192.168.10.1',
        '192.168.10.9',
        '192.168.10.17',
        '192.168.10.37'
      ],
      neighbor: [
        '192.168.10.2',
        '192.168.10.10',
        '192.168.10.18',
        '192.168.10.30',
        '192.168.10.38'
      ]
    },
    Router4: {
      interfaces: [ '192.168.10.6', '192.168.10.2' ],
      neighbor: [ '192.168.10.1', '192.168.10.5' ]
    },
    Router5: {
      interfaces: [ '192.168.10.14', '192.168.10.10' ],
      neighbor: [ '192.168.10.9', '192.168.10.13' ]
    },
    Router6: {
      interfaces: [ '192.168.10.22', '192.168.10.18' ],
      neighbor: [ '192.168.10.17', '192.168.10.21' ]
    },
    Router7: {
      interfaces: [ '192.168.10.34', '192.168.10.38' ],
      neighbor: [ '192.168.10.33', '192.168.10.37' ]
    }
  }

  export const rotuersARP = [
    {
      "vrf":"Default",
      "arp-oper":[
        {
          "address":"192.168.1.70",
          "enctype":"ios-encaps-type-arpa",
          "interface":"GigabitEthernet1.20",
          "type":"ios-linktype-ip",
          "mode":"ios-arp-mode-interface",
          "hwtype":"ios-snpa-type-ieee48",
          "hardware":"0c:12:9a:d3:00:00",
          "time":"2024-05-07T21:03:16.000451+00:00"
        },
        {
          "address":"192.168.1.78",
          "enctype":"ios-encaps-type-arpa",
          "interface":"GigabitEthernet1.10",
          "type":"ios-linktype-ip",
          "mode":"ios-arp-mode-interface","hwtype":"ios-snpa-type-ieee48","hardware":"0c:12:9a:d3:00:00","time":"2024-05-07T21:03:16.000449+00:00"},
          {
            "address":"192.168.10.26",
            "enctype":"ios-encaps-type-arpa",
            "interface":"GigabitEthernet2","type":"ios-linktype-ip","mode":"ios-arp-mode-interface","hwtype":"ios-snpa-type-ieee48","hardware":"0c:12:9a:d3:00:01","time":"2024-05-07T21:03:16.000451+00:00"},
          {
            "address":"192.168.10.29",
            "enctype":"ios-encaps-type-arpa",
            "interface":"GigabitEthernet3","type":"ios-linktype-ip","mode":"ios-arp-mode-dynamic","hwtype":"ios-snpa-type-ieee48","hardware":"0c:31:1d:f9:00:02","time":"2024-05-07T21:03:23.000624+00:00"},
          {
            "address":"192.168.10.30",
            "enctype":"ios-encaps-type-arpa",
            "interface":"GigabitEthernet3","type":"ios-linktype-ip","mode":"ios-arp-mode-interface","hwtype":"ios-snpa-type-ieee48","hardware":"0c:12:9a:d3:00:02","time":"2024-05-07T21:03:16.000451+00:00"},
          {
            "address":"192.168.122.1",
            "enctype":"ios-encaps-type-arpa",
            "interface":"GigabitEthernet4","type":"ios-linktype-ip","mode":"ios-arp-mode-dynamic","hwtype":"ios-snpa-type-ieee48","hardware":"52:54:00:6d:8f:be","time":"2024-05-07T21:25:23.000493+00:00"},
          {
            "address":"192.168.122.21",
            "enctype":"ios-encaps-type-arpa",
            "interface":"GigabitEthernet4","type":"ios-linktype-ip","mode":"ios-arp-mode-interface","hwtype":"ios-snpa-type-ieee48","hardware":"0c:12:9a:d3:00:03","time":"2024-05-07T21:03:27.000149+00:00"},
          {
            "address":"192.168.122.202",
            "enctype":"ios-encaps-type-arpa",
            "interface":"GigabitEthernet4","type":"ios-linktype-ip","mode":"ios-arp-mode-dynamic","hwtype":"ios-snpa-type-ieee48","hardware":"0c:91:10:ec:00:05","time":"2024-05-07T21:03:31.00098+00:00"}
        ]
    }
    ,{
      "vrf":"Default",
      "arp-oper":[
        {
          "address":"192.168.10.1",
          "enctype":"ios-encaps-type-arpa",
          "interface":"GigabitEthernet4",
          "type":"ios-linktype-ip",
          "mode":"ios-arp-mode-interface",
          "hwtype":"ios-snpa-type-ieee48",
          "hardware":"0c:31:1d:f9:00:03",
          "time":"2024-05-07T21:03:22.000491+00:00"
        },
        {
          "address":"192.168.10.2",
          "enctype":"ios-encaps-type-arpa",
          "interface":"GigabitEthernet4",
          "type":"ios-linktype-ip",
          "mode":"ios-arp-mode-dynamic","hwtype":"ios-snpa-type-ieee48","hardware":"0c:75:0e:8c:00:01","time":"2024-05-07T21:03:23.000534+00:00"},
          {"address":"192.168.10.9","enctype":"ios-encaps-type-arpa","interface":"GigabitEthernet6","type":"ios-linktype-ip","mode":"ios-arp-mode-interface","hwtype":"ios-snpa-type-ieee48","hardware":"0c:31:1d:f9:00:05","time":"2024-05-07T21:03:22.000491+00:00"},
          {"address":"192.168.10.10","enctype":"ios-encaps-type-arpa","interface":"GigabitEthernet6","type":"ios-linktype-ip","mode":"ios-arp-mode-dynamic","hwtype":"ios-snpa-type-ieee48","hardware":"0c:6d:c2:08:00:00","time":"2024-05-07T21:03:23.000536+00:00"},
          {"address":"192.168.10.17","enctype":"ios-encaps-type-arpa","interface":"GigabitEthernet5","type":"ios-linktype-ip","mode":"ios-arp-mode-interface","hwtype":"ios-snpa-type-ieee48","hardware":"0c:31:1d:f9:00:04","time":"2024-05-07T21:03:22.00049+00:00"},
          {"address":"192.168.10.29","enctype":"ios-encaps-type-arpa","interface":"GigabitEthernet3","type":"ios-linktype-ip","mode":"ios-arp-mode-interface","hwtype":"ios-snpa-type-ieee48","hardware":"0c:31:1d:f9:00:02","time":"2024-05-07T21:03:22.00049+00:00"},
          {"address":"192.168.10.30","enctype":"ios-encaps-type-arpa","interface":"GigabitEthernet3","type":"ios-linktype-ip","mode":"ios-arp-mode-dynamic","hwtype":"ios-snpa-type-ieee48","hardware":"0c:12:9a:d3:00:02","time":"2024-05-07T21:03:23.000491+00:00"},
          {"address":"192.168.10.37","enctype":"ios-encaps-type-arpa","interface":"GigabitEthernet2","type":"ios-linktype-ip","mode":"ios-arp-mode-interface","hwtype":"ios-snpa-type-ieee48","hardware":"0c:31:1d:f9:00:01","time":"2024-05-07T21:03:22.000483+00:00"}
      ]
    },
    {
      "vrf":"Default",
      "arp-oper":[
        {
          "address":"192.168.1.6",
          "enctype":"ios-encaps-type-arpa",
          "interface":"GigabitEthernet1.10",
          "type":"ios-linktype-ip",
          "mode":"ios-arp-mode-interface",
          "hwtype":"ios-snpa-type-ieee48",
          "hardware":"0c:75:0e:8c:00:00",
          "time":"2024-05-07T21:03:10.000282+00:00"
        },
        {
          "address":"192.168.1.14",
          "enctype":"ios-encaps-type-arpa",
          "interface":"GigabitEthernet1.20",
          "type":"ios-linktype-ip",
          "mode":"ios-arp-mode-interface","hwtype":"ios-snpa-type-ieee48","hardware":"0c:75:0e:8c:00:00","time":"2024-05-07T21:03:10.000291+00:00"},
          {"address":"192.168.10.1","enctype":"ios-encaps-type-arpa","interface":"GigabitEthernet2","type":"ios-linktype-ip","mode":"ios-arp-mode-dynamic","hwtype":"ios-snpa-type-ieee48","hardware":"0c:31:1d:f9:00:03","time":"2024-05-07T21:03:23.000402+00:00"},
          {"address":"192.168.10.2","enctype":"ios-encaps-type-arpa","interface":"GigabitEthernet2","type":"ios-linktype-ip","mode":"ios-arp-mode-interface","hwtype":"ios-snpa-type-ieee48","hardware":"0c:75:0e:8c:00:01","time":"2024-05-07T21:03:10.000291+00:00"},
          {"address":"192.168.10.6","enctype":"ios-encaps-type-arpa","interface":"GigabitEthernet3","type":"ios-linktype-ip","mode":"ios-arp-mode-interface","hwtype":"ios-snpa-type-ieee48","hardware":"0c:75:0e:8c:00:02","time":"2024-05-07T21:03:10.000291+00:00"}]},{"vrf":"Default","arp-oper":[{"address":"192.168.1.22","enctype":"ios-encaps-type-arpa","interface":"GigabitEthernet3.10","type":"ios-linktype-ip","mode":"ios-arp-mode-interface","hwtype":"ios-snpa-type-ieee48","hardware":"0c:6d:c2:08:00:02","time":"2024-05-07T21:03:13.000221+00:00"},{"address":"192.168.1.30","enctype":"ios-encaps-type-arpa","interface":"GigabitEthernet3.20","type":"ios-linktype-ip","mode":"ios-arp-mode-interface","hwtype":"ios-snpa-type-ieee48","hardware":"0c:6d:c2:08:00:02","time":"2024-05-07T21:03:13.000221+00:00"},{"address":"192.168.10.9","enctype":"ios-encaps-type-arpa","interface":"GigabitEthernet1","type":"ios-linktype-ip","mode":"ios-arp-mode-dynamic","hwtype":"ios-snpa-type-ieee48","hardware":"0c:31:1d:f9:00:05","time":"2024-05-07T21:03:23.000314+00:00"},{"address":"192.168.10.10","enctype":"ios-encaps-type-arpa","interface":"GigabitEthernet1","type":"ios-linktype-ip","mode":"ios-arp-mode-interface","hwtype":"ios-snpa-type-ieee48","hardware":"0c:6d:c2:08:00:00","time":"2024-05-07T21:03:13.000195+00:00"},{"address":"192.168.10.14","enctype":"ios-encaps-type-arpa","interface":"GigabitEthernet2","type":"ios-linktype-ip","mode":"ios-arp-mode-interface","hwtype":"ios-snpa-type-ieee48","hardware":"0c:6d:c2:08:00:01","time":"2024-05-07T21:03:13.000221+00:00"}]}
  ]