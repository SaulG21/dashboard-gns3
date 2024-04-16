export const routerInfo = {
    "Cisco-IOS-XE-native:native": {
      "version": "16.9",
      "boot-start-marker": [null],
      "boot-end-marker": [null],
      "service": {
        "timestamps": {
          "debug": {
            "datetime": {
              "msec": {
              }
            }
          },
          "log": {
            "datetime": {
              "msec": [null]
            }
          }
        }
      },
      "platform": {
        "Cisco-IOS-XE-platform:console": {
          "output": "serial"
        }
      },
      "hostname": "R4",
      "username": [
        {
          "name": "admin",
          "privilege": 15,
          "secret": {
            "encryption": "5",
            "secret": "$1$WqDC$sTDo9wlXxMR2Hv0ayJA5X0"
          }
        }
      ],
      "ip": {
        "forward-protocol": {
          "protocol": "nd"
        },
        "route": {
          "ip-route-interface-forwarding-list": [
            {
              "prefix": "172.30.0.0",
              "mask": "255.255.240.0",
              "fwd-list": [
                {
                  "fwd": "192.168.122.1"
                }
              ]
            },
            {
              "prefix": "192.168.122.0",
              "mask": "255.255.255.0",
              "fwd-list": [
                {
                  "fwd": "192.168.122.1"
                }
              ]
            }
          ]
        },
        "Cisco-IOS-XE-http:http": {
          "authentication": {
            "local": [null]
          },
          "server": true,
          "secure-server": true
        }
      },
      "interface": {
        "GigabitEthernet": [
          {
            "name": "1",
            "mop": {
              "enabled": false,
              "sysid": false
            },
            "Cisco-IOS-XE-ethernet:negotiation": {
              "auto": true
            }
          },
          {
            "name": "1.10",
            "encapsulation": {
              "dot1Q": {
                "vlan-id": 10
              }
            },
            "ip": {
              "address": {
                "primary": {
                  "address": "192.168.1.78",
                  "mask": "255.255.255.248"
                }
              }
            }
          },
          {
            "name": "1.20",
            "encapsulation": {
              "dot1Q": {
                "vlan-id": 20
              }
            },
            "ip": {
              "address": {
                "primary": {
                  "address": "192.168.1.70",
                  "mask": "255.255.255.248"
                }
              }
            }
          },
          {
            "name": "2",
            "ip": {
              "address": {
                "primary": {
                  "address": "192.168.10.26",
                  "mask": "255.255.255.252"
                }
              }
            },
            "mop": {
              "enabled": false,
              "sysid": false
            },
            "Cisco-IOS-XE-ethernet:negotiation": {
              "auto": true
            }
          },
          {
            "name": "3",
            "ip": {
              "address": {
                "primary": {
                  "address": "192.168.10.30",
                  "mask": "255.255.255.252"
                }
              }
            },
            "mop": {
              "enabled": false,
              "sysid": false
            },
            "Cisco-IOS-XE-ethernet:negotiation": {
              "auto": true
            }
          },
          {
            "name": "4",
            "ip": {
              "address": {
                "dhcp": {
                }
              }
            },
            "mop": {
              "enabled": false,
              "sysid": false
            },
            "Cisco-IOS-XE-ethernet:negotiation": {
              "auto": true
            }
          }
        ]
      },
      "control-plane": {
      },
      "login": {
        "on-success": {
          "log": {
          }
        }
      },
      "multilink": {
        "Cisco-IOS-XE-ppp:bundle-name": "authenticated"
      },
      "redundancy": {
      },
      "spanning-tree": {
        "Cisco-IOS-XE-spanning-tree:extend": {
          "system-id": [null]
        }
      },
      "subscriber": {
        "templating": [null]
      },
      "crypto": {
        "Cisco-IOS-XE-crypto:pki": {
          "trustpoint": [
            {
              "id": "TP-self-signed-3426597110",
              "enrollment": {
                "selfsigned": [null]
              },
              "revocation-check": "none",
              "rsakeypair": {
                "key-label": "TP-self-signed-3426597110"
              },
              "subject-name": "cn=IOS-Self-Signed-Certificate-3426597110"
            }
          ],
          "certificate": {
            "chain": [
              {
                "name": "TP-self-signed-3426597110",
                "certificate": [
                  {
                    "serial": "01",
                    "certtype": "self-signed"
                  }
                ]
              }
            ]
          }
        }
      },
      "router": {
        "Cisco-IOS-XE-ospf:ospf": [
          {
            "id": 1,
            "network": [
              {
                "ip": "192.168.10.24",
                "mask": "0.0.0.3",
                "area": 0
              },
              {
                "ip": "192.168.10.28",
                "mask": "0.0.0.3",
                "area": 0
              },
              {
                "ip": "192.168.122.0",
                "mask": "0.0.0.255",
                "area": 0
              }
            ]
          }
        ]
      },
      "license": {
        "udi": {
          "pid": "CSR1000V",
          "sn": "9BGUINC3LR4"
        }
      },
      "line": {
        "console": [
          {
            "first": "0",
            "stopbits": "1"
          }
        ],
        "vty": [
          {
            "first": 0,
            "last": 4,
            "login": {
            }
          }
        ]
      },
      "Cisco-IOS-XE-diagnostics:diagnostic": {
        "bootup": {
          "level": "minimal"
        }
      }
    }
  }