// ============================================================
// SUS Builder Component Master
// Version: V0.1
//
// Purpose:
// Vendor-neutral component definitions for free-form
// Single-Use System fluid path construction.
//
// Important:
// "validated" means supported by currently documented vendor
// information in our dataset.
// "requires_validation" means potentially usable, but the
// specific tubing / equipment / size combination must be
// confirmed before engineering use.
// ============================================================


const SUS_COMPONENTS = {

    // ==========================================================
    // TUBING
    // ==========================================================

    tubing: [

        // --------------------------------------------------------
        // TPE TRANSFER TUBING
        // --------------------------------------------------------

        {
            id: "tube-cflex-072",
            category: "tubing",
            componentType: "transfer_tubing",

            manufacturer: "Saint-Gobain",
            productFamily: "C-Flex 072",

            materialFamily: "TPE",

            roles: [
                "inline",
                "endpoint_connection",
                "pump_segment"
            ],

            capabilities: {
                weldable: true,
                sealable: true,
                pumpable: true
            },

            welding: {
                compatibleWelderFamilies: [
                    {
                        welder: "Sartorius BioWelder TC",
                        status: "requires_validation",
                        note:
                            "C-Flex 072 is weldable TPE. BioWelder TC documentation specifically lists C-Flex 374 standard programs; validate C-Flex 072 configuration before use."
                    }
                ]
            },

            ports: [
                {
                    id: "end_a",
                    type: "tube_end",
                    size: null
                },
                {
                    id: "end_b",
                    type: "tube_end",
                    size: null
                }
            ],

            visual: {
                symbolType: "tubing",
                colorClass: "tpe-tubing-line"
            }
        },


        {
            id: "tube-advantaflex",
            category: "tubing",
            componentType: "transfer_tubing",

            manufacturer: "AdvantaPure",
            productFamily: "AdvantaFlex",

            materialFamily: "TPE",

            roles: [
                "inline",
                "endpoint_connection"
            ],

            capabilities: {
                weldable: true,
                sealable: true,
                pumpable: true
            },

            welding: {
                compatibleWelderFamilies: [
                    {
                        welder: "Sartorius BioWelder TC",
                        status: "validated"
                    }
                ]
            },

            ports: [
                {
                    id: "end_a",
                    type: "tube_end",
                    size: null
                },
                {
                    id: "end_b",
                    type: "tube_end",
                    size: null
                }
            ],

            visual: {
                symbolType: "tubing",
                colorClass: "tpe-tubing-line"
            }
        },


        {
            id: "tube-mflex",
            category: "tubing",
            componentType: "transfer_tubing",

            manufacturer: "Meissner",
            productFamily: "M-Flex",

            materialFamily: "TPE",

            roles: [
                "inline",
                "endpoint_connection"
            ],

            capabilities: {
                weldable: true,
                sealable: true,
                pumpable: true
            },

            welding: {
                compatibleWelderFamilies: [
                    {
                        welder: "Thermal TPE Welder",
                        status: "supported"
                    },
                    {
                        welder: "Sartorius BioWelder TC",
                        status: "requires_validation"
                    }
                ]
            },

            ports: [
                {
                    id: "end_a",
                    type: "tube_end",
                    size: null
                },
                {
                    id: "end_b",
                    type: "tube_end",
                    size: null
                }
            ],

            visual: {
                symbolType: "tubing",
                colorClass: "tpe-tubing-line"
            }
        },


        {
            id: "tube-pureweld-xl",
            category: "tubing",
            componentType: "transfer_tubing",

            manufacturer: "Watson-Marlow",
            productFamily: "PureWeld XL",

            materialFamily: "TPE",

            roles: [
                "inline",
                "endpoint_connection",
                "pump_segment"
            ],

            capabilities: {
                weldable: true,
                sealable: true,
                pumpable: true
            },

            welding: {
                compatibleWelderFamilies: [
                    {
                        welder: "Thermal TPE Welder",
                        status: "supported"
                    },
                    {
                        welder: "Sartorius BioWelder TC",
                        status: "requires_validation"
                    }
                ]
            },

            ports: [
                {
                    id: "end_a",
                    type: "tube_end",
                    size: null
                },
                {
                    id: "end_b",
                    type: "tube_end",
                    size: null
                }
            ],

            visual: {
                symbolType: "tubing",
                colorClass: "tpe-tubing-line"
            }
        },


        // --------------------------------------------------------
        // PVC TUBING
        // --------------------------------------------------------

        {
            id: "tube-tygon-pvc",
            category: "tubing",
            componentType: "transfer_tubing",

            manufacturer: "Saint-Gobain",
            productFamily: "Tygon PVC",

            materialFamily: "PVC",

            roles: [
                "inline",
                "endpoint_connection"
            ],

            capabilities: {
                weldable: true,
                sealable: true,
                pumpable: false
            },

            welding: {
                compatibleWelderFamilies: [
                    {
                        welder: "Terumo TSCD-II",
                        status: "conditional",
                        requiresSizeValidation: true,
                        note:
                            "TSCD-II is specified for compatible PVC blood-bag-type tubing within defined dimensional limits."
                    }
                ]
            },

            ports: [
                {
                    id: "end_a",
                    type: "tube_end",
                    size: null
                },
                {
                    id: "end_b",
                    type: "tube_end",
                    size: null
                }
            ],

            visual: {
                symbolType: "tubing",
                colorClass: "transfer-tubing-line"
            }
        },


        // --------------------------------------------------------
        // PUMP TUBING
        // --------------------------------------------------------

        {
            id: "tube-pharmed-bpt",
            category: "tubing",
            componentType: "pump_tubing",

            manufacturer: "Saint-Gobain",
            productFamily: "PharMed BPT",

            materialFamily: "TPE",

            roles: [
                "inline",
                "pump_segment"
            ],

            capabilities: {
                weldable: true,
                sealable: true,
                pumpable: true,
                extendedPumpDuty: true
            },

            pumpCompatibility: [
                "Watson-Marlow",
                "Masterflex"
            ],

            ports: [
                {
                    id: "end_a",
                    type: "tube_end",
                    size: null
                },
                {
                    id: "end_b",
                    type: "tube_end",
                    size: null
                }
            ],

            visual: {
                symbolType: "pump_tubing",
                colorClass: "pump-tubing-line"
            }
        },


        {
            id: "tube-bioprene",
            category: "tubing",
            componentType: "pump_tubing",

            manufacturer: "Watson-Marlow",
            productFamily: "Bioprene",

            materialFamily: "Thermoplastic Elastomer",

            roles: [
                "inline",
                "pump_segment"
            ],

            capabilities: {
                weldable: false,
                sealable: false,
                pumpable: true,
                extendedPumpDuty: true
            },

            pumpCompatibility: [
                "Watson-Marlow",
                "Masterflex"
            ],

            ports: [
                {
                    id: "end_a",
                    type: "tube_end",
                    size: null
                },
                {
                    id: "end_b",
                    type: "tube_end",
                    size: null
                }
            ],

            visual: {
                symbolType: "pump_tubing",
                colorClass: "pump-tubing-line"
            }
        }

    ],


    // ==========================================================
    // CONNECTORS
    // ==========================================================

    connectors: [

        {
            id: "connector-aseptiquik-c",
            category: "connectors",
            componentType: "aseptic_connector",

            manufacturer: "CPC",
            productFamily: "AseptiQuik C",

            roles: [
                "inline",
                "endpoint"
            ],

            ports: [
                {
                    id: "side_a",
                    type: "aseptic_connector_face"
                },
                {
                    id: "side_b",
                    type: "tube_barb",
                    size: null
                }
            ],

            capabilities: {
                closedConnection: true,
                asepticConnection: true
            },

            visual: {
                symbolType: "aseptic_connector"
            }
        },


        {
            id: "connector-cpc-mpc",
            category: "connectors",
            componentType: "quick_disconnect",

            manufacturer: "CPC",
            productFamily: "MPC Connector",

            roles: [
                "inline",
                "endpoint"
            ],

            ports: [
                {
                    id: "coupling",
                    type: "cpc_mpc"
                },
                {
                    id: "tube_side",
                    type: "tube_barb",
                    size: null
                }
            ],

            capabilities: {
                closedConnection: false,
                asepticConnection: false,
                quickDisconnect: true
            },

            visual: {
                symbolType: "cpc_coupling"
            }
        },


        {
            id: "connector-i-type",
            category: "connectors",
            componentType: "barb_connector",

            manufacturer: "Generic",
            productFamily: "I-Type Connector",

            roles: [
                "inline"
            ],

            ports: [
                {
                    id: "side_a",
                    type: "tube_barb",
                    size: null
                },
                {
                    id: "side_b",
                    type: "tube_barb",
                    size: null
                }
            ],

            requiresFixation: true,

            fixationOptions: [
                "cable_band"
            ],

            visual: {
                symbolType: "barb_fitting"
            }
        },


        {
            id: "connector-t-type",
            category: "connectors",
            componentType: "branch_connector",

            manufacturer: "Generic",
            productFamily: "T-Type Connector",

            roles: [
                "inline",
                "branch"
            ],

            ports: [
                {
                    id: "port_1",
                    type: "tube_barb",
                    size: null
                },
                {
                    id: "port_2",
                    type: "tube_barb",
                    size: null
                },
                {
                    id: "port_3",
                    type: "tube_barb",
                    size: null
                }
            ],

            requiresFixation: true,

            fixationOptions: [
                "cable_band"
            ],

            visual: {
                symbolType: "t_branch"
            }
        },


        {
            id: "connector-y-type",
            category: "connectors",
            componentType: "branch_connector",

            manufacturer: "Generic",
            productFamily: "Y-Type Connector",

            roles: [
                "inline",
                "branch"
            ],

            ports: [
                {
                    id: "port_1",
                    type: "tube_barb",
                    size: null
                },
                {
                    id: "port_2",
                    type: "tube_barb",
                    size: null
                },
                {
                    id: "port_3",
                    type: "tube_barb",
                    size: null
                }
            ],

            requiresFixation: true,

            fixationOptions: [
                "cable_band"
            ],

            visual: {
                symbolType: "y_branch"
            }
        }

    ],


    // ==========================================================
    // FITTINGS / CLOSURES
    // ==========================================================

    fittings: [

        {
            id: "fitting-luer-lock",
            category: "fittings",
            componentType: "luer_lock",

            manufacturer: "Generic",
            productFamily: "Luer Lock",

            roles: [
                "inline",
                "endpoint_adapter"
            ],

            ports: [
                {
                    id: "tube_side",
                    type: "tube_barb",
                    size: null
                },
                {
                    id: "luer_side",
                    type: "luer_lock"
                }
            ],

            visual: {
                symbolType: "luer"
            }
        }

    ],


    closures: [

        {
            id: "closure-luer-cap",
            category: "closures",
            componentType: "luer_cap",

            manufacturer: "Generic",
            productFamily: "Luer Cap",

            roles: [
                "endpoint",
                "closure"
            ],

            ports: [
                {
                    id: "connection",
                    type: "luer_lock"
                }
            ],

            capabilities: {
                closesFluidPath: true
            },

            visual: {
                symbolType: "luer_cap"
            }
        }

    ],


    // ==========================================================
    // FILTERS
    // ==========================================================

    filters: [

        {
            id: "filter-none",
            category: "filters",
            componentType: "none",

            manufacturer: null,
            productFamily: "No Filter",

            roles: [
                "selection_placeholder"
            ],

            visual: {
                symbolType: "none"
            }
        },


        {
            id: "filter-meissner-capsule",
            category: "filters",
            componentType: "capsule_filter",

            manufacturer: "Meissner",
            productFamily: "Capsule Filter",

            roles: [
                "inline",
                "endpoint"
            ],

            poreSizeUm: null,

            ports: [
                {
                    id: "inlet",
                    type: "configurable"
                },
                {
                    id: "outlet",
                    type: "configurable"
                }
            ],

            visual: {
                symbolType: "capsule_filter"
            }
        },


        {
            id: "filter-cytiva-disc-022",
            category: "filters",
            componentType: "disc_filter",

            manufacturer: "Cytiva",
            productFamily: "0.22 µm Disc Filter",

            roles: [
                "inline",
                "endpoint",
                "sterile_boundary"
            ],

            poreSizeUm: 0.22,

            ports: [
                {
                    id: "inlet",
                    type: "luer_or_configurable"
                }
            ],

            visual: {
                symbolType: "disc_filter"
            }
        },


        {
            id: "filter-merck-disc-022",
            category: "filters",
            componentType: "disc_filter",

            manufacturer: "Merck",
            productFamily: "0.22 µm Disc Filter",

            roles: [
                "inline",
                "endpoint",
                "sterile_boundary"
            ],

            poreSizeUm: 0.22,

            ports: [
                {
                    id: "inlet",
                    type: "luer_or_configurable"
                }
            ],

            visual: {
                symbolType: "disc_filter"
            }
        }

    ],


    // ==========================================================
    // BAGS / CONTAINERS
    // ==========================================================

    containers: [

        {
            id: "bag-terumo-transfer",
            category: "containers",
            componentType: "bag",

            manufacturer: "Terumo",
            productFamily: "Transfer Bag",

            roles: [
                "endpoint"
            ],

            ports: [
                {
                    id: "port_1",
                    type: "configurable"
                }
            ],

            visual: {
                symbolType: "bag"
            }
        },


        {
            id: "bag-fresenius-compoflex",
            category: "containers",
            componentType: "bag",

            manufacturer: "Fresenius Kabi",
            productFamily: "Compoflex",

            roles: [
                "endpoint"
            ],

            ports: [
                {
                    id: "port_1",
                    type: "configurable"
                }
            ],

            visual: {
                symbolType: "bag"
            }
        },


        {
            id: "bag-sartorius-flexsafe",
            category: "containers",
            componentType: "bag",

            manufacturer: "Sartorius",
            productFamily: "Flexsafe",

            roles: [
                "endpoint"
            ],

            ports: [
                {
                    id: "port_1",
                    type: "configurable"
                }
            ],

            visual: {
                symbolType: "bag"
            }
        },


        {
            id: "bag-thermo-labtainer",
            category: "containers",
            componentType: "bag",

            manufacturer: "Thermo Fisher Scientific",
            productFamily: "Labtainer",

            roles: [
                "endpoint"
            ],

            ports: [
                {
                    id: "port_1",
                    type: "configurable"
                }
            ],

            visual: {
                symbolType: "bag"
            }
        },


        {
            id: "bag-thermo-harvestainer",
            category: "containers",
            componentType: "bag",

            manufacturer: "Thermo Fisher Scientific",
            productFamily: "Harvestainer",

            roles: [
                "endpoint"
            ],

            ports: [
                {
                    id: "port_1",
                    type: "configurable"
                }
            ],

            visual: {
                symbolType: "bag"
            }
        }

    ],


    // ==========================================================
    // SAMPLING
    // ==========================================================

    sampling: [

        {
            id: "sampler-syringe-5ml-bd",
            category: "sampling",
            componentType: "syringe",

            manufacturer: "BD",
            productFamily: "5 mL Syringe",

            roles: [
                "endpoint",
                "temporary_connection"
            ],

            ports: [
                {
                    id: "tip",
                    type: "luer"
                }
            ],

            visual: {
                symbolType: "syringe"
            }
        },


        {
            id: "sampler-syringe-5ml-terumo",
            category: "sampling",
            componentType: "syringe",

            manufacturer: "Terumo",
            productFamily: "5 mL Syringe",

            roles: [
                "endpoint",
                "temporary_connection"
            ],

            ports: [
                {
                    id: "tip",
                    type: "luer"
                }
            ],

            visual: {
                symbolType: "syringe"
            }
        },


        {
            id: "sampler-cytiva-cpak101",
            category: "sampling",
            componentType: "sampling_device",

            manufacturer: "Cytiva",
            productFamily: "CPAK-101",

            roles: [
                "endpoint",
                "sampling"
            ],

            ports: [
                {
                    id: "process_connection",
                    type: "configurable"
                }
            ],

            visual: {
                symbolType: "sampler"
            }
        },


        {
            id: "sampler-miltenyi-single",
            category: "sampling",
            componentType: "sampling_adapter",

            manufacturer: "Miltenyi Biotec",
            productFamily: "Single Sampling Adapter",

            roles: [
                "endpoint",
                "sampling"
            ],

            ports: [
                {
                    id: "process_connection",
                    type: "configurable"
                }
            ],

            visual: {
                symbolType: "sampler"
            }
        },


        {
            id: "sampler-miltenyi-triple",
            category: "sampling",
            componentType: "sampling_adapter",

            manufacturer: "Miltenyi Biotec",
            productFamily: "Triple Sampling Adapter",

            roles: [
                "endpoint",
                "sampling",
                "branch"
            ],

            ports: [
                {
                    id: "process_connection",
                    type: "configurable"
                }
            ],

            visual: {
                symbolType: "sampler"
            }
        }

    ],


    // ==========================================================
    // FLOW CONTROL
    // ==========================================================

    flowControl: [

        {
            id: "clamp-pinch",
            category: "flow_control",
            componentType: "clamp",

            manufacturer: "Generic",
            productFamily: "Pinch Clamp",

            roles: [
                "inline",
                "tube_accessory"
            ],

            compatibleWith: [
                "PVC",
                "TPE"
            ],

            visual: {
                symbolType: "pinch_clamp"
            }
        },


        {
            id: "clamp-slide",
            category: "flow_control",
            componentType: "clamp",

            manufacturer: "Generic",
            productFamily: "Slide Clamp",

            roles: [
                "inline",
                "tube_accessory"
            ],

            compatibleWith: [
                "PVC",
                "TPE"
            ],

            visual: {
                symbolType: "slide_clamp"
            }
        }

    ],


    // ==========================================================
    // SUPPORTING COMPONENTS
    // ==========================================================

    accessories: [

        {
            id: "accessory-cable-band",
            category: "accessories",
            componentType: "cable_band",

            manufacturer: "Generic",
            productFamily: "Cable Band",

            roles: [
                "connection_fixation"
            ],

            visual: {
                symbolType: "cable_band"
            }
        }

    ]

};


// ============================================================
// SUS ASSEMBLY RULES
// ============================================================

const SUS_RULES = [

    // ----------------------------------------------------------
    // PVC ↔ Pump Tubing
    // ----------------------------------------------------------

    {
        id: "rule-pvc-to-pump-tubing",

        description:
            "PVC tubing connected to PharMed BPT or Bioprene requires a compatible barb connector and cable-band fixation.",

        when: {
            materialPair: [
                "PVC",
                "PUMP_TUBING"
            ]
        },

        action: {
            requireConnectorTypes: [
                "barb_connector",
                "branch_connector"
            ],

            requireFixation: {
                type: "cable_band",
                quantityPerTwoEndedConnector: 2
            }
        }
    },


    // ----------------------------------------------------------
    // Different tubing materials
    // ----------------------------------------------------------

    {
        id: "rule-no-direct-weld-different-materials",

        description:
            "Do not assume different tubing material families are directly weld-compatible.",

        when: {
            differentMaterialFamily: true
        },

        action: {
            directWeld: "not_allowed_by_default",
            requireEngineeringVerification: true
        }
    },


    // ----------------------------------------------------------
    // PVC welding
    // ----------------------------------------------------------

    {
        id: "rule-pvc-welding",

        description:
            "PVC tubing may be sterile welded using a compatible PVC welder only when the tubing meets the welder's specified dimensional and material requirements.",

        when: {
            materialFamily: "PVC"
        },

        action: {
            candidateWelder: "Terumo TSCD-II",
            requiresSizeValidation: true,
            requiresMaterialValidation: true
        }
    },


    // ----------------------------------------------------------
    // TPE welding
    // ----------------------------------------------------------

    {
        id: "rule-tpe-welding",

        description:
            "TPE tubing may be thermally welded when the specific tubing and welder combination is supported or internally validated.",

        when: {
            materialFamily: "TPE"
        },

        action: {
            candidateWelder: "Sartorius BioWelder TC",
            requiresProductCompatibilityCheck: true
        }
    },


    // ----------------------------------------------------------
    // Pump tubing placement
    // ----------------------------------------------------------

    {
        id: "rule-pump-requires-pump-tubing",

        description:
            "Peristaltic pump locations should use tubing qualified for the selected pump duty.",

        when: {
            componentType: "pump"
        },

        action: {
            requireRole: "pump_segment"
        }
    },


    // ----------------------------------------------------------
    // Open fluid path termination
    // ----------------------------------------------------------

    {
        id: "rule-open-tube-end",

        description:
            "An unconnected tubing endpoint requires a defined closure or sterile-boundary strategy.",

        when: {
            openTubeEndpoint: true
        },

        action: {
            recommendedConfigurations: [
                [
                    "luer_lock",
                    "disc_filter_0.22um"
                ],
                [
                    "luer_cap"
                ],
                [
                    "aseptic_connector"
                ]
            ],

            warning:
                "Open fluid-path endpoint detected."
        }
    }

];


// ============================================================
// EXPORT TO GLOBAL SCOPE
//
// Keeping this simple for the current plain HTML/JS prototype.
// Later we can convert this to ES modules.
// ============================================================

window.SUS_COMPONENTS = SUS_COMPONENTS;
window.SUS_RULES = SUS_RULES;