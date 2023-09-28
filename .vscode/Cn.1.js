{
    "name": "IBKR Campus",
    "description": "Financial Education from Interactive Brokers",
    "url": "https://ibkrcampus.com",
    "home": "https://ibkrcampus.com",
    "gmt_offset": -4,
    "timezone_string": "America/New_York",
    "namespaces": [
      "oembed/1.0",
      "wpe/cache-plugin/v1",
      "wpe_sign_on_plugin/v1",
      "akismet/v1",
      "contact-form-7/v1",
      "yoast/v1",
      "wp-smush/v1",
      "wp/v2",
      "wp-site-health/v1",
      "wp-block-editor/v1"
    ],
    "authentication": {
      "application-passwords": {
        "endpoints": {
          "authorization": "https://ibkrcampus.com/wp-admin/authorize-application.php"
        }
      }
    },
    "routes": {
      "/": {
        "namespace": "",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "context": {
                "default": "view",
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/"
            }
          ]
        }
      },
      "/batch/v1": {
        "namespace": "",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": {
              "validation": {
                "type": "string",
                "enum": [
                  "require-all-validate",
                  "normal"
                ],
                "default": "normal",
                "required": false
              },
              "requests": {
                "type": "array",
                "maxItems": 25,
                "items": {
                  "type": "object",
                  "properties": {
                    "method": {
                      "type": "string",
                      "enum": [
                        "POST",
                        "PUT",
                        "PATCH",
                        "DELETE"
                      ],
                      "default": "POST"
                    },
                    "path": {
                      "type": "string",
                      "required": true
                    },
                    "body": {
                      "type": "object",
                      "properties": [],
                      "additionalProperties": true
                    },
                    "headers": {
                      "type": "object",
                      "properties": [],
                      "additionalProperties": {
                        "type": [
                          "string",
                          "array"
                        ],
                        "items": {
                          "type": "string"
                        }
                      }
                    }
                  }
                },
                "required": true
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/batch/v1"
            }
          ]
        }
      },
      "/oembed/1.0": {
        "namespace": "oembed/1.0",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "namespace": {
                "default": "oembed/1.0",
                "required": false
              },
              "context": {
                "default": "view",
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/oembed/1.0"
            }
          ]
        }
      },
      "/oembed/1.0/embed": {
        "namespace": "oembed/1.0",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "url": {
                "description": "The URL of the resource for which to fetch oEmbed data.",
                "type": "string",
                "format": "uri",
                "required": true
              },
              "format": {
                "default": "json",
                "required": false
              },
              "maxwidth": {
                "default": 600,
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/oembed/1.0/embed"
            }
          ]
        }
      },
      "/oembed/1.0/proxy": {
        "namespace": "oembed/1.0",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "url": {
                "description": "The URL of the resource for which to fetch oEmbed data.",
                "type": "string",
                "format": "uri",
                "required": true
              },
              "format": {
                "description": "The oEmbed format to use.",
                "type": "string",
                "default": "json",
                "enum": [
                  "json",
                  "xml"
                ],
                "required": false
              },
              "maxwidth": {
                "description": "The maximum width of the embed frame in pixels.",
                "type": "integer",
                "default": 600,
                "required": false
              },
              "maxheight": {
                "description": "The maximum height of the embed frame in pixels.",
                "type": "integer",
                "required": false
              },
              "discover": {
                "description": "Whether to perform an oEmbed discovery request for unsanctioned providers.",
                "type": "boolean",
                "default": true,
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/oembed/1.0/proxy"
            }
          ]
        }
      },
      "/wpe/cache-plugin/v1": {
        "namespace": "wpe/cache-plugin/v1",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "namespace": {
                "default": "wpe/cache-plugin/v1",
                "required": false
              },
              "context": {
                "default": "view",
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wpe/cache-plugin/v1"
            }
          ]
        }
      },
      "/wpe/cache-plugin/v1/clear_all_caches": {
        "namespace": "wpe/cache-plugin/v1",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": []
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wpe/cache-plugin/v1/clear_all_caches"
            }
          ]
        }
      },
      "/wpe/cache-plugin/v1/rate_limit_status": {
        "namespace": "wpe/cache-plugin/v1",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": []
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wpe/cache-plugin/v1/rate_limit_status"
            }
          ]
        }
      },
      "/wpe_sign_on_plugin/v1": {
        "namespace": "wpe_sign_on_plugin/v1",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "namespace": {
                "default": "wpe_sign_on_plugin/v1",
                "required": false
              },
              "context": {
                "default": "view",
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wpe_sign_on_plugin/v1"
            }
          ]
        }
      },
      "/wpe_sign_on_plugin/v1/login": {
        "namespace": "wpe_sign_on_plugin/v1",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": []
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wpe_sign_on_plugin/v1/login"
            }
          ]
        }
      },
      "/wpe_sign_on_plugin/v1/is_user_logged_in": {
        "namespace": "wpe_sign_on_plugin/v1",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": []
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wpe_sign_on_plugin/v1/is_user_logged_in"
            }
          ]
        }
      },
      "/wpe_sign_on_plugin/v1/has_logged": {
        "namespace": "wpe_sign_on_plugin/v1",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": []
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wpe_sign_on_plugin/v1/has_logged"
            }
          ]
        }
      },
      "/akismet/v1": {
        "namespace": "akismet/v1",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "namespace": {
                "default": "akismet/v1",
                "required": false
              },
              "context": {
                "default": "view",
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/akismet/v1"
            }
          ]
        }
      },
      "/akismet/v1/key": {
        "namespace": "akismet/v1",
        "methods": [
          "GET",
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": []
          },
          {
            "methods": [
              "POST",
              "PUT",
              "PATCH"
            ],
            "args": {
              "key": {
                "type": "string",
                "description": "A 12-character Akismet API key. Available at akismet.com/get/",
                "required": true
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "args": []
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/akismet/v1/key"
            }
          ]
        }
      },
      "/akismet/v1/settings": {
        "namespace": "akismet/v1",
        "methods": [
          "GET",
          "POST",
          "PUT",
          "PATCH"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": []
          },
          {
            "methods": [
              "POST",
              "PUT",
              "PATCH"
            ],
            "args": {
              "akismet_strictness": {
                "type": "boolean",
                "description": "If true, Akismet will automatically discard the worst spam automatically rather than putting it in the spam folder.",
                "required": false
              },
              "akismet_show_user_comments_approved": {
                "type": "boolean",
                "description": "If true, show the number of approved comments beside each comment author in the comments list page.",
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/akismet/v1/settings"
            }
          ]
        }
      },
      "/akismet/v1/stats": {
        "namespace": "akismet/v1",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "interval": {
                "type": "string",
                "description": "The time period for which to retrieve stats. Options: 60-days, 6-months, all",
                "default": "all",
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/akismet/v1/stats"
            }
          ]
        }
      },
      "/akismet/v1/stats/(?P<interval>[\\w+])": {
        "namespace": "akismet/v1",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "interval": {
                "description": "The time period for which to retrieve stats. Options: 60-days, 6-months, all",
                "type": "string",
                "required": false
              }
            }
          }
        ]
      },
      "/akismet/v1/alert": {
        "namespace": "akismet/v1",
        "methods": [
          "GET",
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "key": {
                "type": "string",
                "description": "A 12-character Akismet API key. Available at akismet.com/get/",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST",
              "PUT",
              "PATCH"
            ],
            "args": {
              "key": {
                "type": "string",
                "description": "A 12-character Akismet API key. Available at akismet.com/get/",
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "args": {
              "key": {
                "type": "string",
                "description": "A 12-character Akismet API key. Available at akismet.com/get/",
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/akismet/v1/alert"
            }
          ]
        }
      },
      "/contact-form-7/v1": {
        "namespace": "contact-form-7/v1",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "namespace": {
                "default": "contact-form-7/v1",
                "required": false
              },
              "context": {
                "default": "view",
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/contact-form-7/v1"
            }
          ]
        }
      },
      "/contact-form-7/v1/contact-forms": {
        "namespace": "contact-form-7/v1",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": []
          },
          {
            "methods": [
              "POST"
            ],
            "args": []
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/contact-form-7/v1/contact-forms"
            }
          ]
        }
      },
      "/contact-form-7/v1/contact-forms/(?P<id>\\d+)": {
        "namespace": "contact-form-7/v1",
        "methods": [
          "GET",
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": []
          },
          {
            "methods": [
              "POST",
              "PUT",
              "PATCH"
            ],
            "args": []
          },
          {
            "methods": [
              "DELETE"
            ],
            "args": []
          }
        ]
      },
      "/contact-form-7/v1/contact-forms/(?P<id>\\d+)/feedback": {
        "namespace": "contact-form-7/v1",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": []
          }
        ]
      },
      "/contact-form-7/v1/contact-forms/(?P<id>\\d+)/feedback/schema": {
        "namespace": "contact-form-7/v1",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": []
          }
        ]
      },
      "/contact-form-7/v1/contact-forms/(?P<id>\\d+)/refill": {
        "namespace": "contact-form-7/v1",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": []
          }
        ]
      },
      "/yoast/v1": {
        "namespace": "yoast/v1",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "namespace": {
                "default": "yoast/v1",
                "required": false
              },
              "context": {
                "default": "view",
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1"
            }
          ]
        }
      },
      "/yoast/v1/file_size": {
        "namespace": "yoast/v1",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "url": {
                "type": "string",
                "description": "The url to retrieve",
                "required": true
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/file_size"
            }
          ]
        }
      },
      "/yoast/v1/statistics": {
        "namespace": "yoast/v1",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": []
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/statistics"
            }
          ]
        }
      },
      "/yoast/v1/new-content-type-visibility/dismiss-post-type": {
        "namespace": "yoast/v1",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": {
              "postTypeName": {
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/new-content-type-visibility/dismiss-post-type"
            }
          ]
        }
      },
      "/yoast/v1/new-content-type-visibility/dismiss-taxonomy": {
        "namespace": "yoast/v1",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": {
              "taxonomyName": {
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/new-content-type-visibility/dismiss-taxonomy"
            }
          ]
        }
      },
      "/yoast/v1/wistia_embed_permission": {
        "namespace": "yoast/v1",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": []
          },
          {
            "methods": [
              "POST"
            ],
            "args": {
              "value": {
                "type": "bool",
                "default": true,
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/wistia_embed_permission"
            }
          ]
        }
      },
      "/yoast/v1/alerts/dismiss": {
        "namespace": "yoast/v1",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": {
              "key": {
                "required": true
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/alerts/dismiss"
            }
          ]
        }
      },
      "/yoast/v1/configuration/site_representation": {
        "namespace": "yoast/v1",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": {
              "company_or_person": {
                "type": "string",
                "enum": [
                  "company",
                  "person"
                ],
                "required": true
              },
              "company_name": {
                "type": "string",
                "required": false
              },
              "company_logo": {
                "type": "string",
                "required": false
              },
              "company_logo_id": {
                "type": "integer",
                "required": false
              },
              "person_logo": {
                "type": "string",
                "required": false
              },
              "person_logo_id": {
                "type": "integer",
                "required": false
              },
              "company_or_person_user_id": {
                "type": "integer",
                "required": false
              },
              "description": {
                "type": "string",
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/configuration/site_representation"
            }
          ]
        }
      },
      "/yoast/v1/configuration/social_profiles": {
        "namespace": "yoast/v1",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": {
              "facebook_site": {
                "type": "string",
                "required": false
              },
              "twitter_site": {
                "type": "string",
                "required": false
              },
              "other_social_urls": {
                "type": "array",
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/configuration/social_profiles"
            }
          ]
        }
      },
      "/yoast/v1/configuration/check_capability": {
        "namespace": "yoast/v1",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "user_id": {
                "required": true
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/configuration/check_capability"
            }
          ]
        }
      },
      "/yoast/v1/configuration/enable_tracking": {
        "namespace": "yoast/v1",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": {
              "tracking": {
                "type": "boolean",
                "required": true
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/configuration/enable_tracking"
            }
          ]
        }
      },
      "/yoast/v1/configuration/save_configuration_state": {
        "namespace": "yoast/v1",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": {
              "finishedSteps": {
                "type": "array",
                "required": true
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/configuration/save_configuration_state"
            }
          ]
        }
      },
      "/yoast/v1/configuration/get_configuration_state": {
        "namespace": "yoast/v1",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": []
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/configuration/get_configuration_state"
            }
          ]
        }
      },
      "/yoast/v1/import/(?P<plugin>[\\w-]+)/(?P<type>[\\w-]+)": {
        "namespace": "yoast/v1",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": []
          }
        ]
      },
      "/yoast/v1/get_head": {
        "namespace": "yoast/v1",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "url": {
                "required": true
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/get_head"
            }
          ]
        }
      },
      "/yoast/v1/indexing/posts": {
        "namespace": "yoast/v1",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": []
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/indexing/posts"
            }
          ]
        }
      },
      "/yoast/v1/indexing/terms": {
        "namespace": "yoast/v1",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": []
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/indexing/terms"
            }
          ]
        }
      },
      "/yoast/v1/indexing/post-type-archives": {
        "namespace": "yoast/v1",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": []
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/indexing/post-type-archives"
            }
          ]
        }
      },
      "/yoast/v1/indexing/general": {
        "namespace": "yoast/v1",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": []
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/indexing/general"
            }
          ]
        }
      },
      "/yoast/v1/indexing/prepare": {
        "namespace": "yoast/v1",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": []
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/indexing/prepare"
            }
          ]
        }
      },
      "/yoast/v1/indexing/indexables-complete": {
        "namespace": "yoast/v1",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": []
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/indexing/indexables-complete"
            }
          ]
        }
      },
      "/yoast/v1/indexing/complete": {
        "namespace": "yoast/v1",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": []
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/indexing/complete"
            }
          ]
        }
      },
      "/yoast/v1/link-indexing/posts": {
        "namespace": "yoast/v1",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": []
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/link-indexing/posts"
            }
          ]
        }
      },
      "/yoast/v1/link-indexing/terms": {
        "namespace": "yoast/v1",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": []
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/link-indexing/terms"
            }
          ]
        }
      },
      "/yoast/v1/integrations/set_active": {
        "namespace": "yoast/v1",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": {
              "active": {
                "type": "boolean",
                "required": true
              },
              "integration": {
                "type": "string",
                "required": true
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/integrations/set_active"
            }
          ]
        }
      },
      "/yoast/v1/meta/search": {
        "namespace": "yoast/v1",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": []
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/meta/search"
            }
          ]
        }
      },
      "/yoast/v1/semrush/authenticate": {
        "namespace": "yoast/v1",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": {
              "code": {
                "required": true
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/semrush/authenticate"
            }
          ]
        }
      },
      "/yoast/v1/semrush/country_code": {
        "namespace": "yoast/v1",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": {
              "country_code": {
                "required": true
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/semrush/country_code"
            }
          ]
        }
      },
      "/yoast/v1/semrush/related_keyphrases": {
        "namespace": "yoast/v1",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "keyphrase": {
                "required": true
              },
              "country_code": {
                "required": true
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/semrush/related_keyphrases"
            }
          ]
        }
      },
      "/yoast/v1/workouts": {
        "namespace": "yoast/v1",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": []
          },
          {
            "methods": [
              "POST"
            ],
            "args": {
              "cornerstone": {
                "required": true
              },
              "orphaned": {
                "required": true
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/workouts"
            }
          ]
        }
      },
      "/yoast/v1/ai_generator/consent": {
        "namespace": "yoast/v1",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": {
              "consent": {
                "type": "boolean",
                "description": "Whether the consent to use AI-based services has been given by the user.",
                "required": true
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/ai_generator/consent"
            }
          ]
        }
      },
      "/yoast/v1/link_suggestions": {
        "namespace": "yoast/v1",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "prominent_words": {
                "type": "object",
                "description": "Stems of prominent words and their term frequencies we want link suggestions based on",
                "required": true
              },
              "object_id": {
                "type": "integer",
                "description": "The object id of the current indexable.",
                "required": true
              },
              "object_type": {
                "type": "string",
                "description": "The object type of the current indexable.",
                "required": true
              },
              "limit": {
                "default": 5,
                "type": "integer",
                "description": "The maximum number of link suggestions to retrieve",
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/link_suggestions"
            }
          ]
        }
      },
      "/yoast/v1/prominent_words/get_content": {
        "namespace": "yoast/v1",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": []
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/prominent_words/get_content"
            }
          ]
        }
      },
      "/yoast/v1/prominent_words/complete": {
        "namespace": "yoast/v1",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": []
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/prominent_words/complete"
            }
          ]
        }
      },
      "/yoast/v1/prominent_words/save": {
        "namespace": "yoast/v1",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": {
              "data": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "object_id": {
                      "type": "number",
                      "required": true
                    },
                    "prominent_words": {
                      "type": "object",
                      "required": false
                    }
                  }
                },
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/prominent_words/save"
            }
          ]
        }
      },
      "/yoast/v1/workouts/noindex": {
        "namespace": "yoast/v1",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": {
              "object_id": {
                "type": "integer",
                "required": true
              },
              "object_type": {
                "type": "string",
                "required": true
              },
              "object_sub_type": {
                "type": "string",
                "required": true
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/workouts/noindex"
            }
          ]
        }
      },
      "/yoast/v1/workouts/remove_redirect": {
        "namespace": "yoast/v1",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": {
              "object_id": {
                "type": "integer",
                "required": true
              },
              "object_type": {
                "type": "string",
                "required": true
              },
              "object_sub_type": {
                "type": "string",
                "required": true
              },
              "permalink": {
                "type": "string",
                "required": true
              },
              "redirect_url": {
                "type": "string",
                "required": true
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/workouts/remove_redirect"
            }
          ]
        }
      },
      "/yoast/v1/workouts/link_suggestions": {
        "namespace": "yoast/v1",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "indexableId": {
                "type": "integer",
                "required": true
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/workouts/link_suggestions"
            }
          ]
        }
      },
      "/yoast/v1/workouts/last_updated": {
        "namespace": "yoast/v1",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "postId": {
                "type": "integer",
                "required": true
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/workouts/last_updated"
            }
          ]
        }
      },
      "/yoast/v1/workouts/cornerstone_data": {
        "namespace": "yoast/v1",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": []
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/workouts/cornerstone_data"
            }
          ]
        }
      },
      "/yoast/v1/workouts/enable_cornerstone": {
        "namespace": "yoast/v1",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": {
              "object_id": {
                "type": "integer",
                "required": true
              },
              "object_type": {
                "type": "string",
                "required": true
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/workouts/enable_cornerstone"
            }
          ]
        }
      },
      "/wp-smush/v1": {
        "namespace": "wp-smush/v1",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "namespace": {
                "default": "wp-smush/v1",
                "required": false
              },
              "context": {
                "default": "view",
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp-smush/v1"
            }
          ]
        }
      },
      "/wp-smush/v1/preset_configs": {
        "namespace": "wp-smush/v1",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": []
          },
          {
            "methods": [
              "POST"
            ],
            "args": []
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp-smush/v1/preset_configs"
            }
          ]
        }
      },
      "/yoast/v1/redirects": {
        "namespace": "yoast/v1",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": {
              "origin": {
                "type": "string",
                "description": "The origin to redirect",
                "required": true
              },
              "target": {
                "type": "string",
                "description": "The redirect target",
                "required": false
              },
              "type": {
                "type": "integer",
                "description": "The redirect type",
                "required": true
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/redirects"
            }
          ]
        }
      },
      "/yoast/v1/redirects/delete": {
        "namespace": "yoast/v1",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": {
              "origin": {
                "type": "string",
                "description": "The origin to redirect",
                "required": true
              },
              "target": {
                "type": "string",
                "description": "The redirect target",
                "required": false
              },
              "type": {
                "type": "string",
                "description": "The redirect format",
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/redirects/delete"
            }
          ]
        }
      },
      "/yoast/v1/redirects/undo-for-object": {
        "namespace": "yoast/v1",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": {
              "obj_id": {
                "type": "int",
                "description": "The id of the post or term",
                "required": true
              },
              "obj_type": {
                "type": "string",
                "description": "The object type: post or term",
                "required": true
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/yoast/v1/redirects/undo-for-object"
            }
          ]
        }
      },
      "/wp/v2": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "namespace": {
                "default": "wp/v2",
                "required": false
              },
              "context": {
                "default": "view",
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2"
            }
          ]
        }
      },
      "/wp/v2/posts": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "page": {
                "description": "Current page of the collection.",
                "type": "integer",
                "default": 1,
                "minimum": 1,
                "required": false
              },
              "per_page": {
                "description": "Maximum number of items to be returned in result set.",
                "type": "integer",
                "default": 10,
                "minimum": 1,
                "maximum": 100,
                "required": false
              },
              "search": {
                "description": "Limit results to those matching a string.",
                "type": "string",
                "required": false
              },
              "after": {
                "description": "Limit response to posts published after a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "modified_after": {
                "description": "Limit response to posts modified after a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "author": {
                "description": "Limit result set to posts assigned to specific authors.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "author_exclude": {
                "description": "Ensure result set excludes posts assigned to specific authors.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "before": {
                "description": "Limit response to posts published before a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "modified_before": {
                "description": "Limit response to posts modified before a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "exclude": {
                "description": "Ensure result set excludes specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "include": {
                "description": "Limit result set to specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "offset": {
                "description": "Offset the result set by a specific number of items.",
                "type": "integer",
                "required": false
              },
              "order": {
                "description": "Order sort attribute ascending or descending.",
                "type": "string",
                "default": "desc",
                "enum": [
                  "asc",
                  "desc"
                ],
                "required": false
              },
              "orderby": {
                "description": "Sort collection by post attribute.",
                "type": "string",
                "default": "date",
                "enum": [
                  "author",
                  "date",
                  "id",
                  "include",
                  "modified",
                  "parent",
                  "relevance",
                  "slug",
                  "include_slugs",
                  "title"
                ],
                "required": false
              },
              "search_columns": {
                "default": [],
                "description": "Array of column names to be searched.",
                "type": "array",
                "items": {
                  "enum": [
                    "post_title",
                    "post_content",
                    "post_excerpt"
                  ],
                  "type": "string"
                },
                "required": false
              },
              "slug": {
                "description": "Limit result set to posts with one or more specific slugs.",
                "type": "array",
                "items": {
                  "type": "string"
                },
                "required": false
              },
              "status": {
                "default": "publish",
                "description": "Limit result set to posts assigned one or more statuses.",
                "type": "array",
                "items": {
                  "enum": [
                    "publish",
                    "future",
                    "draft",
                    "pending",
                    "private",
                    "trash",
                    "auto-draft",
                    "inherit",
                    "request-pending",
                    "request-confirmed",
                    "request-failed",
                    "request-completed",
                    "acf-disabled",
                    "pitch",
                    "appr-request-ab",
                    "appr-request-at",
                    "appr-request-cm",
                    "appr-request-mn",
                    "appr-request-sl",
                    "appr-request-vp",
                    "appr-request-jo",
                    "appr-request-jgl",
                    "approved-post-ab",
                    "approved-post-at",
                    "approved-post-cm",
                    "approved-post-mn",
                    "approved-post-sl",
                    "approved-post-vp",
                    "approved-post-jo",
                    "approved-post-jgl",
                    "rejected-post-at",
                    "rejected-post-ab",
                    "rejected-postcm",
                    "rejected-post-mn",
                    "rejected-post-sl",
                    "rejected-post-vp",
                    "rejected-post-jo",
                    "rejected-post-jgl",
                    "quant-apr-post-ab",
                    "quant-apr-post-sl",
                    "quant-apr-post-jo",
                    "quant-apr-post-jgl",
                    "quant-apr-req-ab",
                    "quant-appr-req-sl",
                    "quant-apr-req-jo",
                    "quant-apr-req-jgl",
                    "quant-reject-ab",
                    "quant-reject-sl",
                    "quant-reject-jo",
                    "quant-reject-jgl",
                    "webinars-req-t-d-jo",
                    "webinar-appr-t-d-jo",
                    "webinar-rejec-t-d-jo",
                    "webinar-opt-req-t-d",
                    "webinar-opt-appr",
                    "webinar-opt-reject",
                    "chinese-ti-content",
                    "any"
                  ],
                  "type": "string"
                },
                "required": false
              },
              "tax_relation": {
                "description": "Limit result set based on relationship between multiple taxonomies.",
                "type": "string",
                "enum": [
                  "AND",
                  "OR"
                ],
                "required": false
              },
              "categories": {
                "description": "Limit result set to items with specific terms assigned in the categories taxonomy.",
                "type": [
                  "object",
                  "array"
                ],
                "oneOf": [
                  {
                    "title": "Term ID List",
                    "description": "Match terms with the listed IDs.",
                    "type": "array",
                    "items": {
                      "type": "integer"
                    }
                  },
                  {
                    "title": "Term ID Taxonomy Query",
                    "description": "Perform an advanced term query.",
                    "type": "object",
                    "properties": {
                      "terms": {
                        "description": "Term IDs.",
                        "type": "array",
                        "items": {
                          "type": "integer"
                        },
                        "default": []
                      },
                      "include_children": {
                        "description": "Whether to include child terms in the terms limiting the result set.",
                        "type": "boolean",
                        "default": false
                      },
                      "operator": {
                        "description": "Whether items must be assigned all or any of the specified terms.",
                        "type": "string",
                        "enum": [
                          "AND",
                          "OR"
                        ],
                        "default": "OR"
                      }
                    },
                    "additionalProperties": false
                  }
                ],
                "required": false
              },
              "categories_exclude": {
                "description": "Limit result set to items except those with specific terms assigned in the categories taxonomy.",
                "type": [
                  "object",
                  "array"
                ],
                "oneOf": [
                  {
                    "title": "Term ID List",
                    "description": "Match terms with the listed IDs.",
                    "type": "array",
                    "items": {
                      "type": "integer"
                    }
                  },
                  {
                    "title": "Term ID Taxonomy Query",
                    "description": "Perform an advanced term query.",
                    "type": "object",
                    "properties": {
                      "terms": {
                        "description": "Term IDs.",
                        "type": "array",
                        "items": {
                          "type": "integer"
                        },
                        "default": []
                      },
                      "include_children": {
                        "description": "Whether to include child terms in the terms limiting the result set.",
                        "type": "boolean",
                        "default": false
                      }
                    },
                    "additionalProperties": false
                  }
                ],
                "required": false
              },
              "tags": {
                "description": "Limit result set to items with specific terms assigned in the tags taxonomy.",
                "type": [
                  "object",
                  "array"
                ],
                "oneOf": [
                  {
                    "title": "Term ID List",
                    "description": "Match terms with the listed IDs.",
                    "type": "array",
                    "items": {
                      "type": "integer"
                    }
                  },
                  {
                    "title": "Term ID Taxonomy Query",
                    "description": "Perform an advanced term query.",
                    "type": "object",
                    "properties": {
                      "terms": {
                        "description": "Term IDs.",
                        "type": "array",
                        "items": {
                          "type": "integer"
                        },
                        "default": []
                      },
                      "operator": {
                        "description": "Whether items must be assigned all or any of the specified terms.",
                        "type": "string",
                        "enum": [
                          "AND",
                          "OR"
                        ],
                        "default": "OR"
                      }
                    },
                    "additionalProperties": false
                  }
                ],
                "required": false
              },
              "tags_exclude": {
                "description": "Limit result set to items except those with specific terms assigned in the tags taxonomy.",
                "type": [
                  "object",
                  "array"
                ],
                "oneOf": [
                  {
                    "title": "Term ID List",
                    "description": "Match terms with the listed IDs.",
                    "type": "array",
                    "items": {
                      "type": "integer"
                    }
                  },
                  {
                    "title": "Term ID Taxonomy Query",
                    "description": "Perform an advanced term query.",
                    "type": "object",
                    "properties": {
                      "terms": {
                        "description": "Term IDs.",
                        "type": "array",
                        "items": {
                          "type": "integer"
                        },
                        "default": []
                      }
                    },
                    "additionalProperties": false
                  }
                ],
                "required": false
              },
              "contributors-categories": {
                "description": "Limit result set to items with specific terms assigned in the contributors-categories taxonomy.",
                "type": [
                  "object",
                  "array"
                ],
                "oneOf": [
                  {
                    "title": "Term ID List",
                    "description": "Match terms with the listed IDs.",
                    "type": "array",
                    "items": {
                      "type": "integer"
                    }
                  },
                  {
                    "title": "Term ID Taxonomy Query",
                    "description": "Perform an advanced term query.",
                    "type": "object",
                    "properties": {
                      "terms": {
                        "description": "Term IDs.",
                        "type": "array",
                        "items": {
                          "type": "integer"
                        },
                        "default": []
                      },
                      "include_children": {
                        "description": "Whether to include child terms in the terms limiting the result set.",
                        "type": "boolean",
                        "default": false
                      },
                      "operator": {
                        "description": "Whether items must be assigned all or any of the specified terms.",
                        "type": "string",
                        "enum": [
                          "AND",
                          "OR"
                        ],
                        "default": "OR"
                      }
                    },
                    "additionalProperties": false
                  }
                ],
                "required": false
              },
              "contributors-categories_exclude": {
                "description": "Limit result set to items except those with specific terms assigned in the contributors-categories taxonomy.",
                "type": [
                  "object",
                  "array"
                ],
                "oneOf": [
                  {
                    "title": "Term ID List",
                    "description": "Match terms with the listed IDs.",
                    "type": "array",
                    "items": {
                      "type": "integer"
                    }
                  },
                  {
                    "title": "Term ID Taxonomy Query",
                    "description": "Perform an advanced term query.",
                    "type": "object",
                    "properties": {
                      "terms": {
                        "description": "Term IDs.",
                        "type": "array",
                        "items": {
                          "type": "integer"
                        },
                        "default": []
                      },
                      "include_children": {
                        "description": "Whether to include child terms in the terms limiting the result set.",
                        "type": "boolean",
                        "default": false
                      }
                    },
                    "additionalProperties": false
                  }
                ],
                "required": false
              },
              "sticky": {
                "description": "Limit result set to items that are sticky.",
                "type": "boolean",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "date": {
                "description": "The date the post was published, in the site's timezone.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "date_gmt": {
                "description": "The date the post was published, as GMT.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the post unique to its type.",
                "type": "string",
                "required": false
              },
              "status": {
                "description": "A named status for the post.",
                "type": "string",
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "acf-disabled",
                  "pitch",
                  "appr-request-ab",
                  "appr-request-at",
                  "appr-request-cm",
                  "appr-request-mn",
                  "appr-request-sl",
                  "appr-request-vp",
                  "appr-request-jo",
                  "appr-request-jgl",
                  "approved-post-ab",
                  "approved-post-at",
                  "approved-post-cm",
                  "approved-post-mn",
                  "approved-post-sl",
                  "approved-post-vp",
                  "approved-post-jo",
                  "approved-post-jgl",
                  "rejected-post-at",
                  "rejected-post-ab",
                  "rejected-postcm",
                  "rejected-post-mn",
                  "rejected-post-sl",
                  "rejected-post-vp",
                  "rejected-post-jo",
                  "rejected-post-jgl",
                  "quant-apr-post-ab",
                  "quant-apr-post-sl",
                  "quant-apr-post-jo",
                  "quant-apr-post-jgl",
                  "quant-apr-req-ab",
                  "quant-appr-req-sl",
                  "quant-apr-req-jo",
                  "quant-apr-req-jgl",
                  "quant-reject-ab",
                  "quant-reject-sl",
                  "quant-reject-jo",
                  "quant-reject-jgl",
                  "webinars-req-t-d-jo",
                  "webinar-appr-t-d-jo",
                  "webinar-rejec-t-d-jo",
                  "webinar-opt-req-t-d",
                  "webinar-opt-appr",
                  "webinar-opt-reject",
                  "chinese-ti-content"
                ],
                "required": false
              },
              "password": {
                "description": "A password to protect access to the content and excerpt.",
                "type": "string",
                "required": false
              },
              "title": {
                "description": "The title for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Title for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML title for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "content": {
                "description": "The content for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Content for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML content for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit"
                    ],
                    "readonly": true
                  },
                  "block_version": {
                    "description": "Version of the content block format used by the post.",
                    "type": "integer",
                    "context": [
                      "edit"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the content is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "author": {
                "description": "The ID for the author of the post.",
                "type": "integer",
                "required": false
              },
              "excerpt": {
                "description": "The excerpt for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Excerpt for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML excerpt for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the excerpt is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "featured_media": {
                "description": "The ID of the featured media for the post.",
                "type": "integer",
                "required": false
              },
              "comment_status": {
                "description": "Whether or not comments are open on the post.",
                "type": "string",
                "enum": [
                  "open",
                  "closed"
                ],
                "required": false
              },
              "ping_status": {
                "description": "Whether or not the post can be pinged.",
                "type": "string",
                "enum": [
                  "open",
                  "closed"
                ],
                "required": false
              },
              "format": {
                "description": "The format for the post.",
                "type": "string",
                "enum": [
                  "standard",
                  "aside",
                  "chat",
                  "gallery",
                  "link",
                  "image",
                  "quote",
                  "status",
                  "video",
                  "audio"
                ],
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": {
                  "footnotes": {
                    "type": "string",
                    "description": "",
                    "default": ""
                  }
                },
                "required": false
              },
              "sticky": {
                "description": "Whether or not the post should be treated as sticky.",
                "type": "boolean",
                "required": false
              },
              "template": {
                "description": "The theme file to use to display the post.",
                "type": "string",
                "required": false
              },
              "categories": {
                "description": "The terms assigned to the post in the category taxonomy.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "required": false
              },
              "tags": {
                "description": "The terms assigned to the post in the post_tag taxonomy.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "required": false
              },
              "contributors-categories": {
                "description": "The terms assigned to the post in the contributors-categories taxonomy.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/posts"
            }
          ]
        }
      },
      "/wp/v2/posts/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the post.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "password": {
                "description": "The password for the post if it is password protected.",
                "type": "string",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST",
              "PUT",
              "PATCH"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the post.",
                "type": "integer",
                "required": false
              },
              "date": {
                "description": "The date the post was published, in the site's timezone.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "date_gmt": {
                "description": "The date the post was published, as GMT.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the post unique to its type.",
                "type": "string",
                "required": false
              },
              "status": {
                "description": "A named status for the post.",
                "type": "string",
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "acf-disabled",
                  "pitch",
                  "appr-request-ab",
                  "appr-request-at",
                  "appr-request-cm",
                  "appr-request-mn",
                  "appr-request-sl",
                  "appr-request-vp",
                  "appr-request-jo",
                  "appr-request-jgl",
                  "approved-post-ab",
                  "approved-post-at",
                  "approved-post-cm",
                  "approved-post-mn",
                  "approved-post-sl",
                  "approved-post-vp",
                  "approved-post-jo",
                  "approved-post-jgl",
                  "rejected-post-at",
                  "rejected-post-ab",
                  "rejected-postcm",
                  "rejected-post-mn",
                  "rejected-post-sl",
                  "rejected-post-vp",
                  "rejected-post-jo",
                  "rejected-post-jgl",
                  "quant-apr-post-ab",
                  "quant-apr-post-sl",
                  "quant-apr-post-jo",
                  "quant-apr-post-jgl",
                  "quant-apr-req-ab",
                  "quant-appr-req-sl",
                  "quant-apr-req-jo",
                  "quant-apr-req-jgl",
                  "quant-reject-ab",
                  "quant-reject-sl",
                  "quant-reject-jo",
                  "quant-reject-jgl",
                  "webinars-req-t-d-jo",
                  "webinar-appr-t-d-jo",
                  "webinar-rejec-t-d-jo",
                  "webinar-opt-req-t-d",
                  "webinar-opt-appr",
                  "webinar-opt-reject",
                  "chinese-ti-content"
                ],
                "required": false
              },
              "password": {
                "description": "A password to protect access to the content and excerpt.",
                "type": "string",
                "required": false
              },
              "title": {
                "description": "The title for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Title for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML title for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "content": {
                "description": "The content for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Content for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML content for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit"
                    ],
                    "readonly": true
                  },
                  "block_version": {
                    "description": "Version of the content block format used by the post.",
                    "type": "integer",
                    "context": [
                      "edit"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the content is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "author": {
                "description": "The ID for the author of the post.",
                "type": "integer",
                "required": false
              },
              "excerpt": {
                "description": "The excerpt for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Excerpt for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML excerpt for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the excerpt is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "featured_media": {
                "description": "The ID of the featured media for the post.",
                "type": "integer",
                "required": false
              },
              "comment_status": {
                "description": "Whether or not comments are open on the post.",
                "type": "string",
                "enum": [
                  "open",
                  "closed"
                ],
                "required": false
              },
              "ping_status": {
                "description": "Whether or not the post can be pinged.",
                "type": "string",
                "enum": [
                  "open",
                  "closed"
                ],
                "required": false
              },
              "format": {
                "description": "The format for the post.",
                "type": "string",
                "enum": [
                  "standard",
                  "aside",
                  "chat",
                  "gallery",
                  "link",
                  "image",
                  "quote",
                  "status",
                  "video",
                  "audio"
                ],
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": {
                  "footnotes": {
                    "type": "string",
                    "description": "",
                    "default": ""
                  }
                },
                "required": false
              },
              "sticky": {
                "description": "Whether or not the post should be treated as sticky.",
                "type": "boolean",
                "required": false
              },
              "template": {
                "description": "The theme file to use to display the post.",
                "type": "string",
                "required": false
              },
              "categories": {
                "description": "The terms assigned to the post in the category taxonomy.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "required": false
              },
              "tags": {
                "description": "The terms assigned to the post in the post_tag taxonomy.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "required": false
              },
              "contributors-categories": {
                "description": "The terms assigned to the post in the contributors-categories taxonomy.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the post.",
                "type": "integer",
                "required": false
              },
              "force": {
                "type": "boolean",
                "default": false,
                "description": "Whether to bypass Trash and force deletion.",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/posts/(?P<parent>[\\d]+)/revisions": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the revision.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "page": {
                "description": "Current page of the collection.",
                "type": "integer",
                "default": 1,
                "minimum": 1,
                "required": false
              },
              "per_page": {
                "description": "Maximum number of items to be returned in result set.",
                "type": "integer",
                "minimum": 1,
                "maximum": 100,
                "required": false
              },
              "search": {
                "description": "Limit results to those matching a string.",
                "type": "string",
                "required": false
              },
              "exclude": {
                "description": "Ensure result set excludes specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "include": {
                "description": "Limit result set to specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "offset": {
                "description": "Offset the result set by a specific number of items.",
                "type": "integer",
                "required": false
              },
              "order": {
                "description": "Order sort attribute ascending or descending.",
                "type": "string",
                "default": "desc",
                "enum": [
                  "asc",
                  "desc"
                ],
                "required": false
              },
              "orderby": {
                "description": "Sort collection by object attribute.",
                "type": "string",
                "default": "date",
                "enum": [
                  "date",
                  "id",
                  "include",
                  "relevance",
                  "slug",
                  "include_slugs",
                  "title"
                ],
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/posts/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the revision.",
                "type": "integer",
                "required": false
              },
              "id": {
                "description": "Unique identifier for the revision.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the revision.",
                "type": "integer",
                "required": false
              },
              "id": {
                "description": "Unique identifier for the revision.",
                "type": "integer",
                "required": false
              },
              "force": {
                "type": "boolean",
                "default": false,
                "description": "Required to be true, as revisions do not support trashing.",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/posts/(?P<id>[\\d]+)/autosaves": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the autosave.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the autosave.",
                "type": "integer",
                "required": false
              },
              "date": {
                "description": "The date the post was published, in the site's timezone.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "date_gmt": {
                "description": "The date the post was published, as GMT.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the post unique to its type.",
                "type": "string",
                "required": false
              },
              "status": {
                "description": "A named status for the post.",
                "type": "string",
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "acf-disabled",
                  "pitch",
                  "appr-request-ab",
                  "appr-request-at",
                  "appr-request-cm",
                  "appr-request-mn",
                  "appr-request-sl",
                  "appr-request-vp",
                  "appr-request-jo",
                  "appr-request-jgl",
                  "approved-post-ab",
                  "approved-post-at",
                  "approved-post-cm",
                  "approved-post-mn",
                  "approved-post-sl",
                  "approved-post-vp",
                  "approved-post-jo",
                  "approved-post-jgl",
                  "rejected-post-at",
                  "rejected-post-ab",
                  "rejected-postcm",
                  "rejected-post-mn",
                  "rejected-post-sl",
                  "rejected-post-vp",
                  "rejected-post-jo",
                  "rejected-post-jgl",
                  "quant-apr-post-ab",
                  "quant-apr-post-sl",
                  "quant-apr-post-jo",
                  "quant-apr-post-jgl",
                  "quant-apr-req-ab",
                  "quant-appr-req-sl",
                  "quant-apr-req-jo",
                  "quant-apr-req-jgl",
                  "quant-reject-ab",
                  "quant-reject-sl",
                  "quant-reject-jo",
                  "quant-reject-jgl",
                  "webinars-req-t-d-jo",
                  "webinar-appr-t-d-jo",
                  "webinar-rejec-t-d-jo",
                  "webinar-opt-req-t-d",
                  "webinar-opt-appr",
                  "webinar-opt-reject",
                  "chinese-ti-content"
                ],
                "required": false
              },
              "password": {
                "description": "A password to protect access to the content and excerpt.",
                "type": "string",
                "required": false
              },
              "title": {
                "description": "The title for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Title for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML title for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "content": {
                "description": "The content for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Content for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML content for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit"
                    ],
                    "readonly": true
                  },
                  "block_version": {
                    "description": "Version of the content block format used by the post.",
                    "type": "integer",
                    "context": [
                      "edit"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the content is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "author": {
                "description": "The ID for the author of the post.",
                "type": "integer",
                "required": false
              },
              "excerpt": {
                "description": "The excerpt for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Excerpt for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML excerpt for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the excerpt is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "featured_media": {
                "description": "The ID of the featured media for the post.",
                "type": "integer",
                "required": false
              },
              "comment_status": {
                "description": "Whether or not comments are open on the post.",
                "type": "string",
                "enum": [
                  "open",
                  "closed"
                ],
                "required": false
              },
              "ping_status": {
                "description": "Whether or not the post can be pinged.",
                "type": "string",
                "enum": [
                  "open",
                  "closed"
                ],
                "required": false
              },
              "format": {
                "description": "The format for the post.",
                "type": "string",
                "enum": [
                  "standard",
                  "aside",
                  "chat",
                  "gallery",
                  "link",
                  "image",
                  "quote",
                  "status",
                  "video",
                  "audio"
                ],
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": {
                  "footnotes": {
                    "type": "string",
                    "description": "",
                    "default": ""
                  }
                },
                "required": false
              },
              "sticky": {
                "description": "Whether or not the post should be treated as sticky.",
                "type": "boolean",
                "required": false
              },
              "template": {
                "description": "The theme file to use to display the post.",
                "type": "string",
                "required": false
              },
              "categories": {
                "description": "The terms assigned to the post in the category taxonomy.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "required": false
              },
              "tags": {
                "description": "The terms assigned to the post in the post_tag taxonomy.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "required": false
              },
              "contributors-categories": {
                "description": "The terms assigned to the post in the contributors-categories taxonomy.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/posts/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the autosave.",
                "type": "integer",
                "required": false
              },
              "id": {
                "description": "The ID for the autosave.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/pages": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "page": {
                "description": "Current page of the collection.",
                "type": "integer",
                "default": 1,
                "minimum": 1,
                "required": false
              },
              "per_page": {
                "description": "Maximum number of items to be returned in result set.",
                "type": "integer",
                "default": 10,
                "minimum": 1,
                "maximum": 100,
                "required": false
              },
              "search": {
                "description": "Limit results to those matching a string.",
                "type": "string",
                "required": false
              },
              "after": {
                "description": "Limit response to posts published after a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "modified_after": {
                "description": "Limit response to posts modified after a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "author": {
                "description": "Limit result set to posts assigned to specific authors.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "author_exclude": {
                "description": "Ensure result set excludes posts assigned to specific authors.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "before": {
                "description": "Limit response to posts published before a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "modified_before": {
                "description": "Limit response to posts modified before a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "exclude": {
                "description": "Ensure result set excludes specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "include": {
                "description": "Limit result set to specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "menu_order": {
                "description": "Limit result set to posts with a specific menu_order value.",
                "type": "integer",
                "required": false
              },
              "offset": {
                "description": "Offset the result set by a specific number of items.",
                "type": "integer",
                "required": false
              },
              "order": {
                "description": "Order sort attribute ascending or descending.",
                "type": "string",
                "default": "desc",
                "enum": [
                  "asc",
                  "desc"
                ],
                "required": false
              },
              "orderby": {
                "description": "Sort collection by post attribute.",
                "type": "string",
                "default": "date",
                "enum": [
                  "author",
                  "date",
                  "id",
                  "include",
                  "modified",
                  "parent",
                  "relevance",
                  "slug",
                  "include_slugs",
                  "title",
                  "menu_order"
                ],
                "required": false
              },
              "parent": {
                "description": "Limit result set to items with particular parent IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "parent_exclude": {
                "description": "Limit result set to all items except those of a particular parent ID.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "search_columns": {
                "default": [],
                "description": "Array of column names to be searched.",
                "type": "array",
                "items": {
                  "enum": [
                    "post_title",
                    "post_content",
                    "post_excerpt"
                  ],
                  "type": "string"
                },
                "required": false
              },
              "slug": {
                "description": "Limit result set to posts with one or more specific slugs.",
                "type": "array",
                "items": {
                  "type": "string"
                },
                "required": false
              },
              "status": {
                "default": "publish",
                "description": "Limit result set to posts assigned one or more statuses.",
                "type": "array",
                "items": {
                  "enum": [
                    "publish",
                    "future",
                    "draft",
                    "pending",
                    "private",
                    "trash",
                    "auto-draft",
                    "inherit",
                    "request-pending",
                    "request-confirmed",
                    "request-failed",
                    "request-completed",
                    "acf-disabled",
                    "pitch",
                    "appr-request-ab",
                    "appr-request-at",
                    "appr-request-cm",
                    "appr-request-mn",
                    "appr-request-sl",
                    "appr-request-vp",
                    "appr-request-jo",
                    "appr-request-jgl",
                    "approved-post-ab",
                    "approved-post-at",
                    "approved-post-cm",
                    "approved-post-mn",
                    "approved-post-sl",
                    "approved-post-vp",
                    "approved-post-jo",
                    "approved-post-jgl",
                    "rejected-post-at",
                    "rejected-post-ab",
                    "rejected-postcm",
                    "rejected-post-mn",
                    "rejected-post-sl",
                    "rejected-post-vp",
                    "rejected-post-jo",
                    "rejected-post-jgl",
                    "quant-apr-post-ab",
                    "quant-apr-post-sl",
                    "quant-apr-post-jo",
                    "quant-apr-post-jgl",
                    "quant-apr-req-ab",
                    "quant-appr-req-sl",
                    "quant-apr-req-jo",
                    "quant-apr-req-jgl",
                    "quant-reject-ab",
                    "quant-reject-sl",
                    "quant-reject-jo",
                    "quant-reject-jgl",
                    "webinars-req-t-d-jo",
                    "webinar-appr-t-d-jo",
                    "webinar-rejec-t-d-jo",
                    "webinar-opt-req-t-d",
                    "webinar-opt-appr",
                    "webinar-opt-reject",
                    "chinese-ti-content",
                    "any"
                  ],
                  "type": "string"
                },
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "date": {
                "description": "The date the post was published, in the site's timezone.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "date_gmt": {
                "description": "The date the post was published, as GMT.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the post unique to its type.",
                "type": "string",
                "required": false
              },
              "status": {
                "description": "A named status for the post.",
                "type": "string",
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "acf-disabled",
                  "pitch",
                  "appr-request-ab",
                  "appr-request-at",
                  "appr-request-cm",
                  "appr-request-mn",
                  "appr-request-sl",
                  "appr-request-vp",
                  "appr-request-jo",
                  "appr-request-jgl",
                  "approved-post-ab",
                  "approved-post-at",
                  "approved-post-cm",
                  "approved-post-mn",
                  "approved-post-sl",
                  "approved-post-vp",
                  "approved-post-jo",
                  "approved-post-jgl",
                  "rejected-post-at",
                  "rejected-post-ab",
                  "rejected-postcm",
                  "rejected-post-mn",
                  "rejected-post-sl",
                  "rejected-post-vp",
                  "rejected-post-jo",
                  "rejected-post-jgl",
                  "quant-apr-post-ab",
                  "quant-apr-post-sl",
                  "quant-apr-post-jo",
                  "quant-apr-post-jgl",
                  "quant-apr-req-ab",
                  "quant-appr-req-sl",
                  "quant-apr-req-jo",
                  "quant-apr-req-jgl",
                  "quant-reject-ab",
                  "quant-reject-sl",
                  "quant-reject-jo",
                  "quant-reject-jgl",
                  "webinars-req-t-d-jo",
                  "webinar-appr-t-d-jo",
                  "webinar-rejec-t-d-jo",
                  "webinar-opt-req-t-d",
                  "webinar-opt-appr",
                  "webinar-opt-reject",
                  "chinese-ti-content"
                ],
                "required": false
              },
              "password": {
                "description": "A password to protect access to the content and excerpt.",
                "type": "string",
                "required": false
              },
              "parent": {
                "description": "The ID for the parent of the post.",
                "type": "integer",
                "required": false
              },
              "title": {
                "description": "The title for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Title for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML title for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "content": {
                "description": "The content for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Content for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML content for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit"
                    ],
                    "readonly": true
                  },
                  "block_version": {
                    "description": "Version of the content block format used by the post.",
                    "type": "integer",
                    "context": [
                      "edit"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the content is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "author": {
                "description": "The ID for the author of the post.",
                "type": "integer",
                "required": false
              },
              "excerpt": {
                "description": "The excerpt for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Excerpt for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML excerpt for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the excerpt is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "featured_media": {
                "description": "The ID of the featured media for the post.",
                "type": "integer",
                "required": false
              },
              "comment_status": {
                "description": "Whether or not comments are open on the post.",
                "type": "string",
                "enum": [
                  "open",
                  "closed"
                ],
                "required": false
              },
              "ping_status": {
                "description": "Whether or not the post can be pinged.",
                "type": "string",
                "enum": [
                  "open",
                  "closed"
                ],
                "required": false
              },
              "menu_order": {
                "description": "The order of the post in relation to other posts.",
                "type": "integer",
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": {
                  "footnotes": {
                    "type": "string",
                    "description": "",
                    "default": ""
                  }
                },
                "required": false
              },
              "template": {
                "description": "The theme file to use to display the post.",
                "type": "string",
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/pages"
            }
          ]
        }
      },
      "/wp/v2/pages/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the post.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "password": {
                "description": "The password for the post if it is password protected.",
                "type": "string",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST",
              "PUT",
              "PATCH"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the post.",
                "type": "integer",
                "required": false
              },
              "date": {
                "description": "The date the post was published, in the site's timezone.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "date_gmt": {
                "description": "The date the post was published, as GMT.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the post unique to its type.",
                "type": "string",
                "required": false
              },
              "status": {
                "description": "A named status for the post.",
                "type": "string",
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "acf-disabled",
                  "pitch",
                  "appr-request-ab",
                  "appr-request-at",
                  "appr-request-cm",
                  "appr-request-mn",
                  "appr-request-sl",
                  "appr-request-vp",
                  "appr-request-jo",
                  "appr-request-jgl",
                  "approved-post-ab",
                  "approved-post-at",
                  "approved-post-cm",
                  "approved-post-mn",
                  "approved-post-sl",
                  "approved-post-vp",
                  "approved-post-jo",
                  "approved-post-jgl",
                  "rejected-post-at",
                  "rejected-post-ab",
                  "rejected-postcm",
                  "rejected-post-mn",
                  "rejected-post-sl",
                  "rejected-post-vp",
                  "rejected-post-jo",
                  "rejected-post-jgl",
                  "quant-apr-post-ab",
                  "quant-apr-post-sl",
                  "quant-apr-post-jo",
                  "quant-apr-post-jgl",
                  "quant-apr-req-ab",
                  "quant-appr-req-sl",
                  "quant-apr-req-jo",
                  "quant-apr-req-jgl",
                  "quant-reject-ab",
                  "quant-reject-sl",
                  "quant-reject-jo",
                  "quant-reject-jgl",
                  "webinars-req-t-d-jo",
                  "webinar-appr-t-d-jo",
                  "webinar-rejec-t-d-jo",
                  "webinar-opt-req-t-d",
                  "webinar-opt-appr",
                  "webinar-opt-reject",
                  "chinese-ti-content"
                ],
                "required": false
              },
              "password": {
                "description": "A password to protect access to the content and excerpt.",
                "type": "string",
                "required": false
              },
              "parent": {
                "description": "The ID for the parent of the post.",
                "type": "integer",
                "required": false
              },
              "title": {
                "description": "The title for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Title for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML title for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "content": {
                "description": "The content for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Content for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML content for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit"
                    ],
                    "readonly": true
                  },
                  "block_version": {
                    "description": "Version of the content block format used by the post.",
                    "type": "integer",
                    "context": [
                      "edit"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the content is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "author": {
                "description": "The ID for the author of the post.",
                "type": "integer",
                "required": false
              },
              "excerpt": {
                "description": "The excerpt for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Excerpt for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML excerpt for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the excerpt is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "featured_media": {
                "description": "The ID of the featured media for the post.",
                "type": "integer",
                "required": false
              },
              "comment_status": {
                "description": "Whether or not comments are open on the post.",
                "type": "string",
                "enum": [
                  "open",
                  "closed"
                ],
                "required": false
              },
              "ping_status": {
                "description": "Whether or not the post can be pinged.",
                "type": "string",
                "enum": [
                  "open",
                  "closed"
                ],
                "required": false
              },
              "menu_order": {
                "description": "The order of the post in relation to other posts.",
                "type": "integer",
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": {
                  "footnotes": {
                    "type": "string",
                    "description": "",
                    "default": ""
                  }
                },
                "required": false
              },
              "template": {
                "description": "The theme file to use to display the post.",
                "type": "string",
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the post.",
                "type": "integer",
                "required": false
              },
              "force": {
                "type": "boolean",
                "default": false,
                "description": "Whether to bypass Trash and force deletion.",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/pages/(?P<parent>[\\d]+)/revisions": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the revision.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "page": {
                "description": "Current page of the collection.",
                "type": "integer",
                "default": 1,
                "minimum": 1,
                "required": false
              },
              "per_page": {
                "description": "Maximum number of items to be returned in result set.",
                "type": "integer",
                "minimum": 1,
                "maximum": 100,
                "required": false
              },
              "search": {
                "description": "Limit results to those matching a string.",
                "type": "string",
                "required": false
              },
              "exclude": {
                "description": "Ensure result set excludes specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "include": {
                "description": "Limit result set to specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "offset": {
                "description": "Offset the result set by a specific number of items.",
                "type": "integer",
                "required": false
              },
              "order": {
                "description": "Order sort attribute ascending or descending.",
                "type": "string",
                "default": "desc",
                "enum": [
                  "asc",
                  "desc"
                ],
                "required": false
              },
              "orderby": {
                "description": "Sort collection by object attribute.",
                "type": "string",
                "default": "date",
                "enum": [
                  "date",
                  "id",
                  "include",
                  "relevance",
                  "slug",
                  "include_slugs",
                  "title"
                ],
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/pages/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the revision.",
                "type": "integer",
                "required": false
              },
              "id": {
                "description": "Unique identifier for the revision.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the revision.",
                "type": "integer",
                "required": false
              },
              "id": {
                "description": "Unique identifier for the revision.",
                "type": "integer",
                "required": false
              },
              "force": {
                "type": "boolean",
                "default": false,
                "description": "Required to be true, as revisions do not support trashing.",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/pages/(?P<id>[\\d]+)/autosaves": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the autosave.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the post.",
                "type": "integer",
                "required": false
              },
              "date": {
                "description": "The date the post was published, in the site's timezone.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "date_gmt": {
                "description": "The date the post was published, as GMT.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the post unique to its type.",
                "type": "string",
                "required": false
              },
              "status": {
                "description": "A named status for the post.",
                "type": "string",
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "acf-disabled",
                  "pitch",
                  "appr-request-ab",
                  "appr-request-at",
                  "appr-request-cm",
                  "appr-request-mn",
                  "appr-request-sl",
                  "appr-request-vp",
                  "appr-request-jo",
                  "appr-request-jgl",
                  "approved-post-ab",
                  "approved-post-at",
                  "approved-post-cm",
                  "approved-post-mn",
                  "approved-post-sl",
                  "approved-post-vp",
                  "approved-post-jo",
                  "approved-post-jgl",
                  "rejected-post-at",
                  "rejected-post-ab",
                  "rejected-postcm",
                  "rejected-post-mn",
                  "rejected-post-sl",
                  "rejected-post-vp",
                  "rejected-post-jo",
                  "rejected-post-jgl",
                  "quant-apr-post-ab",
                  "quant-apr-post-sl",
                  "quant-apr-post-jo",
                  "quant-apr-post-jgl",
                  "quant-apr-req-ab",
                  "quant-appr-req-sl",
                  "quant-apr-req-jo",
                  "quant-apr-req-jgl",
                  "quant-reject-ab",
                  "quant-reject-sl",
                  "quant-reject-jo",
                  "quant-reject-jgl",
                  "webinars-req-t-d-jo",
                  "webinar-appr-t-d-jo",
                  "webinar-rejec-t-d-jo",
                  "webinar-opt-req-t-d",
                  "webinar-opt-appr",
                  "webinar-opt-reject",
                  "chinese-ti-content"
                ],
                "required": false
              },
              "password": {
                "description": "A password to protect access to the content and excerpt.",
                "type": "string",
                "required": false
              },
              "title": {
                "description": "The title for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Title for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML title for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "content": {
                "description": "The content for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Content for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML content for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit"
                    ],
                    "readonly": true
                  },
                  "block_version": {
                    "description": "Version of the content block format used by the post.",
                    "type": "integer",
                    "context": [
                      "edit"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the content is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "author": {
                "description": "The ID for the author of the post.",
                "type": "integer",
                "required": false
              },
              "excerpt": {
                "description": "The excerpt for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Excerpt for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML excerpt for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the excerpt is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "featured_media": {
                "description": "The ID of the featured media for the post.",
                "type": "integer",
                "required": false
              },
              "comment_status": {
                "description": "Whether or not comments are open on the post.",
                "type": "string",
                "enum": [
                  "open",
                  "closed"
                ],
                "required": false
              },
              "ping_status": {
                "description": "Whether or not the post can be pinged.",
                "type": "string",
                "enum": [
                  "open",
                  "closed"
                ],
                "required": false
              },
              "menu_order": {
                "description": "The order of the post in relation to other posts.",
                "type": "integer",
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": {
                  "footnotes": {
                    "type": "string",
                    "description": "",
                    "default": ""
                  }
                },
                "required": false
              },
              "template": {
                "description": "The theme file to use to display the post.",
                "type": "string",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/pages/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the autosave.",
                "type": "integer",
                "required": false
              },
              "id": {
                "description": "The ID for the autosave.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/media": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "page": {
                "description": "Current page of the collection.",
                "type": "integer",
                "default": 1,
                "minimum": 1,
                "required": false
              },
              "per_page": {
                "description": "Maximum number of items to be returned in result set.",
                "type": "integer",
                "default": 10,
                "minimum": 1,
                "maximum": 100,
                "required": false
              },
              "search": {
                "description": "Limit results to those matching a string.",
                "type": "string",
                "required": false
              },
              "after": {
                "description": "Limit response to posts published after a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "modified_after": {
                "description": "Limit response to posts modified after a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "author": {
                "description": "Limit result set to posts assigned to specific authors.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "author_exclude": {
                "description": "Ensure result set excludes posts assigned to specific authors.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "before": {
                "description": "Limit response to posts published before a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "modified_before": {
                "description": "Limit response to posts modified before a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "exclude": {
                "description": "Ensure result set excludes specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "include": {
                "description": "Limit result set to specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "offset": {
                "description": "Offset the result set by a specific number of items.",
                "type": "integer",
                "required": false
              },
              "order": {
                "description": "Order sort attribute ascending or descending.",
                "type": "string",
                "default": "desc",
                "enum": [
                  "asc",
                  "desc"
                ],
                "required": false
              },
              "orderby": {
                "description": "Sort collection by post attribute.",
                "type": "string",
                "default": "date",
                "enum": [
                  "author",
                  "date",
                  "id",
                  "include",
                  "modified",
                  "parent",
                  "relevance",
                  "slug",
                  "include_slugs",
                  "title"
                ],
                "required": false
              },
              "parent": {
                "description": "Limit result set to items with particular parent IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "parent_exclude": {
                "description": "Limit result set to all items except those of a particular parent ID.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "search_columns": {
                "default": [],
                "description": "Array of column names to be searched.",
                "type": "array",
                "items": {
                  "enum": [
                    "post_title",
                    "post_content",
                    "post_excerpt"
                  ],
                  "type": "string"
                },
                "required": false
              },
              "slug": {
                "description": "Limit result set to posts with one or more specific slugs.",
                "type": "array",
                "items": {
                  "type": "string"
                },
                "required": false
              },
              "status": {
                "default": "inherit",
                "description": "Limit result set to posts assigned one or more statuses.",
                "type": "array",
                "items": {
                  "enum": [
                    "inherit",
                    "private",
                    "trash"
                  ],
                  "type": "string"
                },
                "required": false
              },
              "media_type": {
                "default": null,
                "description": "Limit result set to attachments of a particular media type.",
                "type": "string",
                "enum": [
                  "image",
                  "video",
                  "audio",
                  "application"
                ],
                "required": false
              },
              "mime_type": {
                "default": null,
                "description": "Limit result set to attachments of a particular MIME type.",
                "type": "string",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "args": {
              "date": {
                "description": "The date the post was published, in the site's timezone.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "date_gmt": {
                "description": "The date the post was published, as GMT.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the post unique to its type.",
                "type": "string",
                "required": false
              },
              "status": {
                "description": "A named status for the post.",
                "type": "string",
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "acf-disabled",
                  "pitch",
                  "appr-request-ab",
                  "appr-request-at",
                  "appr-request-cm",
                  "appr-request-mn",
                  "appr-request-sl",
                  "appr-request-vp",
                  "appr-request-jo",
                  "appr-request-jgl",
                  "approved-post-ab",
                  "approved-post-at",
                  "approved-post-cm",
                  "approved-post-mn",
                  "approved-post-sl",
                  "approved-post-vp",
                  "approved-post-jo",
                  "approved-post-jgl",
                  "rejected-post-at",
                  "rejected-post-ab",
                  "rejected-postcm",
                  "rejected-post-mn",
                  "rejected-post-sl",
                  "rejected-post-vp",
                  "rejected-post-jo",
                  "rejected-post-jgl",
                  "quant-apr-post-ab",
                  "quant-apr-post-sl",
                  "quant-apr-post-jo",
                  "quant-apr-post-jgl",
                  "quant-apr-req-ab",
                  "quant-appr-req-sl",
                  "quant-apr-req-jo",
                  "quant-apr-req-jgl",
                  "quant-reject-ab",
                  "quant-reject-sl",
                  "quant-reject-jo",
                  "quant-reject-jgl",
                  "webinars-req-t-d-jo",
                  "webinar-appr-t-d-jo",
                  "webinar-rejec-t-d-jo",
                  "webinar-opt-req-t-d",
                  "webinar-opt-appr",
                  "webinar-opt-reject",
                  "chinese-ti-content"
                ],
                "required": false
              },
              "title": {
                "description": "The title for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Title for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML title for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "author": {
                "description": "The ID for the author of the post.",
                "type": "integer",
                "required": false
              },
              "comment_status": {
                "description": "Whether or not comments are open on the post.",
                "type": "string",
                "enum": [
                  "open",
                  "closed"
                ],
                "required": false
              },
              "ping_status": {
                "description": "Whether or not the post can be pinged.",
                "type": "string",
                "enum": [
                  "open",
                  "closed"
                ],
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": [],
                "required": false
              },
              "template": {
                "description": "The theme file to use to display the post.",
                "type": "string",
                "required": false
              },
              "smush": {
                "description": "Smush data.",
                "type": "string",
                "required": false
              },
              "alt_text": {
                "description": "Alternative text to display when attachment is not displayed.",
                "type": "string",
                "required": false
              },
              "caption": {
                "description": "The attachment caption.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Caption for the attachment, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML caption for the attachment, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "description": {
                "description": "The attachment description.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Description for the attachment, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML description for the attachment, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "post": {
                "description": "The ID for the associated post of the attachment.",
                "type": "integer",
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/media"
            }
          ]
        }
      },
      "/wp/v2/media/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "id": {
                "description": "Unique identifier for the post.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST",
              "PUT",
              "PATCH"
            ],
            "args": {
              "id": {
                "description": "Unique identifier for the post.",
                "type": "integer",
                "required": false
              },
              "date": {
                "description": "The date the post was published, in the site's timezone.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "date_gmt": {
                "description": "The date the post was published, as GMT.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the post unique to its type.",
                "type": "string",
                "required": false
              },
              "status": {
                "description": "A named status for the post.",
                "type": "string",
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "acf-disabled",
                  "pitch",
                  "appr-request-ab",
                  "appr-request-at",
                  "appr-request-cm",
                  "appr-request-mn",
                  "appr-request-sl",
                  "appr-request-vp",
                  "appr-request-jo",
                  "appr-request-jgl",
                  "approved-post-ab",
                  "approved-post-at",
                  "approved-post-cm",
                  "approved-post-mn",
                  "approved-post-sl",
                  "approved-post-vp",
                  "approved-post-jo",
                  "approved-post-jgl",
                  "rejected-post-at",
                  "rejected-post-ab",
                  "rejected-postcm",
                  "rejected-post-mn",
                  "rejected-post-sl",
                  "rejected-post-vp",
                  "rejected-post-jo",
                  "rejected-post-jgl",
                  "quant-apr-post-ab",
                  "quant-apr-post-sl",
                  "quant-apr-post-jo",
                  "quant-apr-post-jgl",
                  "quant-apr-req-ab",
                  "quant-appr-req-sl",
                  "quant-apr-req-jo",
                  "quant-apr-req-jgl",
                  "quant-reject-ab",
                  "quant-reject-sl",
                  "quant-reject-jo",
                  "quant-reject-jgl",
                  "webinars-req-t-d-jo",
                  "webinar-appr-t-d-jo",
                  "webinar-rejec-t-d-jo",
                  "webinar-opt-req-t-d",
                  "webinar-opt-appr",
                  "webinar-opt-reject",
                  "chinese-ti-content"
                ],
                "required": false
              },
              "title": {
                "description": "The title for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Title for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML title for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "author": {
                "description": "The ID for the author of the post.",
                "type": "integer",
                "required": false
              },
              "comment_status": {
                "description": "Whether or not comments are open on the post.",
                "type": "string",
                "enum": [
                  "open",
                  "closed"
                ],
                "required": false
              },
              "ping_status": {
                "description": "Whether or not the post can be pinged.",
                "type": "string",
                "enum": [
                  "open",
                  "closed"
                ],
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": [],
                "required": false
              },
              "template": {
                "description": "The theme file to use to display the post.",
                "type": "string",
                "required": false
              },
              "smush": {
                "description": "Smush data.",
                "type": "string",
                "required": false
              },
              "alt_text": {
                "description": "Alternative text to display when attachment is not displayed.",
                "type": "string",
                "required": false
              },
              "caption": {
                "description": "The attachment caption.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Caption for the attachment, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML caption for the attachment, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "description": {
                "description": "The attachment description.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Description for the attachment, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML description for the attachment, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "post": {
                "description": "The ID for the associated post of the attachment.",
                "type": "integer",
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "args": {
              "id": {
                "description": "Unique identifier for the post.",
                "type": "integer",
                "required": false
              },
              "force": {
                "type": "boolean",
                "default": false,
                "description": "Whether to bypass Trash and force deletion.",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/media/(?P<id>[\\d]+)/post-process": {
        "namespace": "wp/v2",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": {
              "id": {
                "description": "Unique identifier for the attachment.",
                "type": "integer",
                "required": false
              },
              "action": {
                "type": "string",
                "enum": [
                  "create-image-subsizes"
                ],
                "required": true
              }
            }
          }
        ]
      },
      "/wp/v2/media/(?P<id>[\\d]+)/edit": {
        "namespace": "wp/v2",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": {
              "src": {
                "description": "URL to the edited image file.",
                "type": "string",
                "format": "uri",
                "required": true
              },
              "modifiers": {
                "description": "Array of image edits.",
                "type": "array",
                "minItems": 1,
                "items": {
                  "description": "Image edit.",
                  "type": "object",
                  "required": [
                    "type",
                    "args"
                  ],
                  "oneOf": [
                    {
                      "title": "Rotation",
                      "properties": {
                        "type": {
                          "description": "Rotation type.",
                          "type": "string",
                          "enum": [
                            "rotate"
                          ]
                        },
                        "args": {
                          "description": "Rotation arguments.",
                          "type": "object",
                          "required": [
                            "angle"
                          ],
                          "properties": {
                            "angle": {
                              "description": "Angle to rotate clockwise in degrees.",
                              "type": "number"
                            }
                          }
                        }
                      }
                    },
                    {
                      "title": "Crop",
                      "properties": {
                        "type": {
                          "description": "Crop type.",
                          "type": "string",
                          "enum": [
                            "crop"
                          ]
                        },
                        "args": {
                          "description": "Crop arguments.",
                          "type": "object",
                          "required": [
                            "left",
                            "top",
                            "width",
                            "height"
                          ],
                          "properties": {
                            "left": {
                              "description": "Horizontal position from the left to begin the crop as a percentage of the image width.",
                              "type": "number"
                            },
                            "top": {
                              "description": "Vertical position from the top to begin the crop as a percentage of the image height.",
                              "type": "number"
                            },
                            "width": {
                              "description": "Width of the crop as a percentage of the image width.",
                              "type": "number"
                            },
                            "height": {
                              "description": "Height of the crop as a percentage of the image height.",
                              "type": "number"
                            }
                          }
                        }
                      }
                    }
                  ]
                },
                "required": false
              },
              "rotation": {
                "description": "The amount to rotate the image clockwise in degrees. DEPRECATED: Use `modifiers` instead.",
                "type": "integer",
                "minimum": 0,
                "exclusiveMinimum": true,
                "maximum": 360,
                "exclusiveMaximum": true,
                "required": false
              },
              "x": {
                "description": "As a percentage of the image, the x position to start the crop from. DEPRECATED: Use `modifiers` instead.",
                "type": "number",
                "minimum": 0,
                "maximum": 100,
                "required": false
              },
              "y": {
                "description": "As a percentage of the image, the y position to start the crop from. DEPRECATED: Use `modifiers` instead.",
                "type": "number",
                "minimum": 0,
                "maximum": 100,
                "required": false
              },
              "width": {
                "description": "As a percentage of the image, the width to crop the image to. DEPRECATED: Use `modifiers` instead.",
                "type": "number",
                "minimum": 0,
                "maximum": 100,
                "required": false
              },
              "height": {
                "description": "As a percentage of the image, the height to crop the image to. DEPRECATED: Use `modifiers` instead.",
                "type": "number",
                "minimum": 0,
                "maximum": 100,
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/menu-items": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "page": {
                "description": "Current page of the collection.",
                "type": "integer",
                "default": 1,
                "minimum": 1,
                "required": false
              },
              "per_page": {
                "description": "Maximum number of items to be returned in result set.",
                "type": "integer",
                "default": 100,
                "minimum": 1,
                "maximum": 100,
                "required": false
              },
              "search": {
                "description": "Limit results to those matching a string.",
                "type": "string",
                "required": false
              },
              "after": {
                "description": "Limit response to posts published after a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "modified_after": {
                "description": "Limit response to posts modified after a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "before": {
                "description": "Limit response to posts published before a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "modified_before": {
                "description": "Limit response to posts modified before a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "exclude": {
                "description": "Ensure result set excludes specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "include": {
                "description": "Limit result set to specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "offset": {
                "description": "Offset the result set by a specific number of items.",
                "type": "integer",
                "required": false
              },
              "order": {
                "description": "Order sort attribute ascending or descending.",
                "type": "string",
                "default": "asc",
                "enum": [
                  "asc",
                  "desc"
                ],
                "required": false
              },
              "orderby": {
                "description": "Sort collection by object attribute.",
                "type": "string",
                "default": "menu_order",
                "enum": [
                  "author",
                  "date",
                  "id",
                  "include",
                  "modified",
                  "parent",
                  "relevance",
                  "slug",
                  "include_slugs",
                  "title",
                  "menu_order"
                ],
                "required": false
              },
              "search_columns": {
                "default": [],
                "description": "Array of column names to be searched.",
                "type": "array",
                "items": {
                  "enum": [
                    "post_title",
                    "post_content",
                    "post_excerpt"
                  ],
                  "type": "string"
                },
                "required": false
              },
              "slug": {
                "description": "Limit result set to posts with one or more specific slugs.",
                "type": "array",
                "items": {
                  "type": "string"
                },
                "required": false
              },
              "status": {
                "default": "publish",
                "description": "Limit result set to posts assigned one or more statuses.",
                "type": "array",
                "items": {
                  "enum": [
                    "publish",
                    "future",
                    "draft",
                    "pending",
                    "private",
                    "trash",
                    "auto-draft",
                    "inherit",
                    "request-pending",
                    "request-confirmed",
                    "request-failed",
                    "request-completed",
                    "acf-disabled",
                    "pitch",
                    "appr-request-ab",
                    "appr-request-at",
                    "appr-request-cm",
                    "appr-request-mn",
                    "appr-request-sl",
                    "appr-request-vp",
                    "appr-request-jo",
                    "appr-request-jgl",
                    "approved-post-ab",
                    "approved-post-at",
                    "approved-post-cm",
                    "approved-post-mn",
                    "approved-post-sl",
                    "approved-post-vp",
                    "approved-post-jo",
                    "approved-post-jgl",
                    "rejected-post-at",
                    "rejected-post-ab",
                    "rejected-postcm",
                    "rejected-post-mn",
                    "rejected-post-sl",
                    "rejected-post-vp",
                    "rejected-post-jo",
                    "rejected-post-jgl",
                    "quant-apr-post-ab",
                    "quant-apr-post-sl",
                    "quant-apr-post-jo",
                    "quant-apr-post-jgl",
                    "quant-apr-req-ab",
                    "quant-appr-req-sl",
                    "quant-apr-req-jo",
                    "quant-apr-req-jgl",
                    "quant-reject-ab",
                    "quant-reject-sl",
                    "quant-reject-jo",
                    "quant-reject-jgl",
                    "webinars-req-t-d-jo",
                    "webinar-appr-t-d-jo",
                    "webinar-rejec-t-d-jo",
                    "webinar-opt-req-t-d",
                    "webinar-opt-appr",
                    "webinar-opt-reject",
                    "chinese-ti-content",
                    "any"
                  ],
                  "type": "string"
                },
                "required": false
              },
              "tax_relation": {
                "description": "Limit result set based on relationship between multiple taxonomies.",
                "type": "string",
                "enum": [
                  "AND",
                  "OR"
                ],
                "required": false
              },
              "menus": {
                "description": "Limit result set to items with specific terms assigned in the menus taxonomy.",
                "type": [
                  "object",
                  "array"
                ],
                "oneOf": [
                  {
                    "title": "Term ID List",
                    "description": "Match terms with the listed IDs.",
                    "type": "array",
                    "items": {
                      "type": "integer"
                    }
                  },
                  {
                    "title": "Term ID Taxonomy Query",
                    "description": "Perform an advanced term query.",
                    "type": "object",
                    "properties": {
                      "terms": {
                        "description": "Term IDs.",
                        "type": "array",
                        "items": {
                          "type": "integer"
                        },
                        "default": []
                      },
                      "operator": {
                        "description": "Whether items must be assigned all or any of the specified terms.",
                        "type": "string",
                        "enum": [
                          "AND",
                          "OR"
                        ],
                        "default": "OR"
                      }
                    },
                    "additionalProperties": false
                  }
                ],
                "required": false
              },
              "menus_exclude": {
                "description": "Limit result set to items except those with specific terms assigned in the menus taxonomy.",
                "type": [
                  "object",
                  "array"
                ],
                "oneOf": [
                  {
                    "title": "Term ID List",
                    "description": "Match terms with the listed IDs.",
                    "type": "array",
                    "items": {
                      "type": "integer"
                    }
                  },
                  {
                    "title": "Term ID Taxonomy Query",
                    "description": "Perform an advanced term query.",
                    "type": "object",
                    "properties": {
                      "terms": {
                        "description": "Term IDs.",
                        "type": "array",
                        "items": {
                          "type": "integer"
                        },
                        "default": []
                      }
                    },
                    "additionalProperties": false
                  }
                ],
                "required": false
              },
              "menu_order": {
                "description": "Limit result set to posts with a specific menu_order value.",
                "type": "integer",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "title": {
                "description": "The title for the object.",
                "type": [
                  "string",
                  "object"
                ],
                "properties": {
                  "raw": {
                    "description": "Title for the object, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML title for the object, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "type": {
                "default": "custom",
                "description": "The family of objects originally represented, such as \"post_type\" or \"taxonomy\".",
                "type": "string",
                "enum": [
                  "taxonomy",
                  "post_type",
                  "post_type_archive",
                  "custom"
                ],
                "required": false
              },
              "status": {
                "default": "publish",
                "description": "A named status for the object.",
                "type": "string",
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "acf-disabled",
                  "pitch",
                  "appr-request-ab",
                  "appr-request-at",
                  "appr-request-cm",
                  "appr-request-mn",
                  "appr-request-sl",
                  "appr-request-vp",
                  "appr-request-jo",
                  "appr-request-jgl",
                  "approved-post-ab",
                  "approved-post-at",
                  "approved-post-cm",
                  "approved-post-mn",
                  "approved-post-sl",
                  "approved-post-vp",
                  "approved-post-jo",
                  "approved-post-jgl",
                  "rejected-post-at",
                  "rejected-post-ab",
                  "rejected-postcm",
                  "rejected-post-mn",
                  "rejected-post-sl",
                  "rejected-post-vp",
                  "rejected-post-jo",
                  "rejected-post-jgl",
                  "quant-apr-post-ab",
                  "quant-apr-post-sl",
                  "quant-apr-post-jo",
                  "quant-apr-post-jgl",
                  "quant-apr-req-ab",
                  "quant-appr-req-sl",
                  "quant-apr-req-jo",
                  "quant-apr-req-jgl",
                  "quant-reject-ab",
                  "quant-reject-sl",
                  "quant-reject-jo",
                  "quant-reject-jgl",
                  "webinars-req-t-d-jo",
                  "webinar-appr-t-d-jo",
                  "webinar-rejec-t-d-jo",
                  "webinar-opt-req-t-d",
                  "webinar-opt-appr",
                  "webinar-opt-reject",
                  "chinese-ti-content"
                ],
                "required": false
              },
              "parent": {
                "default": 0,
                "description": "The ID for the parent of the object.",
                "type": "integer",
                "minimum": 0,
                "required": false
              },
              "attr_title": {
                "description": "Text for the title attribute of the link element for this menu item.",
                "type": "string",
                "required": false
              },
              "classes": {
                "description": "Class names for the link element of this menu item.",
                "type": "array",
                "items": {
                  "type": "string"
                },
                "required": false
              },
              "description": {
                "description": "The description of this menu item.",
                "type": "string",
                "required": false
              },
              "menu_order": {
                "default": 1,
                "description": "The DB ID of the nav_menu_item that is this item's menu parent, if any, otherwise 0.",
                "type": "integer",
                "minimum": 1,
                "required": false
              },
              "object": {
                "description": "The type of object originally represented, such as \"category\", \"post\", or \"attachment\".",
                "type": "string",
                "required": false
              },
              "object_id": {
                "default": 0,
                "description": "The database ID of the original object this menu item represents, for example the ID for posts or the term_id for categories.",
                "type": "integer",
                "minimum": 0,
                "required": false
              },
              "target": {
                "description": "The target attribute of the link element for this menu item.",
                "type": "string",
                "enum": [
                  "_blank",
                  ""
                ],
                "required": false
              },
              "url": {
                "description": "The URL to which this menu item points.",
                "type": "string",
                "format": "uri",
                "required": false
              },
              "xfn": {
                "description": "The XFN relationship expressed in the link of this menu item.",
                "type": "array",
                "items": {
                  "type": "string"
                },
                "required": false
              },
              "menus": {
                "description": "The terms assigned to the object in the nav_menu taxonomy.",
                "type": "integer",
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": [],
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/menu-items"
            }
          ]
        }
      },
      "/wp/v2/menu-items/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the post.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST",
              "PUT",
              "PATCH"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the post.",
                "type": "integer",
                "required": false
              },
              "title": {
                "description": "The title for the object.",
                "type": [
                  "string",
                  "object"
                ],
                "properties": {
                  "raw": {
                    "description": "Title for the object, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML title for the object, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "type": {
                "description": "The family of objects originally represented, such as \"post_type\" or \"taxonomy\".",
                "type": "string",
                "enum": [
                  "taxonomy",
                  "post_type",
                  "post_type_archive",
                  "custom"
                ],
                "required": false
              },
              "status": {
                "description": "A named status for the object.",
                "type": "string",
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "acf-disabled",
                  "pitch",
                  "appr-request-ab",
                  "appr-request-at",
                  "appr-request-cm",
                  "appr-request-mn",
                  "appr-request-sl",
                  "appr-request-vp",
                  "appr-request-jo",
                  "appr-request-jgl",
                  "approved-post-ab",
                  "approved-post-at",
                  "approved-post-cm",
                  "approved-post-mn",
                  "approved-post-sl",
                  "approved-post-vp",
                  "approved-post-jo",
                  "approved-post-jgl",
                  "rejected-post-at",
                  "rejected-post-ab",
                  "rejected-postcm",
                  "rejected-post-mn",
                  "rejected-post-sl",
                  "rejected-post-vp",
                  "rejected-post-jo",
                  "rejected-post-jgl",
                  "quant-apr-post-ab",
                  "quant-apr-post-sl",
                  "quant-apr-post-jo",
                  "quant-apr-post-jgl",
                  "quant-apr-req-ab",
                  "quant-appr-req-sl",
                  "quant-apr-req-jo",
                  "quant-apr-req-jgl",
                  "quant-reject-ab",
                  "quant-reject-sl",
                  "quant-reject-jo",
                  "quant-reject-jgl",
                  "webinars-req-t-d-jo",
                  "webinar-appr-t-d-jo",
                  "webinar-rejec-t-d-jo",
                  "webinar-opt-req-t-d",
                  "webinar-opt-appr",
                  "webinar-opt-reject",
                  "chinese-ti-content"
                ],
                "required": false
              },
              "parent": {
                "description": "The ID for the parent of the object.",
                "type": "integer",
                "minimum": 0,
                "required": false
              },
              "attr_title": {
                "description": "Text for the title attribute of the link element for this menu item.",
                "type": "string",
                "required": false
              },
              "classes": {
                "description": "Class names for the link element of this menu item.",
                "type": "array",
                "items": {
                  "type": "string"
                },
                "required": false
              },
              "description": {
                "description": "The description of this menu item.",
                "type": "string",
                "required": false
              },
              "menu_order": {
                "description": "The DB ID of the nav_menu_item that is this item's menu parent, if any, otherwise 0.",
                "type": "integer",
                "minimum": 1,
                "required": false
              },
              "object": {
                "description": "The type of object originally represented, such as \"category\", \"post\", or \"attachment\".",
                "type": "string",
                "required": false
              },
              "object_id": {
                "description": "The database ID of the original object this menu item represents, for example the ID for posts or the term_id for categories.",
                "type": "integer",
                "minimum": 0,
                "required": false
              },
              "target": {
                "description": "The target attribute of the link element for this menu item.",
                "type": "string",
                "enum": [
                  "_blank",
                  ""
                ],
                "required": false
              },
              "url": {
                "description": "The URL to which this menu item points.",
                "type": "string",
                "format": "uri",
                "required": false
              },
              "xfn": {
                "description": "The XFN relationship expressed in the link of this menu item.",
                "type": "array",
                "items": {
                  "type": "string"
                },
                "required": false
              },
              "menus": {
                "description": "The terms assigned to the object in the nav_menu taxonomy.",
                "type": "integer",
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": [],
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the post.",
                "type": "integer",
                "required": false
              },
              "force": {
                "type": "boolean",
                "default": false,
                "description": "Whether to bypass Trash and force deletion.",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/menu-items/(?P<id>[\\d]+)/autosaves": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the autosave.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the object.",
                "type": "integer",
                "minimum": 0,
                "required": false
              },
              "title": {
                "description": "The title for the object.",
                "type": [
                  "string",
                  "object"
                ],
                "properties": {
                  "raw": {
                    "description": "Title for the object, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML title for the object, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "type": {
                "description": "The family of objects originally represented, such as \"post_type\" or \"taxonomy\".",
                "type": "string",
                "enum": [
                  "taxonomy",
                  "post_type",
                  "post_type_archive",
                  "custom"
                ],
                "required": false
              },
              "status": {
                "description": "A named status for the object.",
                "type": "string",
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "acf-disabled",
                  "pitch",
                  "appr-request-ab",
                  "appr-request-at",
                  "appr-request-cm",
                  "appr-request-mn",
                  "appr-request-sl",
                  "appr-request-vp",
                  "appr-request-jo",
                  "appr-request-jgl",
                  "approved-post-ab",
                  "approved-post-at",
                  "approved-post-cm",
                  "approved-post-mn",
                  "approved-post-sl",
                  "approved-post-vp",
                  "approved-post-jo",
                  "approved-post-jgl",
                  "rejected-post-at",
                  "rejected-post-ab",
                  "rejected-postcm",
                  "rejected-post-mn",
                  "rejected-post-sl",
                  "rejected-post-vp",
                  "rejected-post-jo",
                  "rejected-post-jgl",
                  "quant-apr-post-ab",
                  "quant-apr-post-sl",
                  "quant-apr-post-jo",
                  "quant-apr-post-jgl",
                  "quant-apr-req-ab",
                  "quant-appr-req-sl",
                  "quant-apr-req-jo",
                  "quant-apr-req-jgl",
                  "quant-reject-ab",
                  "quant-reject-sl",
                  "quant-reject-jo",
                  "quant-reject-jgl",
                  "webinars-req-t-d-jo",
                  "webinar-appr-t-d-jo",
                  "webinar-rejec-t-d-jo",
                  "webinar-opt-req-t-d",
                  "webinar-opt-appr",
                  "webinar-opt-reject",
                  "chinese-ti-content"
                ],
                "required": false
              },
              "attr_title": {
                "description": "Text for the title attribute of the link element for this menu item.",
                "type": "string",
                "required": false
              },
              "classes": {
                "description": "Class names for the link element of this menu item.",
                "type": "array",
                "items": {
                  "type": "string"
                },
                "required": false
              },
              "description": {
                "description": "The description of this menu item.",
                "type": "string",
                "required": false
              },
              "menu_order": {
                "description": "The DB ID of the nav_menu_item that is this item's menu parent, if any, otherwise 0.",
                "type": "integer",
                "minimum": 1,
                "required": false
              },
              "object": {
                "description": "The type of object originally represented, such as \"category\", \"post\", or \"attachment\".",
                "type": "string",
                "required": false
              },
              "object_id": {
                "description": "The database ID of the original object this menu item represents, for example the ID for posts or the term_id for categories.",
                "type": "integer",
                "minimum": 0,
                "required": false
              },
              "target": {
                "description": "The target attribute of the link element for this menu item.",
                "type": "string",
                "enum": [
                  "_blank",
                  ""
                ],
                "required": false
              },
              "url": {
                "description": "The URL to which this menu item points.",
                "type": "string",
                "format": "uri",
                "required": false
              },
              "xfn": {
                "description": "The XFN relationship expressed in the link of this menu item.",
                "type": "array",
                "items": {
                  "type": "string"
                },
                "required": false
              },
              "menus": {
                "description": "The terms assigned to the object in the nav_menu taxonomy.",
                "type": "integer",
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": [],
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/menu-items/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the autosave.",
                "type": "integer",
                "required": false
              },
              "id": {
                "description": "The ID for the autosave.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/blocks": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "page": {
                "description": "Current page of the collection.",
                "type": "integer",
                "default": 1,
                "minimum": 1,
                "required": false
              },
              "per_page": {
                "description": "Maximum number of items to be returned in result set.",
                "type": "integer",
                "default": 10,
                "minimum": 1,
                "maximum": 100,
                "required": false
              },
              "search": {
                "description": "Limit results to those matching a string.",
                "type": "string",
                "required": false
              },
              "after": {
                "description": "Limit response to posts published after a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "modified_after": {
                "description": "Limit response to posts modified after a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "before": {
                "description": "Limit response to posts published before a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "modified_before": {
                "description": "Limit response to posts modified before a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "exclude": {
                "description": "Ensure result set excludes specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "include": {
                "description": "Limit result set to specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "offset": {
                "description": "Offset the result set by a specific number of items.",
                "type": "integer",
                "required": false
              },
              "order": {
                "description": "Order sort attribute ascending or descending.",
                "type": "string",
                "default": "desc",
                "enum": [
                  "asc",
                  "desc"
                ],
                "required": false
              },
              "orderby": {
                "description": "Sort collection by post attribute.",
                "type": "string",
                "default": "date",
                "enum": [
                  "author",
                  "date",
                  "id",
                  "include",
                  "modified",
                  "parent",
                  "relevance",
                  "slug",
                  "include_slugs",
                  "title"
                ],
                "required": false
              },
              "search_columns": {
                "default": [],
                "description": "Array of column names to be searched.",
                "type": "array",
                "items": {
                  "enum": [
                    "post_title",
                    "post_content",
                    "post_excerpt"
                  ],
                  "type": "string"
                },
                "required": false
              },
              "slug": {
                "description": "Limit result set to posts with one or more specific slugs.",
                "type": "array",
                "items": {
                  "type": "string"
                },
                "required": false
              },
              "status": {
                "default": "publish",
                "description": "Limit result set to posts assigned one or more statuses.",
                "type": "array",
                "items": {
                  "enum": [
                    "publish",
                    "future",
                    "draft",
                    "pending",
                    "private",
                    "trash",
                    "auto-draft",
                    "inherit",
                    "request-pending",
                    "request-confirmed",
                    "request-failed",
                    "request-completed",
                    "acf-disabled",
                    "pitch",
                    "appr-request-ab",
                    "appr-request-at",
                    "appr-request-cm",
                    "appr-request-mn",
                    "appr-request-sl",
                    "appr-request-vp",
                    "appr-request-jo",
                    "appr-request-jgl",
                    "approved-post-ab",
                    "approved-post-at",
                    "approved-post-cm",
                    "approved-post-mn",
                    "approved-post-sl",
                    "approved-post-vp",
                    "approved-post-jo",
                    "approved-post-jgl",
                    "rejected-post-at",
                    "rejected-post-ab",
                    "rejected-postcm",
                    "rejected-post-mn",
                    "rejected-post-sl",
                    "rejected-post-vp",
                    "rejected-post-jo",
                    "rejected-post-jgl",
                    "quant-apr-post-ab",
                    "quant-apr-post-sl",
                    "quant-apr-post-jo",
                    "quant-apr-post-jgl",
                    "quant-apr-req-ab",
                    "quant-appr-req-sl",
                    "quant-apr-req-jo",
                    "quant-apr-req-jgl",
                    "quant-reject-ab",
                    "quant-reject-sl",
                    "quant-reject-jo",
                    "quant-reject-jgl",
                    "webinars-req-t-d-jo",
                    "webinar-appr-t-d-jo",
                    "webinar-rejec-t-d-jo",
                    "webinar-opt-req-t-d",
                    "webinar-opt-appr",
                    "webinar-opt-reject",
                    "chinese-ti-content",
                    "any"
                  ],
                  "type": "string"
                },
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "date": {
                "description": "The date the post was published, in the site's timezone.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "date_gmt": {
                "description": "The date the post was published, as GMT.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the post unique to its type.",
                "type": "string",
                "required": false
              },
              "status": {
                "description": "A named status for the post.",
                "type": "string",
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "acf-disabled",
                  "pitch",
                  "appr-request-ab",
                  "appr-request-at",
                  "appr-request-cm",
                  "appr-request-mn",
                  "appr-request-sl",
                  "appr-request-vp",
                  "appr-request-jo",
                  "appr-request-jgl",
                  "approved-post-ab",
                  "approved-post-at",
                  "approved-post-cm",
                  "approved-post-mn",
                  "approved-post-sl",
                  "approved-post-vp",
                  "approved-post-jo",
                  "approved-post-jgl",
                  "rejected-post-at",
                  "rejected-post-ab",
                  "rejected-postcm",
                  "rejected-post-mn",
                  "rejected-post-sl",
                  "rejected-post-vp",
                  "rejected-post-jo",
                  "rejected-post-jgl",
                  "quant-apr-post-ab",
                  "quant-apr-post-sl",
                  "quant-apr-post-jo",
                  "quant-apr-post-jgl",
                  "quant-apr-req-ab",
                  "quant-appr-req-sl",
                  "quant-apr-req-jo",
                  "quant-apr-req-jgl",
                  "quant-reject-ab",
                  "quant-reject-sl",
                  "quant-reject-jo",
                  "quant-reject-jgl",
                  "webinars-req-t-d-jo",
                  "webinar-appr-t-d-jo",
                  "webinar-rejec-t-d-jo",
                  "webinar-opt-req-t-d",
                  "webinar-opt-appr",
                  "webinar-opt-reject",
                  "chinese-ti-content"
                ],
                "required": false
              },
              "password": {
                "description": "A password to protect access to the content and excerpt.",
                "type": "string",
                "required": false
              },
              "title": {
                "description": "The title for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Title for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit"
                    ]
                  }
                },
                "required": false
              },
              "content": {
                "description": "The content for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Content for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit"
                    ]
                  },
                  "block_version": {
                    "description": "Version of the content block format used by the post.",
                    "type": "integer",
                    "context": [
                      "edit"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the content is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": {
                  "wp_pattern_sync_status": {
                    "type": "string",
                    "description": "",
                    "default": "",
                    "enum": [
                      "partial",
                      "unsynced"
                    ]
                  }
                },
                "required": false
              },
              "template": {
                "description": "The theme file to use to display the post.",
                "type": "string",
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/blocks"
            }
          ]
        }
      },
      "/wp/v2/blocks/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the post.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "password": {
                "description": "The password for the post if it is password protected.",
                "type": "string",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST",
              "PUT",
              "PATCH"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the post.",
                "type": "integer",
                "required": false
              },
              "date": {
                "description": "The date the post was published, in the site's timezone.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "date_gmt": {
                "description": "The date the post was published, as GMT.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the post unique to its type.",
                "type": "string",
                "required": false
              },
              "status": {
                "description": "A named status for the post.",
                "type": "string",
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "acf-disabled",
                  "pitch",
                  "appr-request-ab",
                  "appr-request-at",
                  "appr-request-cm",
                  "appr-request-mn",
                  "appr-request-sl",
                  "appr-request-vp",
                  "appr-request-jo",
                  "appr-request-jgl",
                  "approved-post-ab",
                  "approved-post-at",
                  "approved-post-cm",
                  "approved-post-mn",
                  "approved-post-sl",
                  "approved-post-vp",
                  "approved-post-jo",
                  "approved-post-jgl",
                  "rejected-post-at",
                  "rejected-post-ab",
                  "rejected-postcm",
                  "rejected-post-mn",
                  "rejected-post-sl",
                  "rejected-post-vp",
                  "rejected-post-jo",
                  "rejected-post-jgl",
                  "quant-apr-post-ab",
                  "quant-apr-post-sl",
                  "quant-apr-post-jo",
                  "quant-apr-post-jgl",
                  "quant-apr-req-ab",
                  "quant-appr-req-sl",
                  "quant-apr-req-jo",
                  "quant-apr-req-jgl",
                  "quant-reject-ab",
                  "quant-reject-sl",
                  "quant-reject-jo",
                  "quant-reject-jgl",
                  "webinars-req-t-d-jo",
                  "webinar-appr-t-d-jo",
                  "webinar-rejec-t-d-jo",
                  "webinar-opt-req-t-d",
                  "webinar-opt-appr",
                  "webinar-opt-reject",
                  "chinese-ti-content"
                ],
                "required": false
              },
              "password": {
                "description": "A password to protect access to the content and excerpt.",
                "type": "string",
                "required": false
              },
              "title": {
                "description": "The title for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Title for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit"
                    ]
                  }
                },
                "required": false
              },
              "content": {
                "description": "The content for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Content for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit"
                    ]
                  },
                  "block_version": {
                    "description": "Version of the content block format used by the post.",
                    "type": "integer",
                    "context": [
                      "edit"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the content is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": {
                  "wp_pattern_sync_status": {
                    "type": "string",
                    "description": "",
                    "default": "",
                    "enum": [
                      "partial",
                      "unsynced"
                    ]
                  }
                },
                "required": false
              },
              "template": {
                "description": "The theme file to use to display the post.",
                "type": "string",
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the post.",
                "type": "integer",
                "required": false
              },
              "force": {
                "type": "boolean",
                "default": false,
                "description": "Whether to bypass Trash and force deletion.",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/blocks/(?P<parent>[\\d]+)/revisions": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the revision.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "page": {
                "description": "Current page of the collection.",
                "type": "integer",
                "default": 1,
                "minimum": 1,
                "required": false
              },
              "per_page": {
                "description": "Maximum number of items to be returned in result set.",
                "type": "integer",
                "minimum": 1,
                "maximum": 100,
                "required": false
              },
              "search": {
                "description": "Limit results to those matching a string.",
                "type": "string",
                "required": false
              },
              "exclude": {
                "description": "Ensure result set excludes specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "include": {
                "description": "Limit result set to specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "offset": {
                "description": "Offset the result set by a specific number of items.",
                "type": "integer",
                "required": false
              },
              "order": {
                "description": "Order sort attribute ascending or descending.",
                "type": "string",
                "default": "desc",
                "enum": [
                  "asc",
                  "desc"
                ],
                "required": false
              },
              "orderby": {
                "description": "Sort collection by object attribute.",
                "type": "string",
                "default": "date",
                "enum": [
                  "date",
                  "id",
                  "include",
                  "relevance",
                  "slug",
                  "include_slugs",
                  "title"
                ],
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/blocks/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the revision.",
                "type": "integer",
                "required": false
              },
              "id": {
                "description": "Unique identifier for the revision.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the revision.",
                "type": "integer",
                "required": false
              },
              "id": {
                "description": "Unique identifier for the revision.",
                "type": "integer",
                "required": false
              },
              "force": {
                "type": "boolean",
                "default": false,
                "description": "Required to be true, as revisions do not support trashing.",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/blocks/(?P<id>[\\d]+)/autosaves": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the autosave.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the autosave.",
                "type": "integer",
                "required": false
              },
              "date": {
                "description": "The date the post was published, in the site's timezone.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "date_gmt": {
                "description": "The date the post was published, as GMT.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the post unique to its type.",
                "type": "string",
                "required": false
              },
              "status": {
                "description": "A named status for the post.",
                "type": "string",
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "acf-disabled",
                  "pitch",
                  "appr-request-ab",
                  "appr-request-at",
                  "appr-request-cm",
                  "appr-request-mn",
                  "appr-request-sl",
                  "appr-request-vp",
                  "appr-request-jo",
                  "appr-request-jgl",
                  "approved-post-ab",
                  "approved-post-at",
                  "approved-post-cm",
                  "approved-post-mn",
                  "approved-post-sl",
                  "approved-post-vp",
                  "approved-post-jo",
                  "approved-post-jgl",
                  "rejected-post-at",
                  "rejected-post-ab",
                  "rejected-postcm",
                  "rejected-post-mn",
                  "rejected-post-sl",
                  "rejected-post-vp",
                  "rejected-post-jo",
                  "rejected-post-jgl",
                  "quant-apr-post-ab",
                  "quant-apr-post-sl",
                  "quant-apr-post-jo",
                  "quant-apr-post-jgl",
                  "quant-apr-req-ab",
                  "quant-appr-req-sl",
                  "quant-apr-req-jo",
                  "quant-apr-req-jgl",
                  "quant-reject-ab",
                  "quant-reject-sl",
                  "quant-reject-jo",
                  "quant-reject-jgl",
                  "webinars-req-t-d-jo",
                  "webinar-appr-t-d-jo",
                  "webinar-rejec-t-d-jo",
                  "webinar-opt-req-t-d",
                  "webinar-opt-appr",
                  "webinar-opt-reject",
                  "chinese-ti-content"
                ],
                "required": false
              },
              "password": {
                "description": "A password to protect access to the content and excerpt.",
                "type": "string",
                "required": false
              },
              "title": {
                "description": "The title for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Title for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit"
                    ]
                  }
                },
                "required": false
              },
              "content": {
                "description": "The content for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Content for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit"
                    ]
                  },
                  "block_version": {
                    "description": "Version of the content block format used by the post.",
                    "type": "integer",
                    "context": [
                      "edit"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the content is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": {
                  "wp_pattern_sync_status": {
                    "type": "string",
                    "description": "",
                    "default": "",
                    "enum": [
                      "partial",
                      "unsynced"
                    ]
                  }
                },
                "required": false
              },
              "template": {
                "description": "The theme file to use to display the post.",
                "type": "string",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/blocks/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the autosave.",
                "type": "integer",
                "required": false
              },
              "id": {
                "description": "The ID for the autosave.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/templates": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "wp_id": {
                "description": "Limit to the specified post id.",
                "type": "integer",
                "required": false
              },
              "area": {
                "description": "Limit to the specified template part area.",
                "type": "string",
                "required": false
              },
              "post_type": {
                "description": "Post type to get the templates for.",
                "type": "string",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "args": {
              "slug": {
                "description": "Unique slug identifying the template.",
                "type": "string",
                "minLength": 1,
                "pattern": "[a-zA-Z0-9_\\%-]+",
                "required": true
              },
              "theme": {
                "description": "Theme identifier for the template.",
                "type": "string",
                "required": false
              },
              "type": {
                "description": "Type of template.",
                "type": "string",
                "required": false
              },
              "content": {
                "default": "",
                "description": "Content of template.",
                "type": [
                  "object",
                  "string"
                ],
                "properties": {
                  "raw": {
                    "description": "Content for the template, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit"
                    ]
                  },
                  "block_version": {
                    "description": "Version of the content block format used by the template.",
                    "type": "integer",
                    "context": [
                      "edit"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "title": {
                "default": "",
                "description": "Title of template.",
                "type": [
                  "object",
                  "string"
                ],
                "properties": {
                  "raw": {
                    "description": "Title for the template, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ]
                  },
                  "rendered": {
                    "description": "HTML title for the template, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "description": {
                "default": "",
                "description": "Description of template.",
                "type": "string",
                "required": false
              },
              "status": {
                "default": "publish",
                "description": "Status of template.",
                "type": "string",
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "acf-disabled",
                  "pitch",
                  "appr-request-ab",
                  "appr-request-at",
                  "appr-request-cm",
                  "appr-request-mn",
                  "appr-request-sl",
                  "appr-request-vp",
                  "appr-request-jo",
                  "appr-request-jgl",
                  "approved-post-ab",
                  "approved-post-at",
                  "approved-post-cm",
                  "approved-post-mn",
                  "approved-post-sl",
                  "approved-post-vp",
                  "approved-post-jo",
                  "approved-post-jgl",
                  "rejected-post-at",
                  "rejected-post-ab",
                  "rejected-postcm",
                  "rejected-post-mn",
                  "rejected-post-sl",
                  "rejected-post-vp",
                  "rejected-post-jo",
                  "rejected-post-jgl",
                  "quant-apr-post-ab",
                  "quant-apr-post-sl",
                  "quant-apr-post-jo",
                  "quant-apr-post-jgl",
                  "quant-apr-req-ab",
                  "quant-appr-req-sl",
                  "quant-apr-req-jo",
                  "quant-apr-req-jgl",
                  "quant-reject-ab",
                  "quant-reject-sl",
                  "quant-reject-jo",
                  "quant-reject-jgl",
                  "webinars-req-t-d-jo",
                  "webinar-appr-t-d-jo",
                  "webinar-rejec-t-d-jo",
                  "webinar-opt-req-t-d",
                  "webinar-opt-appr",
                  "webinar-opt-reject",
                  "chinese-ti-content"
                ],
                "required": false
              },
              "author": {
                "description": "The ID for the author of the template.",
                "type": "integer",
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/templates"
            }
          ]
        }
      },
      "/wp/v2/templates/lookup": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "slug": {
                "description": "The slug of the template to get the fallback for",
                "type": "string",
                "required": true
              },
              "is_custom": {
                "description": "Indicates if a template is custom or part of the template hierarchy",
                "type": "boolean",
                "required": false
              },
              "template_prefix": {
                "description": "The template prefix for the created template. This is used to extract the main template type, e.g. in `taxonomy-books` extracts the `taxonomy`",
                "type": "string",
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/templates/lookup"
            }
          ]
        }
      },
      "/wp/v2/templates/(?P<id>([^\\/:<>\\*\\?\"\\|]+(?:\\/[^\\/:<>\\*\\?\"\\|]+)?)[\\/\\w%-]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "id": {
                "description": "The id of a template",
                "type": "string",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST",
              "PUT",
              "PATCH"
            ],
            "args": {
              "id": {
                "description": "The id of a template",
                "type": "string",
                "required": false
              },
              "slug": {
                "description": "Unique slug identifying the template.",
                "type": "string",
                "minLength": 1,
                "pattern": "[a-zA-Z0-9_\\%-]+",
                "required": false
              },
              "theme": {
                "description": "Theme identifier for the template.",
                "type": "string",
                "required": false
              },
              "type": {
                "description": "Type of template.",
                "type": "string",
                "required": false
              },
              "content": {
                "description": "Content of template.",
                "type": [
                  "object",
                  "string"
                ],
                "properties": {
                  "raw": {
                    "description": "Content for the template, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit"
                    ]
                  },
                  "block_version": {
                    "description": "Version of the content block format used by the template.",
                    "type": "integer",
                    "context": [
                      "edit"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "title": {
                "description": "Title of template.",
                "type": [
                  "object",
                  "string"
                ],
                "properties": {
                  "raw": {
                    "description": "Title for the template, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ]
                  },
                  "rendered": {
                    "description": "HTML title for the template, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "description": {
                "description": "Description of template.",
                "type": "string",
                "required": false
              },
              "status": {
                "description": "Status of template.",
                "type": "string",
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "acf-disabled",
                  "pitch",
                  "appr-request-ab",
                  "appr-request-at",
                  "appr-request-cm",
                  "appr-request-mn",
                  "appr-request-sl",
                  "appr-request-vp",
                  "appr-request-jo",
                  "appr-request-jgl",
                  "approved-post-ab",
                  "approved-post-at",
                  "approved-post-cm",
                  "approved-post-mn",
                  "approved-post-sl",
                  "approved-post-vp",
                  "approved-post-jo",
                  "approved-post-jgl",
                  "rejected-post-at",
                  "rejected-post-ab",
                  "rejected-postcm",
                  "rejected-post-mn",
                  "rejected-post-sl",
                  "rejected-post-vp",
                  "rejected-post-jo",
                  "rejected-post-jgl",
                  "quant-apr-post-ab",
                  "quant-apr-post-sl",
                  "quant-apr-post-jo",
                  "quant-apr-post-jgl",
                  "quant-apr-req-ab",
                  "quant-appr-req-sl",
                  "quant-apr-req-jo",
                  "quant-apr-req-jgl",
                  "quant-reject-ab",
                  "quant-reject-sl",
                  "quant-reject-jo",
                  "quant-reject-jgl",
                  "webinars-req-t-d-jo",
                  "webinar-appr-t-d-jo",
                  "webinar-rejec-t-d-jo",
                  "webinar-opt-req-t-d",
                  "webinar-opt-appr",
                  "webinar-opt-reject",
                  "chinese-ti-content"
                ],
                "required": false
              },
              "author": {
                "description": "The ID for the author of the template.",
                "type": "integer",
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "args": {
              "id": {
                "description": "The id of a template",
                "type": "string",
                "required": false
              },
              "force": {
                "type": "boolean",
                "default": false,
                "description": "Whether to bypass Trash and force deletion.",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/templates/(?P<parent>[\\d]+)/revisions": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the revision.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "page": {
                "description": "Current page of the collection.",
                "type": "integer",
                "default": 1,
                "minimum": 1,
                "required": false
              },
              "per_page": {
                "description": "Maximum number of items to be returned in result set.",
                "type": "integer",
                "minimum": 1,
                "maximum": 100,
                "required": false
              },
              "search": {
                "description": "Limit results to those matching a string.",
                "type": "string",
                "required": false
              },
              "exclude": {
                "description": "Ensure result set excludes specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "include": {
                "description": "Limit result set to specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "offset": {
                "description": "Offset the result set by a specific number of items.",
                "type": "integer",
                "required": false
              },
              "order": {
                "description": "Order sort attribute ascending or descending.",
                "type": "string",
                "default": "desc",
                "enum": [
                  "asc",
                  "desc"
                ],
                "required": false
              },
              "orderby": {
                "description": "Sort collection by object attribute.",
                "type": "string",
                "default": "date",
                "enum": [
                  "date",
                  "id",
                  "include",
                  "relevance",
                  "slug",
                  "include_slugs",
                  "title"
                ],
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/templates/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the revision.",
                "type": "integer",
                "required": false
              },
              "id": {
                "description": "Unique identifier for the revision.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the revision.",
                "type": "integer",
                "required": false
              },
              "id": {
                "description": "Unique identifier for the revision.",
                "type": "integer",
                "required": false
              },
              "force": {
                "type": "boolean",
                "default": false,
                "description": "Required to be true, as revisions do not support trashing.",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/templates/(?P<id>[\\d]+)/autosaves": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the autosave.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the autosave.",
                "type": "integer",
                "required": false
              },
              "slug": {
                "description": "Unique slug identifying the template.",
                "type": "string",
                "minLength": 1,
                "pattern": "[a-zA-Z0-9_\\%-]+",
                "required": false
              },
              "theme": {
                "description": "Theme identifier for the template.",
                "type": "string",
                "required": false
              },
              "type": {
                "description": "Type of template.",
                "type": "string",
                "required": false
              },
              "content": {
                "description": "Content of template.",
                "type": [
                  "object",
                  "string"
                ],
                "properties": {
                  "raw": {
                    "description": "Content for the template, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit"
                    ]
                  },
                  "block_version": {
                    "description": "Version of the content block format used by the template.",
                    "type": "integer",
                    "context": [
                      "edit"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "title": {
                "description": "Title of template.",
                "type": [
                  "object",
                  "string"
                ],
                "properties": {
                  "raw": {
                    "description": "Title for the template, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ]
                  },
                  "rendered": {
                    "description": "HTML title for the template, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "description": {
                "description": "Description of template.",
                "type": "string",
                "required": false
              },
              "status": {
                "description": "Status of template.",
                "type": "string",
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "acf-disabled",
                  "pitch",
                  "appr-request-ab",
                  "appr-request-at",
                  "appr-request-cm",
                  "appr-request-mn",
                  "appr-request-sl",
                  "appr-request-vp",
                  "appr-request-jo",
                  "appr-request-jgl",
                  "approved-post-ab",
                  "approved-post-at",
                  "approved-post-cm",
                  "approved-post-mn",
                  "approved-post-sl",
                  "approved-post-vp",
                  "approved-post-jo",
                  "approved-post-jgl",
                  "rejected-post-at",
                  "rejected-post-ab",
                  "rejected-postcm",
                  "rejected-post-mn",
                  "rejected-post-sl",
                  "rejected-post-vp",
                  "rejected-post-jo",
                  "rejected-post-jgl",
                  "quant-apr-post-ab",
                  "quant-apr-post-sl",
                  "quant-apr-post-jo",
                  "quant-apr-post-jgl",
                  "quant-apr-req-ab",
                  "quant-appr-req-sl",
                  "quant-apr-req-jo",
                  "quant-apr-req-jgl",
                  "quant-reject-ab",
                  "quant-reject-sl",
                  "quant-reject-jo",
                  "quant-reject-jgl",
                  "webinars-req-t-d-jo",
                  "webinar-appr-t-d-jo",
                  "webinar-rejec-t-d-jo",
                  "webinar-opt-req-t-d",
                  "webinar-opt-appr",
                  "webinar-opt-reject",
                  "chinese-ti-content"
                ],
                "required": false
              },
              "author": {
                "description": "The ID for the author of the template.",
                "type": "integer",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/templates/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the autosave.",
                "type": "integer",
                "required": false
              },
              "id": {
                "description": "The ID for the autosave.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/template-parts": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "wp_id": {
                "description": "Limit to the specified post id.",
                "type": "integer",
                "required": false
              },
              "area": {
                "description": "Limit to the specified template part area.",
                "type": "string",
                "required": false
              },
              "post_type": {
                "description": "Post type to get the templates for.",
                "type": "string",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "args": {
              "slug": {
                "description": "Unique slug identifying the template.",
                "type": "string",
                "minLength": 1,
                "pattern": "[a-zA-Z0-9_\\%-]+",
                "required": true
              },
              "theme": {
                "description": "Theme identifier for the template.",
                "type": "string",
                "required": false
              },
              "type": {
                "description": "Type of template.",
                "type": "string",
                "required": false
              },
              "content": {
                "default": "",
                "description": "Content of template.",
                "type": [
                  "object",
                  "string"
                ],
                "properties": {
                  "raw": {
                    "description": "Content for the template, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit"
                    ]
                  },
                  "block_version": {
                    "description": "Version of the content block format used by the template.",
                    "type": "integer",
                    "context": [
                      "edit"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "title": {
                "default": "",
                "description": "Title of template.",
                "type": [
                  "object",
                  "string"
                ],
                "properties": {
                  "raw": {
                    "description": "Title for the template, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ]
                  },
                  "rendered": {
                    "description": "HTML title for the template, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "description": {
                "default": "",
                "description": "Description of template.",
                "type": "string",
                "required": false
              },
              "status": {
                "default": "publish",
                "description": "Status of template.",
                "type": "string",
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "acf-disabled",
                  "pitch",
                  "appr-request-ab",
                  "appr-request-at",
                  "appr-request-cm",
                  "appr-request-mn",
                  "appr-request-sl",
                  "appr-request-vp",
                  "appr-request-jo",
                  "appr-request-jgl",
                  "approved-post-ab",
                  "approved-post-at",
                  "approved-post-cm",
                  "approved-post-mn",
                  "approved-post-sl",
                  "approved-post-vp",
                  "approved-post-jo",
                  "approved-post-jgl",
                  "rejected-post-at",
                  "rejected-post-ab",
                  "rejected-postcm",
                  "rejected-post-mn",
                  "rejected-post-sl",
                  "rejected-post-vp",
                  "rejected-post-jo",
                  "rejected-post-jgl",
                  "quant-apr-post-ab",
                  "quant-apr-post-sl",
                  "quant-apr-post-jo",
                  "quant-apr-post-jgl",
                  "quant-apr-req-ab",
                  "quant-appr-req-sl",
                  "quant-apr-req-jo",
                  "quant-apr-req-jgl",
                  "quant-reject-ab",
                  "quant-reject-sl",
                  "quant-reject-jo",
                  "quant-reject-jgl",
                  "webinars-req-t-d-jo",
                  "webinar-appr-t-d-jo",
                  "webinar-rejec-t-d-jo",
                  "webinar-opt-req-t-d",
                  "webinar-opt-appr",
                  "webinar-opt-reject",
                  "chinese-ti-content"
                ],
                "required": false
              },
              "author": {
                "description": "The ID for the author of the template.",
                "type": "integer",
                "required": false
              },
              "area": {
                "description": "Where the template part is intended for use (header, footer, etc.)",
                "type": "string",
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/template-parts"
            }
          ]
        }
      },
      "/wp/v2/template-parts/lookup": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "slug": {
                "description": "The slug of the template to get the fallback for",
                "type": "string",
                "required": true
              },
              "is_custom": {
                "description": "Indicates if a template is custom or part of the template hierarchy",
                "type": "boolean",
                "required": false
              },
              "template_prefix": {
                "description": "The template prefix for the created template. This is used to extract the main template type, e.g. in `taxonomy-books` extracts the `taxonomy`",
                "type": "string",
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/template-parts/lookup"
            }
          ]
        }
      },
      "/wp/v2/template-parts/(?P<id>([^\\/:<>\\*\\?\"\\|]+(?:\\/[^\\/:<>\\*\\?\"\\|]+)?)[\\/\\w%-]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "id": {
                "description": "The id of a template",
                "type": "string",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST",
              "PUT",
              "PATCH"
            ],
            "args": {
              "id": {
                "description": "The id of a template",
                "type": "string",
                "required": false
              },
              "slug": {
                "description": "Unique slug identifying the template.",
                "type": "string",
                "minLength": 1,
                "pattern": "[a-zA-Z0-9_\\%-]+",
                "required": false
              },
              "theme": {
                "description": "Theme identifier for the template.",
                "type": "string",
                "required": false
              },
              "type": {
                "description": "Type of template.",
                "type": "string",
                "required": false
              },
              "content": {
                "description": "Content of template.",
                "type": [
                  "object",
                  "string"
                ],
                "properties": {
                  "raw": {
                    "description": "Content for the template, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit"
                    ]
                  },
                  "block_version": {
                    "description": "Version of the content block format used by the template.",
                    "type": "integer",
                    "context": [
                      "edit"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "title": {
                "description": "Title of template.",
                "type": [
                  "object",
                  "string"
                ],
                "properties": {
                  "raw": {
                    "description": "Title for the template, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ]
                  },
                  "rendered": {
                    "description": "HTML title for the template, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "description": {
                "description": "Description of template.",
                "type": "string",
                "required": false
              },
              "status": {
                "description": "Status of template.",
                "type": "string",
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "acf-disabled",
                  "pitch",
                  "appr-request-ab",
                  "appr-request-at",
                  "appr-request-cm",
                  "appr-request-mn",
                  "appr-request-sl",
                  "appr-request-vp",
                  "appr-request-jo",
                  "appr-request-jgl",
                  "approved-post-ab",
                  "approved-post-at",
                  "approved-post-cm",
                  "approved-post-mn",
                  "approved-post-sl",
                  "approved-post-vp",
                  "approved-post-jo",
                  "approved-post-jgl",
                  "rejected-post-at",
                  "rejected-post-ab",
                  "rejected-postcm",
                  "rejected-post-mn",
                  "rejected-post-sl",
                  "rejected-post-vp",
                  "rejected-post-jo",
                  "rejected-post-jgl",
                  "quant-apr-post-ab",
                  "quant-apr-post-sl",
                  "quant-apr-post-jo",
                  "quant-apr-post-jgl",
                  "quant-apr-req-ab",
                  "quant-appr-req-sl",
                  "quant-apr-req-jo",
                  "quant-apr-req-jgl",
                  "quant-reject-ab",
                  "quant-reject-sl",
                  "quant-reject-jo",
                  "quant-reject-jgl",
                  "webinars-req-t-d-jo",
                  "webinar-appr-t-d-jo",
                  "webinar-rejec-t-d-jo",
                  "webinar-opt-req-t-d",
                  "webinar-opt-appr",
                  "webinar-opt-reject",
                  "chinese-ti-content"
                ],
                "required": false
              },
              "author": {
                "description": "The ID for the author of the template.",
                "type": "integer",
                "required": false
              },
              "area": {
                "description": "Where the template part is intended for use (header, footer, etc.)",
                "type": "string",
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "args": {
              "id": {
                "description": "The id of a template",
                "type": "string",
                "required": false
              },
              "force": {
                "type": "boolean",
                "default": false,
                "description": "Whether to bypass Trash and force deletion.",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/template-parts/(?P<parent>[\\d]+)/revisions": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the revision.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "page": {
                "description": "Current page of the collection.",
                "type": "integer",
                "default": 1,
                "minimum": 1,
                "required": false
              },
              "per_page": {
                "description": "Maximum number of items to be returned in result set.",
                "type": "integer",
                "minimum": 1,
                "maximum": 100,
                "required": false
              },
              "search": {
                "description": "Limit results to those matching a string.",
                "type": "string",
                "required": false
              },
              "exclude": {
                "description": "Ensure result set excludes specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "include": {
                "description": "Limit result set to specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "offset": {
                "description": "Offset the result set by a specific number of items.",
                "type": "integer",
                "required": false
              },
              "order": {
                "description": "Order sort attribute ascending or descending.",
                "type": "string",
                "default": "desc",
                "enum": [
                  "asc",
                  "desc"
                ],
                "required": false
              },
              "orderby": {
                "description": "Sort collection by object attribute.",
                "type": "string",
                "default": "date",
                "enum": [
                  "date",
                  "id",
                  "include",
                  "relevance",
                  "slug",
                  "include_slugs",
                  "title"
                ],
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/template-parts/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the revision.",
                "type": "integer",
                "required": false
              },
              "id": {
                "description": "Unique identifier for the revision.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the revision.",
                "type": "integer",
                "required": false
              },
              "id": {
                "description": "Unique identifier for the revision.",
                "type": "integer",
                "required": false
              },
              "force": {
                "type": "boolean",
                "default": false,
                "description": "Required to be true, as revisions do not support trashing.",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/template-parts/(?P<id>[\\d]+)/autosaves": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the autosave.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the autosave.",
                "type": "integer",
                "required": false
              },
              "slug": {
                "description": "Unique slug identifying the template.",
                "type": "string",
                "minLength": 1,
                "pattern": "[a-zA-Z0-9_\\%-]+",
                "required": false
              },
              "theme": {
                "description": "Theme identifier for the template.",
                "type": "string",
                "required": false
              },
              "type": {
                "description": "Type of template.",
                "type": "string",
                "required": false
              },
              "content": {
                "description": "Content of template.",
                "type": [
                  "object",
                  "string"
                ],
                "properties": {
                  "raw": {
                    "description": "Content for the template, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit"
                    ]
                  },
                  "block_version": {
                    "description": "Version of the content block format used by the template.",
                    "type": "integer",
                    "context": [
                      "edit"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "title": {
                "description": "Title of template.",
                "type": [
                  "object",
                  "string"
                ],
                "properties": {
                  "raw": {
                    "description": "Title for the template, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ]
                  },
                  "rendered": {
                    "description": "HTML title for the template, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "description": {
                "description": "Description of template.",
                "type": "string",
                "required": false
              },
              "status": {
                "description": "Status of template.",
                "type": "string",
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "acf-disabled",
                  "pitch",
                  "appr-request-ab",
                  "appr-request-at",
                  "appr-request-cm",
                  "appr-request-mn",
                  "appr-request-sl",
                  "appr-request-vp",
                  "appr-request-jo",
                  "appr-request-jgl",
                  "approved-post-ab",
                  "approved-post-at",
                  "approved-post-cm",
                  "approved-post-mn",
                  "approved-post-sl",
                  "approved-post-vp",
                  "approved-post-jo",
                  "approved-post-jgl",
                  "rejected-post-at",
                  "rejected-post-ab",
                  "rejected-postcm",
                  "rejected-post-mn",
                  "rejected-post-sl",
                  "rejected-post-vp",
                  "rejected-post-jo",
                  "rejected-post-jgl",
                  "quant-apr-post-ab",
                  "quant-apr-post-sl",
                  "quant-apr-post-jo",
                  "quant-apr-post-jgl",
                  "quant-apr-req-ab",
                  "quant-appr-req-sl",
                  "quant-apr-req-jo",
                  "quant-apr-req-jgl",
                  "quant-reject-ab",
                  "quant-reject-sl",
                  "quant-reject-jo",
                  "quant-reject-jgl",
                  "webinars-req-t-d-jo",
                  "webinar-appr-t-d-jo",
                  "webinar-rejec-t-d-jo",
                  "webinar-opt-req-t-d",
                  "webinar-opt-appr",
                  "webinar-opt-reject",
                  "chinese-ti-content"
                ],
                "required": false
              },
              "author": {
                "description": "The ID for the author of the template.",
                "type": "integer",
                "required": false
              },
              "area": {
                "description": "Where the template part is intended for use (header, footer, etc.)",
                "type": "string",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/template-parts/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the autosave.",
                "type": "integer",
                "required": false
              },
              "id": {
                "description": "The ID for the autosave.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/navigation": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "page": {
                "description": "Current page of the collection.",
                "type": "integer",
                "default": 1,
                "minimum": 1,
                "required": false
              },
              "per_page": {
                "description": "Maximum number of items to be returned in result set.",
                "type": "integer",
                "default": 10,
                "minimum": 1,
                "maximum": 100,
                "required": false
              },
              "search": {
                "description": "Limit results to those matching a string.",
                "type": "string",
                "required": false
              },
              "after": {
                "description": "Limit response to posts published after a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "modified_after": {
                "description": "Limit response to posts modified after a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "before": {
                "description": "Limit response to posts published before a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "modified_before": {
                "description": "Limit response to posts modified before a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "exclude": {
                "description": "Ensure result set excludes specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "include": {
                "description": "Limit result set to specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "offset": {
                "description": "Offset the result set by a specific number of items.",
                "type": "integer",
                "required": false
              },
              "order": {
                "description": "Order sort attribute ascending or descending.",
                "type": "string",
                "default": "desc",
                "enum": [
                  "asc",
                  "desc"
                ],
                "required": false
              },
              "orderby": {
                "description": "Sort collection by post attribute.",
                "type": "string",
                "default": "date",
                "enum": [
                  "author",
                  "date",
                  "id",
                  "include",
                  "modified",
                  "parent",
                  "relevance",
                  "slug",
                  "include_slugs",
                  "title"
                ],
                "required": false
              },
              "search_columns": {
                "default": [],
                "description": "Array of column names to be searched.",
                "type": "array",
                "items": {
                  "enum": [
                    "post_title",
                    "post_content",
                    "post_excerpt"
                  ],
                  "type": "string"
                },
                "required": false
              },
              "slug": {
                "description": "Limit result set to posts with one or more specific slugs.",
                "type": "array",
                "items": {
                  "type": "string"
                },
                "required": false
              },
              "status": {
                "default": "publish",
                "description": "Limit result set to posts assigned one or more statuses.",
                "type": "array",
                "items": {
                  "enum": [
                    "publish",
                    "future",
                    "draft",
                    "pending",
                    "private",
                    "trash",
                    "auto-draft",
                    "inherit",
                    "request-pending",
                    "request-confirmed",
                    "request-failed",
                    "request-completed",
                    "acf-disabled",
                    "pitch",
                    "appr-request-ab",
                    "appr-request-at",
                    "appr-request-cm",
                    "appr-request-mn",
                    "appr-request-sl",
                    "appr-request-vp",
                    "appr-request-jo",
                    "appr-request-jgl",
                    "approved-post-ab",
                    "approved-post-at",
                    "approved-post-cm",
                    "approved-post-mn",
                    "approved-post-sl",
                    "approved-post-vp",
                    "approved-post-jo",
                    "approved-post-jgl",
                    "rejected-post-at",
                    "rejected-post-ab",
                    "rejected-postcm",
                    "rejected-post-mn",
                    "rejected-post-sl",
                    "rejected-post-vp",
                    "rejected-post-jo",
                    "rejected-post-jgl",
                    "quant-apr-post-ab",
                    "quant-apr-post-sl",
                    "quant-apr-post-jo",
                    "quant-apr-post-jgl",
                    "quant-apr-req-ab",
                    "quant-appr-req-sl",
                    "quant-apr-req-jo",
                    "quant-apr-req-jgl",
                    "quant-reject-ab",
                    "quant-reject-sl",
                    "quant-reject-jo",
                    "quant-reject-jgl",
                    "webinars-req-t-d-jo",
                    "webinar-appr-t-d-jo",
                    "webinar-rejec-t-d-jo",
                    "webinar-opt-req-t-d",
                    "webinar-opt-appr",
                    "webinar-opt-reject",
                    "chinese-ti-content",
                    "any"
                  ],
                  "type": "string"
                },
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "date": {
                "description": "The date the post was published, in the site's timezone.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "date_gmt": {
                "description": "The date the post was published, as GMT.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the post unique to its type.",
                "type": "string",
                "required": false
              },
              "status": {
                "description": "A named status for the post.",
                "type": "string",
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "acf-disabled",
                  "pitch",
                  "appr-request-ab",
                  "appr-request-at",
                  "appr-request-cm",
                  "appr-request-mn",
                  "appr-request-sl",
                  "appr-request-vp",
                  "appr-request-jo",
                  "appr-request-jgl",
                  "approved-post-ab",
                  "approved-post-at",
                  "approved-post-cm",
                  "approved-post-mn",
                  "approved-post-sl",
                  "approved-post-vp",
                  "approved-post-jo",
                  "approved-post-jgl",
                  "rejected-post-at",
                  "rejected-post-ab",
                  "rejected-postcm",
                  "rejected-post-mn",
                  "rejected-post-sl",
                  "rejected-post-vp",
                  "rejected-post-jo",
                  "rejected-post-jgl",
                  "quant-apr-post-ab",
                  "quant-apr-post-sl",
                  "quant-apr-post-jo",
                  "quant-apr-post-jgl",
                  "quant-apr-req-ab",
                  "quant-appr-req-sl",
                  "quant-apr-req-jo",
                  "quant-apr-req-jgl",
                  "quant-reject-ab",
                  "quant-reject-sl",
                  "quant-reject-jo",
                  "quant-reject-jgl",
                  "webinars-req-t-d-jo",
                  "webinar-appr-t-d-jo",
                  "webinar-rejec-t-d-jo",
                  "webinar-opt-req-t-d",
                  "webinar-opt-appr",
                  "webinar-opt-reject",
                  "chinese-ti-content"
                ],
                "required": false
              },
              "password": {
                "description": "A password to protect access to the content and excerpt.",
                "type": "string",
                "required": false
              },
              "title": {
                "description": "The title for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Title for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit",
                      "embed"
                    ]
                  },
                  "rendered": {
                    "description": "HTML title for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "content": {
                "description": "The content for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Content for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit",
                      "embed"
                    ]
                  },
                  "rendered": {
                    "description": "HTML content for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  },
                  "block_version": {
                    "description": "Version of the content block format used by the post.",
                    "type": "integer",
                    "context": [
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the content is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "template": {
                "description": "The theme file to use to display the post.",
                "type": "string",
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/navigation"
            }
          ]
        }
      },
      "/wp/v2/navigation/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the post.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "password": {
                "description": "The password for the post if it is password protected.",
                "type": "string",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST",
              "PUT",
              "PATCH"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the post.",
                "type": "integer",
                "required": false
              },
              "date": {
                "description": "The date the post was published, in the site's timezone.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "date_gmt": {
                "description": "The date the post was published, as GMT.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the post unique to its type.",
                "type": "string",
                "required": false
              },
              "status": {
                "description": "A named status for the post.",
                "type": "string",
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "acf-disabled",
                  "pitch",
                  "appr-request-ab",
                  "appr-request-at",
                  "appr-request-cm",
                  "appr-request-mn",
                  "appr-request-sl",
                  "appr-request-vp",
                  "appr-request-jo",
                  "appr-request-jgl",
                  "approved-post-ab",
                  "approved-post-at",
                  "approved-post-cm",
                  "approved-post-mn",
                  "approved-post-sl",
                  "approved-post-vp",
                  "approved-post-jo",
                  "approved-post-jgl",
                  "rejected-post-at",
                  "rejected-post-ab",
                  "rejected-postcm",
                  "rejected-post-mn",
                  "rejected-post-sl",
                  "rejected-post-vp",
                  "rejected-post-jo",
                  "rejected-post-jgl",
                  "quant-apr-post-ab",
                  "quant-apr-post-sl",
                  "quant-apr-post-jo",
                  "quant-apr-post-jgl",
                  "quant-apr-req-ab",
                  "quant-appr-req-sl",
                  "quant-apr-req-jo",
                  "quant-apr-req-jgl",
                  "quant-reject-ab",
                  "quant-reject-sl",
                  "quant-reject-jo",
                  "quant-reject-jgl",
                  "webinars-req-t-d-jo",
                  "webinar-appr-t-d-jo",
                  "webinar-rejec-t-d-jo",
                  "webinar-opt-req-t-d",
                  "webinar-opt-appr",
                  "webinar-opt-reject",
                  "chinese-ti-content"
                ],
                "required": false
              },
              "password": {
                "description": "A password to protect access to the content and excerpt.",
                "type": "string",
                "required": false
              },
              "title": {
                "description": "The title for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Title for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit",
                      "embed"
                    ]
                  },
                  "rendered": {
                    "description": "HTML title for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "content": {
                "description": "The content for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Content for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit",
                      "embed"
                    ]
                  },
                  "rendered": {
                    "description": "HTML content for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  },
                  "block_version": {
                    "description": "Version of the content block format used by the post.",
                    "type": "integer",
                    "context": [
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the content is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "template": {
                "description": "The theme file to use to display the post.",
                "type": "string",
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the post.",
                "type": "integer",
                "required": false
              },
              "force": {
                "type": "boolean",
                "default": false,
                "description": "Whether to bypass Trash and force deletion.",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/navigation/(?P<parent>[\\d]+)/revisions": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the revision.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "page": {
                "description": "Current page of the collection.",
                "type": "integer",
                "default": 1,
                "minimum": 1,
                "required": false
              },
              "per_page": {
                "description": "Maximum number of items to be returned in result set.",
                "type": "integer",
                "minimum": 1,
                "maximum": 100,
                "required": false
              },
              "search": {
                "description": "Limit results to those matching a string.",
                "type": "string",
                "required": false
              },
              "exclude": {
                "description": "Ensure result set excludes specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "include": {
                "description": "Limit result set to specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "offset": {
                "description": "Offset the result set by a specific number of items.",
                "type": "integer",
                "required": false
              },
              "order": {
                "description": "Order sort attribute ascending or descending.",
                "type": "string",
                "default": "desc",
                "enum": [
                  "asc",
                  "desc"
                ],
                "required": false
              },
              "orderby": {
                "description": "Sort collection by object attribute.",
                "type": "string",
                "default": "date",
                "enum": [
                  "date",
                  "id",
                  "include",
                  "relevance",
                  "slug",
                  "include_slugs",
                  "title"
                ],
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/navigation/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the revision.",
                "type": "integer",
                "required": false
              },
              "id": {
                "description": "Unique identifier for the revision.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the revision.",
                "type": "integer",
                "required": false
              },
              "id": {
                "description": "Unique identifier for the revision.",
                "type": "integer",
                "required": false
              },
              "force": {
                "type": "boolean",
                "default": false,
                "description": "Required to be true, as revisions do not support trashing.",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/navigation/(?P<id>[\\d]+)/autosaves": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the autosave.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the autosave.",
                "type": "integer",
                "required": false
              },
              "date": {
                "description": "The date the post was published, in the site's timezone.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "date_gmt": {
                "description": "The date the post was published, as GMT.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the post unique to its type.",
                "type": "string",
                "required": false
              },
              "status": {
                "description": "A named status for the post.",
                "type": "string",
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "acf-disabled",
                  "pitch",
                  "appr-request-ab",
                  "appr-request-at",
                  "appr-request-cm",
                  "appr-request-mn",
                  "appr-request-sl",
                  "appr-request-vp",
                  "appr-request-jo",
                  "appr-request-jgl",
                  "approved-post-ab",
                  "approved-post-at",
                  "approved-post-cm",
                  "approved-post-mn",
                  "approved-post-sl",
                  "approved-post-vp",
                  "approved-post-jo",
                  "approved-post-jgl",
                  "rejected-post-at",
                  "rejected-post-ab",
                  "rejected-postcm",
                  "rejected-post-mn",
                  "rejected-post-sl",
                  "rejected-post-vp",
                  "rejected-post-jo",
                  "rejected-post-jgl",
                  "quant-apr-post-ab",
                  "quant-apr-post-sl",
                  "quant-apr-post-jo",
                  "quant-apr-post-jgl",
                  "quant-apr-req-ab",
                  "quant-appr-req-sl",
                  "quant-apr-req-jo",
                  "quant-apr-req-jgl",
                  "quant-reject-ab",
                  "quant-reject-sl",
                  "quant-reject-jo",
                  "quant-reject-jgl",
                  "webinars-req-t-d-jo",
                  "webinar-appr-t-d-jo",
                  "webinar-rejec-t-d-jo",
                  "webinar-opt-req-t-d",
                  "webinar-opt-appr",
                  "webinar-opt-reject",
                  "chinese-ti-content"
                ],
                "required": false
              },
              "password": {
                "description": "A password to protect access to the content and excerpt.",
                "type": "string",
                "required": false
              },
              "title": {
                "description": "The title for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Title for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit",
                      "embed"
                    ]
                  },
                  "rendered": {
                    "description": "HTML title for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "content": {
                "description": "The content for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Content for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit",
                      "embed"
                    ]
                  },
                  "rendered": {
                    "description": "HTML content for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  },
                  "block_version": {
                    "description": "Version of the content block format used by the post.",
                    "type": "integer",
                    "context": [
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the content is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "template": {
                "description": "The theme file to use to display the post.",
                "type": "string",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/navigation/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the autosave.",
                "type": "integer",
                "required": false
              },
              "id": {
                "description": "The ID for the autosave.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/glossary-terms": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "page": {
                "description": "Current page of the collection.",
                "type": "integer",
                "default": 1,
                "minimum": 1,
                "required": false
              },
              "per_page": {
                "description": "Maximum number of items to be returned in result set.",
                "type": "integer",
                "default": 10,
                "minimum": 1,
                "maximum": 100,
                "required": false
              },
              "search": {
                "description": "Limit results to those matching a string.",
                "type": "string",
                "required": false
              },
              "after": {
                "description": "Limit response to posts published after a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "modified_after": {
                "description": "Limit response to posts modified after a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "before": {
                "description": "Limit response to posts published before a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "modified_before": {
                "description": "Limit response to posts modified before a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "exclude": {
                "description": "Ensure result set excludes specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "include": {
                "description": "Limit result set to specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "offset": {
                "description": "Offset the result set by a specific number of items.",
                "type": "integer",
                "required": false
              },
              "order": {
                "description": "Order sort attribute ascending or descending.",
                "type": "string",
                "default": "desc",
                "enum": [
                  "asc",
                  "desc"
                ],
                "required": false
              },
              "orderby": {
                "description": "Sort collection by post attribute.",
                "type": "string",
                "default": "date",
                "enum": [
                  "author",
                  "date",
                  "id",
                  "include",
                  "modified",
                  "parent",
                  "relevance",
                  "slug",
                  "include_slugs",
                  "title"
                ],
                "required": false
              },
              "parent": {
                "description": "Limit result set to items with particular parent IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "parent_exclude": {
                "description": "Limit result set to all items except those of a particular parent ID.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "search_columns": {
                "default": [],
                "description": "Array of column names to be searched.",
                "type": "array",
                "items": {
                  "enum": [
                    "post_title",
                    "post_content",
                    "post_excerpt"
                  ],
                  "type": "string"
                },
                "required": false
              },
              "slug": {
                "description": "Limit result set to posts with one or more specific slugs.",
                "type": "array",
                "items": {
                  "type": "string"
                },
                "required": false
              },
              "status": {
                "default": "publish",
                "description": "Limit result set to posts assigned one or more statuses.",
                "type": "array",
                "items": {
                  "enum": [
                    "publish",
                    "future",
                    "draft",
                    "pending",
                    "private",
                    "trash",
                    "auto-draft",
                    "inherit",
                    "request-pending",
                    "request-confirmed",
                    "request-failed",
                    "request-completed",
                    "acf-disabled",
                    "pitch",
                    "appr-request-ab",
                    "appr-request-at",
                    "appr-request-cm",
                    "appr-request-mn",
                    "appr-request-sl",
                    "appr-request-vp",
                    "appr-request-jo",
                    "appr-request-jgl",
                    "approved-post-ab",
                    "approved-post-at",
                    "approved-post-cm",
                    "approved-post-mn",
                    "approved-post-sl",
                    "approved-post-vp",
                    "approved-post-jo",
                    "approved-post-jgl",
                    "rejected-post-at",
                    "rejected-post-ab",
                    "rejected-postcm",
                    "rejected-post-mn",
                    "rejected-post-sl",
                    "rejected-post-vp",
                    "rejected-post-jo",
                    "rejected-post-jgl",
                    "quant-apr-post-ab",
                    "quant-apr-post-sl",
                    "quant-apr-post-jo",
                    "quant-apr-post-jgl",
                    "quant-apr-req-ab",
                    "quant-appr-req-sl",
                    "quant-apr-req-jo",
                    "quant-apr-req-jgl",
                    "quant-reject-ab",
                    "quant-reject-sl",
                    "quant-reject-jo",
                    "quant-reject-jgl",
                    "webinars-req-t-d-jo",
                    "webinar-appr-t-d-jo",
                    "webinar-rejec-t-d-jo",
                    "webinar-opt-req-t-d",
                    "webinar-opt-appr",
                    "webinar-opt-reject",
                    "chinese-ti-content",
                    "any"
                  ],
                  "type": "string"
                },
                "required": false
              },
              "tax_relation": {
                "description": "Limit result set based on relationship between multiple taxonomies.",
                "type": "string",
                "enum": [
                  "AND",
                  "OR"
                ],
                "required": false
              },
              "traders-glossary": {
                "description": "Limit result set to items with specific terms assigned in the traders-glossary taxonomy.",
                "type": [
                  "object",
                  "array"
                ],
                "oneOf": [
                  {
                    "title": "Term ID List",
                    "description": "Match terms with the listed IDs.",
                    "type": "array",
                    "items": {
                      "type": "integer"
                    }
                  },
                  {
                    "title": "Term ID Taxonomy Query",
                    "description": "Perform an advanced term query.",
                    "type": "object",
                    "properties": {
                      "terms": {
                        "description": "Term IDs.",
                        "type": "array",
                        "items": {
                          "type": "integer"
                        },
                        "default": []
                      },
                      "include_children": {
                        "description": "Whether to include child terms in the terms limiting the result set.",
                        "type": "boolean",
                        "default": false
                      },
                      "operator": {
                        "description": "Whether items must be assigned all or any of the specified terms.",
                        "type": "string",
                        "enum": [
                          "AND",
                          "OR"
                        ],
                        "default": "OR"
                      }
                    },
                    "additionalProperties": false
                  }
                ],
                "required": false
              },
              "traders-glossary_exclude": {
                "description": "Limit result set to items except those with specific terms assigned in the traders-glossary taxonomy.",
                "type": [
                  "object",
                  "array"
                ],
                "oneOf": [
                  {
                    "title": "Term ID List",
                    "description": "Match terms with the listed IDs.",
                    "type": "array",
                    "items": {
                      "type": "integer"
                    }
                  },
                  {
                    "title": "Term ID Taxonomy Query",
                    "description": "Perform an advanced term query.",
                    "type": "object",
                    "properties": {
                      "terms": {
                        "description": "Term IDs.",
                        "type": "array",
                        "items": {
                          "type": "integer"
                        },
                        "default": []
                      },
                      "include_children": {
                        "description": "Whether to include child terms in the terms limiting the result set.",
                        "type": "boolean",
                        "default": false
                      }
                    },
                    "additionalProperties": false
                  }
                ],
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "date": {
                "description": "The date the post was published, in the site's timezone.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "date_gmt": {
                "description": "The date the post was published, as GMT.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the post unique to its type.",
                "type": "string",
                "required": false
              },
              "status": {
                "description": "A named status for the post.",
                "type": "string",
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "acf-disabled",
                  "pitch",
                  "appr-request-ab",
                  "appr-request-at",
                  "appr-request-cm",
                  "appr-request-mn",
                  "appr-request-sl",
                  "appr-request-vp",
                  "appr-request-jo",
                  "appr-request-jgl",
                  "approved-post-ab",
                  "approved-post-at",
                  "approved-post-cm",
                  "approved-post-mn",
                  "approved-post-sl",
                  "approved-post-vp",
                  "approved-post-jo",
                  "approved-post-jgl",
                  "rejected-post-at",
                  "rejected-post-ab",
                  "rejected-postcm",
                  "rejected-post-mn",
                  "rejected-post-sl",
                  "rejected-post-vp",
                  "rejected-post-jo",
                  "rejected-post-jgl",
                  "quant-apr-post-ab",
                  "quant-apr-post-sl",
                  "quant-apr-post-jo",
                  "quant-apr-post-jgl",
                  "quant-apr-req-ab",
                  "quant-appr-req-sl",
                  "quant-apr-req-jo",
                  "quant-apr-req-jgl",
                  "quant-reject-ab",
                  "quant-reject-sl",
                  "quant-reject-jo",
                  "quant-reject-jgl",
                  "webinars-req-t-d-jo",
                  "webinar-appr-t-d-jo",
                  "webinar-rejec-t-d-jo",
                  "webinar-opt-req-t-d",
                  "webinar-opt-appr",
                  "webinar-opt-reject",
                  "chinese-ti-content"
                ],
                "required": false
              },
              "password": {
                "description": "A password to protect access to the content and excerpt.",
                "type": "string",
                "required": false
              },
              "parent": {
                "description": "The ID for the parent of the post.",
                "type": "integer",
                "required": false
              },
              "title": {
                "description": "The title for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Title for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML title for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "content": {
                "description": "The content for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Content for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML content for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit"
                    ],
                    "readonly": true
                  },
                  "block_version": {
                    "description": "Version of the content block format used by the post.",
                    "type": "integer",
                    "context": [
                      "edit"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the content is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "excerpt": {
                "description": "The excerpt for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Excerpt for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML excerpt for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the excerpt is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "featured_media": {
                "description": "The ID of the featured media for the post.",
                "type": "integer",
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": [],
                "required": false
              },
              "template": {
                "description": "The theme file to use to display the post.",
                "type": "string",
                "required": false
              },
              "traders-glossary": {
                "description": "The terms assigned to the post in the traders-glossary taxonomy.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/glossary-terms"
            }
          ]
        }
      },
      "/wp/v2/glossary-terms/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the post.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "password": {
                "description": "The password for the post if it is password protected.",
                "type": "string",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST",
              "PUT",
              "PATCH"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the post.",
                "type": "integer",
                "required": false
              },
              "date": {
                "description": "The date the post was published, in the site's timezone.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "date_gmt": {
                "description": "The date the post was published, as GMT.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the post unique to its type.",
                "type": "string",
                "required": false
              },
              "status": {
                "description": "A named status for the post.",
                "type": "string",
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "acf-disabled",
                  "pitch",
                  "appr-request-ab",
                  "appr-request-at",
                  "appr-request-cm",
                  "appr-request-mn",
                  "appr-request-sl",
                  "appr-request-vp",
                  "appr-request-jo",
                  "appr-request-jgl",
                  "approved-post-ab",
                  "approved-post-at",
                  "approved-post-cm",
                  "approved-post-mn",
                  "approved-post-sl",
                  "approved-post-vp",
                  "approved-post-jo",
                  "approved-post-jgl",
                  "rejected-post-at",
                  "rejected-post-ab",
                  "rejected-postcm",
                  "rejected-post-mn",
                  "rejected-post-sl",
                  "rejected-post-vp",
                  "rejected-post-jo",
                  "rejected-post-jgl",
                  "quant-apr-post-ab",
                  "quant-apr-post-sl",
                  "quant-apr-post-jo",
                  "quant-apr-post-jgl",
                  "quant-apr-req-ab",
                  "quant-appr-req-sl",
                  "quant-apr-req-jo",
                  "quant-apr-req-jgl",
                  "quant-reject-ab",
                  "quant-reject-sl",
                  "quant-reject-jo",
                  "quant-reject-jgl",
                  "webinars-req-t-d-jo",
                  "webinar-appr-t-d-jo",
                  "webinar-rejec-t-d-jo",
                  "webinar-opt-req-t-d",
                  "webinar-opt-appr",
                  "webinar-opt-reject",
                  "chinese-ti-content"
                ],
                "required": false
              },
              "password": {
                "description": "A password to protect access to the content and excerpt.",
                "type": "string",
                "required": false
              },
              "parent": {
                "description": "The ID for the parent of the post.",
                "type": "integer",
                "required": false
              },
              "title": {
                "description": "The title for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Title for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML title for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "content": {
                "description": "The content for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Content for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML content for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit"
                    ],
                    "readonly": true
                  },
                  "block_version": {
                    "description": "Version of the content block format used by the post.",
                    "type": "integer",
                    "context": [
                      "edit"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the content is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "excerpt": {
                "description": "The excerpt for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Excerpt for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML excerpt for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the excerpt is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "featured_media": {
                "description": "The ID of the featured media for the post.",
                "type": "integer",
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": [],
                "required": false
              },
              "template": {
                "description": "The theme file to use to display the post.",
                "type": "string",
                "required": false
              },
              "traders-glossary": {
                "description": "The terms assigned to the post in the traders-glossary taxonomy.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the post.",
                "type": "integer",
                "required": false
              },
              "force": {
                "type": "boolean",
                "default": false,
                "description": "Whether to bypass Trash and force deletion.",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/glossary-terms/(?P<parent>[\\d]+)/revisions": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the revision.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "page": {
                "description": "Current page of the collection.",
                "type": "integer",
                "default": 1,
                "minimum": 1,
                "required": false
              },
              "per_page": {
                "description": "Maximum number of items to be returned in result set.",
                "type": "integer",
                "minimum": 1,
                "maximum": 100,
                "required": false
              },
              "search": {
                "description": "Limit results to those matching a string.",
                "type": "string",
                "required": false
              },
              "exclude": {
                "description": "Ensure result set excludes specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "include": {
                "description": "Limit result set to specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "offset": {
                "description": "Offset the result set by a specific number of items.",
                "type": "integer",
                "required": false
              },
              "order": {
                "description": "Order sort attribute ascending or descending.",
                "type": "string",
                "default": "desc",
                "enum": [
                  "asc",
                  "desc"
                ],
                "required": false
              },
              "orderby": {
                "description": "Sort collection by object attribute.",
                "type": "string",
                "default": "date",
                "enum": [
                  "date",
                  "id",
                  "include",
                  "relevance",
                  "slug",
                  "include_slugs",
                  "title"
                ],
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/glossary-terms/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the revision.",
                "type": "integer",
                "required": false
              },
              "id": {
                "description": "Unique identifier for the revision.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the revision.",
                "type": "integer",
                "required": false
              },
              "id": {
                "description": "Unique identifier for the revision.",
                "type": "integer",
                "required": false
              },
              "force": {
                "type": "boolean",
                "default": false,
                "description": "Required to be true, as revisions do not support trashing.",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/glossary-terms/(?P<id>[\\d]+)/autosaves": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the autosave.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the post.",
                "type": "integer",
                "required": false
              },
              "date": {
                "description": "The date the post was published, in the site's timezone.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "date_gmt": {
                "description": "The date the post was published, as GMT.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the post unique to its type.",
                "type": "string",
                "required": false
              },
              "status": {
                "description": "A named status for the post.",
                "type": "string",
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "acf-disabled",
                  "pitch",
                  "appr-request-ab",
                  "appr-request-at",
                  "appr-request-cm",
                  "appr-request-mn",
                  "appr-request-sl",
                  "appr-request-vp",
                  "appr-request-jo",
                  "appr-request-jgl",
                  "approved-post-ab",
                  "approved-post-at",
                  "approved-post-cm",
                  "approved-post-mn",
                  "approved-post-sl",
                  "approved-post-vp",
                  "approved-post-jo",
                  "approved-post-jgl",
                  "rejected-post-at",
                  "rejected-post-ab",
                  "rejected-postcm",
                  "rejected-post-mn",
                  "rejected-post-sl",
                  "rejected-post-vp",
                  "rejected-post-jo",
                  "rejected-post-jgl",
                  "quant-apr-post-ab",
                  "quant-apr-post-sl",
                  "quant-apr-post-jo",
                  "quant-apr-post-jgl",
                  "quant-apr-req-ab",
                  "quant-appr-req-sl",
                  "quant-apr-req-jo",
                  "quant-apr-req-jgl",
                  "quant-reject-ab",
                  "quant-reject-sl",
                  "quant-reject-jo",
                  "quant-reject-jgl",
                  "webinars-req-t-d-jo",
                  "webinar-appr-t-d-jo",
                  "webinar-rejec-t-d-jo",
                  "webinar-opt-req-t-d",
                  "webinar-opt-appr",
                  "webinar-opt-reject",
                  "chinese-ti-content"
                ],
                "required": false
              },
              "password": {
                "description": "A password to protect access to the content and excerpt.",
                "type": "string",
                "required": false
              },
              "title": {
                "description": "The title for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Title for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML title for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "content": {
                "description": "The content for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Content for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML content for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit"
                    ],
                    "readonly": true
                  },
                  "block_version": {
                    "description": "Version of the content block format used by the post.",
                    "type": "integer",
                    "context": [
                      "edit"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the content is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "excerpt": {
                "description": "The excerpt for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Excerpt for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML excerpt for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the excerpt is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "featured_media": {
                "description": "The ID of the featured media for the post.",
                "type": "integer",
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": [],
                "required": false
              },
              "template": {
                "description": "The theme file to use to display the post.",
                "type": "string",
                "required": false
              },
              "traders-glossary": {
                "description": "The terms assigned to the post in the traders-glossary taxonomy.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/glossary-terms/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the autosave.",
                "type": "integer",
                "required": false
              },
              "id": {
                "description": "The ID for the autosave.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/trading-course": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "page": {
                "description": "Current page of the collection.",
                "type": "integer",
                "default": 1,
                "minimum": 1,
                "required": false
              },
              "per_page": {
                "description": "Maximum number of items to be returned in result set.",
                "type": "integer",
                "default": 10,
                "minimum": 1,
                "maximum": 100,
                "required": false
              },
              "search": {
                "description": "Limit results to those matching a string.",
                "type": "string",
                "required": false
              },
              "after": {
                "description": "Limit response to posts published after a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "modified_after": {
                "description": "Limit response to posts modified after a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "before": {
                "description": "Limit response to posts published before a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "modified_before": {
                "description": "Limit response to posts modified before a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "exclude": {
                "description": "Ensure result set excludes specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "include": {
                "description": "Limit result set to specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "offset": {
                "description": "Offset the result set by a specific number of items.",
                "type": "integer",
                "required": false
              },
              "order": {
                "description": "Order sort attribute ascending or descending.",
                "type": "string",
                "default": "desc",
                "enum": [
                  "asc",
                  "desc"
                ],
                "required": false
              },
              "orderby": {
                "description": "Sort collection by post attribute.",
                "type": "string",
                "default": "date",
                "enum": [
                  "author",
                  "date",
                  "id",
                  "include",
                  "modified",
                  "parent",
                  "relevance",
                  "slug",
                  "include_slugs",
                  "title"
                ],
                "required": false
              },
              "parent": {
                "description": "Limit result set to items with particular parent IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "parent_exclude": {
                "description": "Limit result set to all items except those of a particular parent ID.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "search_columns": {
                "default": [],
                "description": "Array of column names to be searched.",
                "type": "array",
                "items": {
                  "enum": [
                    "post_title",
                    "post_content",
                    "post_excerpt"
                  ],
                  "type": "string"
                },
                "required": false
              },
              "slug": {
                "description": "Limit result set to posts with one or more specific slugs.",
                "type": "array",
                "items": {
                  "type": "string"
                },
                "required": false
              },
              "status": {
                "default": "publish",
                "description": "Limit result set to posts assigned one or more statuses.",
                "type": "array",
                "items": {
                  "enum": [
                    "publish",
                    "future",
                    "draft",
                    "pending",
                    "private",
                    "trash",
                    "auto-draft",
                    "inherit",
                    "request-pending",
                    "request-confirmed",
                    "request-failed",
                    "request-completed",
                    "acf-disabled",
                    "pitch",
                    "appr-request-ab",
                    "appr-request-at",
                    "appr-request-cm",
                    "appr-request-mn",
                    "appr-request-sl",
                    "appr-request-vp",
                    "appr-request-jo",
                    "appr-request-jgl",
                    "approved-post-ab",
                    "approved-post-at",
                    "approved-post-cm",
                    "approved-post-mn",
                    "approved-post-sl",
                    "approved-post-vp",
                    "approved-post-jo",
                    "approved-post-jgl",
                    "rejected-post-at",
                    "rejected-post-ab",
                    "rejected-postcm",
                    "rejected-post-mn",
                    "rejected-post-sl",
                    "rejected-post-vp",
                    "rejected-post-jo",
                    "rejected-post-jgl",
                    "quant-apr-post-ab",
                    "quant-apr-post-sl",
                    "quant-apr-post-jo",
                    "quant-apr-post-jgl",
                    "quant-apr-req-ab",
                    "quant-appr-req-sl",
                    "quant-apr-req-jo",
                    "quant-apr-req-jgl",
                    "quant-reject-ab",
                    "quant-reject-sl",
                    "quant-reject-jo",
                    "quant-reject-jgl",
                    "webinars-req-t-d-jo",
                    "webinar-appr-t-d-jo",
                    "webinar-rejec-t-d-jo",
                    "webinar-opt-req-t-d",
                    "webinar-opt-appr",
                    "webinar-opt-reject",
                    "chinese-ti-content",
                    "any"
                  ],
                  "type": "string"
                },
                "required": false
              },
              "tax_relation": {
                "description": "Limit result set based on relationship between multiple taxonomies.",
                "type": "string",
                "enum": [
                  "AND",
                  "OR"
                ],
                "required": false
              },
              "contributors-categories": {
                "description": "Limit result set to items with specific terms assigned in the contributors-categories taxonomy.",
                "type": [
                  "object",
                  "array"
                ],
                "oneOf": [
                  {
                    "title": "Term ID List",
                    "description": "Match terms with the listed IDs.",
                    "type": "array",
                    "items": {
                      "type": "integer"
                    }
                  },
                  {
                    "title": "Term ID Taxonomy Query",
                    "description": "Perform an advanced term query.",
                    "type": "object",
                    "properties": {
                      "terms": {
                        "description": "Term IDs.",
                        "type": "array",
                        "items": {
                          "type": "integer"
                        },
                        "default": []
                      },
                      "include_children": {
                        "description": "Whether to include child terms in the terms limiting the result set.",
                        "type": "boolean",
                        "default": false
                      },
                      "operator": {
                        "description": "Whether items must be assigned all or any of the specified terms.",
                        "type": "string",
                        "enum": [
                          "AND",
                          "OR"
                        ],
                        "default": "OR"
                      }
                    },
                    "additionalProperties": false
                  }
                ],
                "required": false
              },
              "contributors-categories_exclude": {
                "description": "Limit result set to items except those with specific terms assigned in the contributors-categories taxonomy.",
                "type": [
                  "object",
                  "array"
                ],
                "oneOf": [
                  {
                    "title": "Term ID List",
                    "description": "Match terms with the listed IDs.",
                    "type": "array",
                    "items": {
                      "type": "integer"
                    }
                  },
                  {
                    "title": "Term ID Taxonomy Query",
                    "description": "Perform an advanced term query.",
                    "type": "object",
                    "properties": {
                      "terms": {
                        "description": "Term IDs.",
                        "type": "array",
                        "items": {
                          "type": "integer"
                        },
                        "default": []
                      },
                      "include_children": {
                        "description": "Whether to include child terms in the terms limiting the result set.",
                        "type": "boolean",
                        "default": false
                      }
                    },
                    "additionalProperties": false
                  }
                ],
                "required": false
              },
              "traders-academy": {
                "description": "Limit result set to items with specific terms assigned in the traders-academy taxonomy.",
                "type": [
                  "object",
                  "array"
                ],
                "oneOf": [
                  {
                    "title": "Term ID List",
                    "description": "Match terms with the listed IDs.",
                    "type": "array",
                    "items": {
                      "type": "integer"
                    }
                  },
                  {
                    "title": "Term ID Taxonomy Query",
                    "description": "Perform an advanced term query.",
                    "type": "object",
                    "properties": {
                      "terms": {
                        "description": "Term IDs.",
                        "type": "array",
                        "items": {
                          "type": "integer"
                        },
                        "default": []
                      },
                      "include_children": {
                        "description": "Whether to include child terms in the terms limiting the result set.",
                        "type": "boolean",
                        "default": false
                      },
                      "operator": {
                        "description": "Whether items must be assigned all or any of the specified terms.",
                        "type": "string",
                        "enum": [
                          "AND",
                          "OR"
                        ],
                        "default": "OR"
                      }
                    },
                    "additionalProperties": false
                  }
                ],
                "required": false
              },
              "traders-academy_exclude": {
                "description": "Limit result set to items except those with specific terms assigned in the traders-academy taxonomy.",
                "type": [
                  "object",
                  "array"
                ],
                "oneOf": [
                  {
                    "title": "Term ID List",
                    "description": "Match terms with the listed IDs.",
                    "type": "array",
                    "items": {
                      "type": "integer"
                    }
                  },
                  {
                    "title": "Term ID Taxonomy Query",
                    "description": "Perform an advanced term query.",
                    "type": "object",
                    "properties": {
                      "terms": {
                        "description": "Term IDs.",
                        "type": "array",
                        "items": {
                          "type": "integer"
                        },
                        "default": []
                      },
                      "include_children": {
                        "description": "Whether to include child terms in the terms limiting the result set.",
                        "type": "boolean",
                        "default": false
                      }
                    },
                    "additionalProperties": false
                  }
                ],
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "date": {
                "description": "The date the post was published, in the site's timezone.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "date_gmt": {
                "description": "The date the post was published, as GMT.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the post unique to its type.",
                "type": "string",
                "required": false
              },
              "status": {
                "description": "A named status for the post.",
                "type": "string",
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "acf-disabled",
                  "pitch",
                  "appr-request-ab",
                  "appr-request-at",
                  "appr-request-cm",
                  "appr-request-mn",
                  "appr-request-sl",
                  "appr-request-vp",
                  "appr-request-jo",
                  "appr-request-jgl",
                  "approved-post-ab",
                  "approved-post-at",
                  "approved-post-cm",
                  "approved-post-mn",
                  "approved-post-sl",
                  "approved-post-vp",
                  "approved-post-jo",
                  "approved-post-jgl",
                  "rejected-post-at",
                  "rejected-post-ab",
                  "rejected-postcm",
                  "rejected-post-mn",
                  "rejected-post-sl",
                  "rejected-post-vp",
                  "rejected-post-jo",
                  "rejected-post-jgl",
                  "quant-apr-post-ab",
                  "quant-apr-post-sl",
                  "quant-apr-post-jo",
                  "quant-apr-post-jgl",
                  "quant-apr-req-ab",
                  "quant-appr-req-sl",
                  "quant-apr-req-jo",
                  "quant-apr-req-jgl",
                  "quant-reject-ab",
                  "quant-reject-sl",
                  "quant-reject-jo",
                  "quant-reject-jgl",
                  "webinars-req-t-d-jo",
                  "webinar-appr-t-d-jo",
                  "webinar-rejec-t-d-jo",
                  "webinar-opt-req-t-d",
                  "webinar-opt-appr",
                  "webinar-opt-reject",
                  "chinese-ti-content"
                ],
                "required": false
              },
              "password": {
                "description": "A password to protect access to the content and excerpt.",
                "type": "string",
                "required": false
              },
              "parent": {
                "description": "The ID for the parent of the post.",
                "type": "integer",
                "required": false
              },
              "title": {
                "description": "The title for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Title for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML title for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "content": {
                "description": "The content for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Content for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML content for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit"
                    ],
                    "readonly": true
                  },
                  "block_version": {
                    "description": "Version of the content block format used by the post.",
                    "type": "integer",
                    "context": [
                      "edit"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the content is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "excerpt": {
                "description": "The excerpt for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Excerpt for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML excerpt for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the excerpt is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "featured_media": {
                "description": "The ID of the featured media for the post.",
                "type": "integer",
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": [],
                "required": false
              },
              "template": {
                "description": "The theme file to use to display the post.",
                "type": "string",
                "required": false
              },
              "contributors-categories": {
                "description": "The terms assigned to the post in the contributors-categories taxonomy.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "required": false
              },
              "traders-academy": {
                "description": "The terms assigned to the post in the traders-academy taxonomy.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/trading-course"
            }
          ]
        }
      },
      "/wp/v2/trading-course/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the post.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "password": {
                "description": "The password for the post if it is password protected.",
                "type": "string",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST",
              "PUT",
              "PATCH"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the post.",
                "type": "integer",
                "required": false
              },
              "date": {
                "description": "The date the post was published, in the site's timezone.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "date_gmt": {
                "description": "The date the post was published, as GMT.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the post unique to its type.",
                "type": "string",
                "required": false
              },
              "status": {
                "description": "A named status for the post.",
                "type": "string",
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "acf-disabled",
                  "pitch",
                  "appr-request-ab",
                  "appr-request-at",
                  "appr-request-cm",
                  "appr-request-mn",
                  "appr-request-sl",
                  "appr-request-vp",
                  "appr-request-jo",
                  "appr-request-jgl",
                  "approved-post-ab",
                  "approved-post-at",
                  "approved-post-cm",
                  "approved-post-mn",
                  "approved-post-sl",
                  "approved-post-vp",
                  "approved-post-jo",
                  "approved-post-jgl",
                  "rejected-post-at",
                  "rejected-post-ab",
                  "rejected-postcm",
                  "rejected-post-mn",
                  "rejected-post-sl",
                  "rejected-post-vp",
                  "rejected-post-jo",
                  "rejected-post-jgl",
                  "quant-apr-post-ab",
                  "quant-apr-post-sl",
                  "quant-apr-post-jo",
                  "quant-apr-post-jgl",
                  "quant-apr-req-ab",
                  "quant-appr-req-sl",
                  "quant-apr-req-jo",
                  "quant-apr-req-jgl",
                  "quant-reject-ab",
                  "quant-reject-sl",
                  "quant-reject-jo",
                  "quant-reject-jgl",
                  "webinars-req-t-d-jo",
                  "webinar-appr-t-d-jo",
                  "webinar-rejec-t-d-jo",
                  "webinar-opt-req-t-d",
                  "webinar-opt-appr",
                  "webinar-opt-reject",
                  "chinese-ti-content"
                ],
                "required": false
              },
              "password": {
                "description": "A password to protect access to the content and excerpt.",
                "type": "string",
                "required": false
              },
              "parent": {
                "description": "The ID for the parent of the post.",
                "type": "integer",
                "required": false
              },
              "title": {
                "description": "The title for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Title for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML title for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "content": {
                "description": "The content for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Content for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML content for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit"
                    ],
                    "readonly": true
                  },
                  "block_version": {
                    "description": "Version of the content block format used by the post.",
                    "type": "integer",
                    "context": [
                      "edit"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the content is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "excerpt": {
                "description": "The excerpt for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Excerpt for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML excerpt for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the excerpt is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "featured_media": {
                "description": "The ID of the featured media for the post.",
                "type": "integer",
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": [],
                "required": false
              },
              "template": {
                "description": "The theme file to use to display the post.",
                "type": "string",
                "required": false
              },
              "contributors-categories": {
                "description": "The terms assigned to the post in the contributors-categories taxonomy.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "required": false
              },
              "traders-academy": {
                "description": "The terms assigned to the post in the traders-academy taxonomy.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the post.",
                "type": "integer",
                "required": false
              },
              "force": {
                "type": "boolean",
                "default": false,
                "description": "Whether to bypass Trash and force deletion.",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/trading-course/(?P<parent>[\\d]+)/revisions": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the revision.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "page": {
                "description": "Current page of the collection.",
                "type": "integer",
                "default": 1,
                "minimum": 1,
                "required": false
              },
              "per_page": {
                "description": "Maximum number of items to be returned in result set.",
                "type": "integer",
                "minimum": 1,
                "maximum": 100,
                "required": false
              },
              "search": {
                "description": "Limit results to those matching a string.",
                "type": "string",
                "required": false
              },
              "exclude": {
                "description": "Ensure result set excludes specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "include": {
                "description": "Limit result set to specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "offset": {
                "description": "Offset the result set by a specific number of items.",
                "type": "integer",
                "required": false
              },
              "order": {
                "description": "Order sort attribute ascending or descending.",
                "type": "string",
                "default": "desc",
                "enum": [
                  "asc",
                  "desc"
                ],
                "required": false
              },
              "orderby": {
                "description": "Sort collection by object attribute.",
                "type": "string",
                "default": "date",
                "enum": [
                  "date",
                  "id",
                  "include",
                  "relevance",
                  "slug",
                  "include_slugs",
                  "title"
                ],
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/trading-course/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the revision.",
                "type": "integer",
                "required": false
              },
              "id": {
                "description": "Unique identifier for the revision.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the revision.",
                "type": "integer",
                "required": false
              },
              "id": {
                "description": "Unique identifier for the revision.",
                "type": "integer",
                "required": false
              },
              "force": {
                "type": "boolean",
                "default": false,
                "description": "Required to be true, as revisions do not support trashing.",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/trading-course/(?P<id>[\\d]+)/autosaves": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the autosave.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the post.",
                "type": "integer",
                "required": false
              },
              "date": {
                "description": "The date the post was published, in the site's timezone.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "date_gmt": {
                "description": "The date the post was published, as GMT.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the post unique to its type.",
                "type": "string",
                "required": false
              },
              "status": {
                "description": "A named status for the post.",
                "type": "string",
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "acf-disabled",
                  "pitch",
                  "appr-request-ab",
                  "appr-request-at",
                  "appr-request-cm",
                  "appr-request-mn",
                  "appr-request-sl",
                  "appr-request-vp",
                  "appr-request-jo",
                  "appr-request-jgl",
                  "approved-post-ab",
                  "approved-post-at",
                  "approved-post-cm",
                  "approved-post-mn",
                  "approved-post-sl",
                  "approved-post-vp",
                  "approved-post-jo",
                  "approved-post-jgl",
                  "rejected-post-at",
                  "rejected-post-ab",
                  "rejected-postcm",
                  "rejected-post-mn",
                  "rejected-post-sl",
                  "rejected-post-vp",
                  "rejected-post-jo",
                  "rejected-post-jgl",
                  "quant-apr-post-ab",
                  "quant-apr-post-sl",
                  "quant-apr-post-jo",
                  "quant-apr-post-jgl",
                  "quant-apr-req-ab",
                  "quant-appr-req-sl",
                  "quant-apr-req-jo",
                  "quant-apr-req-jgl",
                  "quant-reject-ab",
                  "quant-reject-sl",
                  "quant-reject-jo",
                  "quant-reject-jgl",
                  "webinars-req-t-d-jo",
                  "webinar-appr-t-d-jo",
                  "webinar-rejec-t-d-jo",
                  "webinar-opt-req-t-d",
                  "webinar-opt-appr",
                  "webinar-opt-reject",
                  "chinese-ti-content"
                ],
                "required": false
              },
              "password": {
                "description": "A password to protect access to the content and excerpt.",
                "type": "string",
                "required": false
              },
              "title": {
                "description": "The title for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Title for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML title for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "content": {
                "description": "The content for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Content for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML content for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit"
                    ],
                    "readonly": true
                  },
                  "block_version": {
                    "description": "Version of the content block format used by the post.",
                    "type": "integer",
                    "context": [
                      "edit"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the content is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "excerpt": {
                "description": "The excerpt for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Excerpt for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML excerpt for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the excerpt is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "featured_media": {
                "description": "The ID of the featured media for the post.",
                "type": "integer",
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": [],
                "required": false
              },
              "template": {
                "description": "The theme file to use to display the post.",
                "type": "string",
                "required": false
              },
              "contributors-categories": {
                "description": "The terms assigned to the post in the contributors-categories taxonomy.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "required": false
              },
              "traders-academy": {
                "description": "The terms assigned to the post in the traders-academy taxonomy.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/trading-course/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the autosave.",
                "type": "integer",
                "required": false
              },
              "id": {
                "description": "The ID for the autosave.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/trading-lessons": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "page": {
                "description": "Current page of the collection.",
                "type": "integer",
                "default": 1,
                "minimum": 1,
                "required": false
              },
              "per_page": {
                "description": "Maximum number of items to be returned in result set.",
                "type": "integer",
                "default": 10,
                "minimum": 1,
                "maximum": 100,
                "required": false
              },
              "search": {
                "description": "Limit results to those matching a string.",
                "type": "string",
                "required": false
              },
              "after": {
                "description": "Limit response to posts published after a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "modified_after": {
                "description": "Limit response to posts modified after a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "before": {
                "description": "Limit response to posts published before a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "modified_before": {
                "description": "Limit response to posts modified before a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "exclude": {
                "description": "Ensure result set excludes specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "include": {
                "description": "Limit result set to specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "offset": {
                "description": "Offset the result set by a specific number of items.",
                "type": "integer",
                "required": false
              },
              "order": {
                "description": "Order sort attribute ascending or descending.",
                "type": "string",
                "default": "desc",
                "enum": [
                  "asc",
                  "desc"
                ],
                "required": false
              },
              "orderby": {
                "description": "Sort collection by post attribute.",
                "type": "string",
                "default": "date",
                "enum": [
                  "author",
                  "date",
                  "id",
                  "include",
                  "modified",
                  "parent",
                  "relevance",
                  "slug",
                  "include_slugs",
                  "title"
                ],
                "required": false
              },
              "parent": {
                "description": "Limit result set to items with particular parent IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "parent_exclude": {
                "description": "Limit result set to all items except those of a particular parent ID.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "search_columns": {
                "default": [],
                "description": "Array of column names to be searched.",
                "type": "array",
                "items": {
                  "enum": [
                    "post_title",
                    "post_content",
                    "post_excerpt"
                  ],
                  "type": "string"
                },
                "required": false
              },
              "slug": {
                "description": "Limit result set to posts with one or more specific slugs.",
                "type": "array",
                "items": {
                  "type": "string"
                },
                "required": false
              },
              "status": {
                "default": "publish",
                "description": "Limit result set to posts assigned one or more statuses.",
                "type": "array",
                "items": {
                  "enum": [
                    "publish",
                    "future",
                    "draft",
                    "pending",
                    "private",
                    "trash",
                    "auto-draft",
                    "inherit",
                    "request-pending",
                    "request-confirmed",
                    "request-failed",
                    "request-completed",
                    "acf-disabled",
                    "pitch",
                    "appr-request-ab",
                    "appr-request-at",
                    "appr-request-cm",
                    "appr-request-mn",
                    "appr-request-sl",
                    "appr-request-vp",
                    "appr-request-jo",
                    "appr-request-jgl",
                    "approved-post-ab",
                    "approved-post-at",
                    "approved-post-cm",
                    "approved-post-mn",
                    "approved-post-sl",
                    "approved-post-vp",
                    "approved-post-jo",
                    "approved-post-jgl",
                    "rejected-post-at",
                    "rejected-post-ab",
                    "rejected-postcm",
                    "rejected-post-mn",
                    "rejected-post-sl",
                    "rejected-post-vp",
                    "rejected-post-jo",
                    "rejected-post-jgl",
                    "quant-apr-post-ab",
                    "quant-apr-post-sl",
                    "quant-apr-post-jo",
                    "quant-apr-post-jgl",
                    "quant-apr-req-ab",
                    "quant-appr-req-sl",
                    "quant-apr-req-jo",
                    "quant-apr-req-jgl",
                    "quant-reject-ab",
                    "quant-reject-sl",
                    "quant-reject-jo",
                    "quant-reject-jgl",
                    "webinars-req-t-d-jo",
                    "webinar-appr-t-d-jo",
                    "webinar-rejec-t-d-jo",
                    "webinar-opt-req-t-d",
                    "webinar-opt-appr",
                    "webinar-opt-reject",
                    "chinese-ti-content",
                    "any"
                  ],
                  "type": "string"
                },
                "required": false
              },
              "tax_relation": {
                "description": "Limit result set based on relationship between multiple taxonomies.",
                "type": "string",
                "enum": [
                  "AND",
                  "OR"
                ],
                "required": false
              },
              "contributors-categories": {
                "description": "Limit result set to items with specific terms assigned in the contributors-categories taxonomy.",
                "type": [
                  "object",
                  "array"
                ],
                "oneOf": [
                  {
                    "title": "Term ID List",
                    "description": "Match terms with the listed IDs.",
                    "type": "array",
                    "items": {
                      "type": "integer"
                    }
                  },
                  {
                    "title": "Term ID Taxonomy Query",
                    "description": "Perform an advanced term query.",
                    "type": "object",
                    "properties": {
                      "terms": {
                        "description": "Term IDs.",
                        "type": "array",
                        "items": {
                          "type": "integer"
                        },
                        "default": []
                      },
                      "include_children": {
                        "description": "Whether to include child terms in the terms limiting the result set.",
                        "type": "boolean",
                        "default": false
                      },
                      "operator": {
                        "description": "Whether items must be assigned all or any of the specified terms.",
                        "type": "string",
                        "enum": [
                          "AND",
                          "OR"
                        ],
                        "default": "OR"
                      }
                    },
                    "additionalProperties": false
                  }
                ],
                "required": false
              },
              "contributors-categories_exclude": {
                "description": "Limit result set to items except those with specific terms assigned in the contributors-categories taxonomy.",
                "type": [
                  "object",
                  "array"
                ],
                "oneOf": [
                  {
                    "title": "Term ID List",
                    "description": "Match terms with the listed IDs.",
                    "type": "array",
                    "items": {
                      "type": "integer"
                    }
                  },
                  {
                    "title": "Term ID Taxonomy Query",
                    "description": "Perform an advanced term query.",
                    "type": "object",
                    "properties": {
                      "terms": {
                        "description": "Term IDs.",
                        "type": "array",
                        "items": {
                          "type": "integer"
                        },
                        "default": []
                      },
                      "include_children": {
                        "description": "Whether to include child terms in the terms limiting the result set.",
                        "type": "boolean",
                        "default": false
                      }
                    },
                    "additionalProperties": false
                  }
                ],
                "required": false
              },
              "traders-academy": {
                "description": "Limit result set to items with specific terms assigned in the traders-academy taxonomy.",
                "type": [
                  "object",
                  "array"
                ],
                "oneOf": [
                  {
                    "title": "Term ID List",
                    "description": "Match terms with the listed IDs.",
                    "type": "array",
                    "items": {
                      "type": "integer"
                    }
                  },
                  {
                    "title": "Term ID Taxonomy Query",
                    "description": "Perform an advanced term query.",
                    "type": "object",
                    "properties": {
                      "terms": {
                        "description": "Term IDs.",
                        "type": "array",
                        "items": {
                          "type": "integer"
                        },
                        "default": []
                      },
                      "include_children": {
                        "description": "Whether to include child terms in the terms limiting the result set.",
                        "type": "boolean",
                        "default": false
                      },
                      "operator": {
                        "description": "Whether items must be assigned all or any of the specified terms.",
                        "type": "string",
                        "enum": [
                          "AND",
                          "OR"
                        ],
                        "default": "OR"
                      }
                    },
                    "additionalProperties": false
                  }
                ],
                "required": false
              },
              "traders-academy_exclude": {
                "description": "Limit result set to items except those with specific terms assigned in the traders-academy taxonomy.",
                "type": [
                  "object",
                  "array"
                ],
                "oneOf": [
                  {
                    "title": "Term ID List",
                    "description": "Match terms with the listed IDs.",
                    "type": "array",
                    "items": {
                      "type": "integer"
                    }
                  },
                  {
                    "title": "Term ID Taxonomy Query",
                    "description": "Perform an advanced term query.",
                    "type": "object",
                    "properties": {
                      "terms": {
                        "description": "Term IDs.",
                        "type": "array",
                        "items": {
                          "type": "integer"
                        },
                        "default": []
                      },
                      "include_children": {
                        "description": "Whether to include child terms in the terms limiting the result set.",
                        "type": "boolean",
                        "default": false
                      }
                    },
                    "additionalProperties": false
                  }
                ],
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "date": {
                "description": "The date the post was published, in the site's timezone.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "date_gmt": {
                "description": "The date the post was published, as GMT.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the post unique to its type.",
                "type": "string",
                "required": false
              },
              "status": {
                "description": "A named status for the post.",
                "type": "string",
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "acf-disabled",
                  "pitch",
                  "appr-request-ab",
                  "appr-request-at",
                  "appr-request-cm",
                  "appr-request-mn",
                  "appr-request-sl",
                  "appr-request-vp",
                  "appr-request-jo",
                  "appr-request-jgl",
                  "approved-post-ab",
                  "approved-post-at",
                  "approved-post-cm",
                  "approved-post-mn",
                  "approved-post-sl",
                  "approved-post-vp",
                  "approved-post-jo",
                  "approved-post-jgl",
                  "rejected-post-at",
                  "rejected-post-ab",
                  "rejected-postcm",
                  "rejected-post-mn",
                  "rejected-post-sl",
                  "rejected-post-vp",
                  "rejected-post-jo",
                  "rejected-post-jgl",
                  "quant-apr-post-ab",
                  "quant-apr-post-sl",
                  "quant-apr-post-jo",
                  "quant-apr-post-jgl",
                  "quant-apr-req-ab",
                  "quant-appr-req-sl",
                  "quant-apr-req-jo",
                  "quant-apr-req-jgl",
                  "quant-reject-ab",
                  "quant-reject-sl",
                  "quant-reject-jo",
                  "quant-reject-jgl",
                  "webinars-req-t-d-jo",
                  "webinar-appr-t-d-jo",
                  "webinar-rejec-t-d-jo",
                  "webinar-opt-req-t-d",
                  "webinar-opt-appr",
                  "webinar-opt-reject",
                  "chinese-ti-content"
                ],
                "required": false
              },
              "password": {
                "description": "A password to protect access to the content and excerpt.",
                "type": "string",
                "required": false
              },
              "parent": {
                "description": "The ID for the parent of the post.",
                "type": "integer",
                "required": false
              },
              "title": {
                "description": "The title for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Title for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML title for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "content": {
                "description": "The content for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Content for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML content for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit"
                    ],
                    "readonly": true
                  },
                  "block_version": {
                    "description": "Version of the content block format used by the post.",
                    "type": "integer",
                    "context": [
                      "edit"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the content is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "excerpt": {
                "description": "The excerpt for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Excerpt for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML excerpt for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the excerpt is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "featured_media": {
                "description": "The ID of the featured media for the post.",
                "type": "integer",
                "required": false
              },
              "comment_status": {
                "description": "Whether or not comments are open on the post.",
                "type": "string",
                "enum": [
                  "open",
                  "closed"
                ],
                "required": false
              },
              "ping_status": {
                "description": "Whether or not the post can be pinged.",
                "type": "string",
                "enum": [
                  "open",
                  "closed"
                ],
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": [],
                "required": false
              },
              "template": {
                "description": "The theme file to use to display the post.",
                "type": "string",
                "required": false
              },
              "contributors-categories": {
                "description": "The terms assigned to the post in the contributors-categories taxonomy.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "required": false
              },
              "traders-academy": {
                "description": "The terms assigned to the post in the traders-academy taxonomy.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/trading-lessons"
            }
          ]
        }
      },
      "/wp/v2/trading-lessons/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the post.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "password": {
                "description": "The password for the post if it is password protected.",
                "type": "string",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST",
              "PUT",
              "PATCH"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the post.",
                "type": "integer",
                "required": false
              },
              "date": {
                "description": "The date the post was published, in the site's timezone.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "date_gmt": {
                "description": "The date the post was published, as GMT.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the post unique to its type.",
                "type": "string",
                "required": false
              },
              "status": {
                "description": "A named status for the post.",
                "type": "string",
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "acf-disabled",
                  "pitch",
                  "appr-request-ab",
                  "appr-request-at",
                  "appr-request-cm",
                  "appr-request-mn",
                  "appr-request-sl",
                  "appr-request-vp",
                  "appr-request-jo",
                  "appr-request-jgl",
                  "approved-post-ab",
                  "approved-post-at",
                  "approved-post-cm",
                  "approved-post-mn",
                  "approved-post-sl",
                  "approved-post-vp",
                  "approved-post-jo",
                  "approved-post-jgl",
                  "rejected-post-at",
                  "rejected-post-ab",
                  "rejected-postcm",
                  "rejected-post-mn",
                  "rejected-post-sl",
                  "rejected-post-vp",
                  "rejected-post-jo",
                  "rejected-post-jgl",
                  "quant-apr-post-ab",
                  "quant-apr-post-sl",
                  "quant-apr-post-jo",
                  "quant-apr-post-jgl",
                  "quant-apr-req-ab",
                  "quant-appr-req-sl",
                  "quant-apr-req-jo",
                  "quant-apr-req-jgl",
                  "quant-reject-ab",
                  "quant-reject-sl",
                  "quant-reject-jo",
                  "quant-reject-jgl",
                  "webinars-req-t-d-jo",
                  "webinar-appr-t-d-jo",
                  "webinar-rejec-t-d-jo",
                  "webinar-opt-req-t-d",
                  "webinar-opt-appr",
                  "webinar-opt-reject",
                  "chinese-ti-content"
                ],
                "required": false
              },
              "password": {
                "description": "A password to protect access to the content and excerpt.",
                "type": "string",
                "required": false
              },
              "parent": {
                "description": "The ID for the parent of the post.",
                "type": "integer",
                "required": false
              },
              "title": {
                "description": "The title for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Title for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML title for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "content": {
                "description": "The content for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Content for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML content for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit"
                    ],
                    "readonly": true
                  },
                  "block_version": {
                    "description": "Version of the content block format used by the post.",
                    "type": "integer",
                    "context": [
                      "edit"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the content is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "excerpt": {
                "description": "The excerpt for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Excerpt for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML excerpt for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the excerpt is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "featured_media": {
                "description": "The ID of the featured media for the post.",
                "type": "integer",
                "required": false
              },
              "comment_status": {
                "description": "Whether or not comments are open on the post.",
                "type": "string",
                "enum": [
                  "open",
                  "closed"
                ],
                "required": false
              },
              "ping_status": {
                "description": "Whether or not the post can be pinged.",
                "type": "string",
                "enum": [
                  "open",
                  "closed"
                ],
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": [],
                "required": false
              },
              "template": {
                "description": "The theme file to use to display the post.",
                "type": "string",
                "required": false
              },
              "contributors-categories": {
                "description": "The terms assigned to the post in the contributors-categories taxonomy.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "required": false
              },
              "traders-academy": {
                "description": "The terms assigned to the post in the traders-academy taxonomy.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the post.",
                "type": "integer",
                "required": false
              },
              "force": {
                "type": "boolean",
                "default": false,
                "description": "Whether to bypass Trash and force deletion.",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/trading-lessons/(?P<parent>[\\d]+)/revisions": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the revision.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "page": {
                "description": "Current page of the collection.",
                "type": "integer",
                "default": 1,
                "minimum": 1,
                "required": false
              },
              "per_page": {
                "description": "Maximum number of items to be returned in result set.",
                "type": "integer",
                "minimum": 1,
                "maximum": 100,
                "required": false
              },
              "search": {
                "description": "Limit results to those matching a string.",
                "type": "string",
                "required": false
              },
              "exclude": {
                "description": "Ensure result set excludes specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "include": {
                "description": "Limit result set to specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "offset": {
                "description": "Offset the result set by a specific number of items.",
                "type": "integer",
                "required": false
              },
              "order": {
                "description": "Order sort attribute ascending or descending.",
                "type": "string",
                "default": "desc",
                "enum": [
                  "asc",
                  "desc"
                ],
                "required": false
              },
              "orderby": {
                "description": "Sort collection by object attribute.",
                "type": "string",
                "default": "date",
                "enum": [
                  "date",
                  "id",
                  "include",
                  "relevance",
                  "slug",
                  "include_slugs",
                  "title"
                ],
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/trading-lessons/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the revision.",
                "type": "integer",
                "required": false
              },
              "id": {
                "description": "Unique identifier for the revision.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the revision.",
                "type": "integer",
                "required": false
              },
              "id": {
                "description": "Unique identifier for the revision.",
                "type": "integer",
                "required": false
              },
              "force": {
                "type": "boolean",
                "default": false,
                "description": "Required to be true, as revisions do not support trashing.",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/trading-lessons/(?P<id>[\\d]+)/autosaves": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the autosave.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the post.",
                "type": "integer",
                "required": false
              },
              "date": {
                "description": "The date the post was published, in the site's timezone.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "date_gmt": {
                "description": "The date the post was published, as GMT.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the post unique to its type.",
                "type": "string",
                "required": false
              },
              "status": {
                "description": "A named status for the post.",
                "type": "string",
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "acf-disabled",
                  "pitch",
                  "appr-request-ab",
                  "appr-request-at",
                  "appr-request-cm",
                  "appr-request-mn",
                  "appr-request-sl",
                  "appr-request-vp",
                  "appr-request-jo",
                  "appr-request-jgl",
                  "approved-post-ab",
                  "approved-post-at",
                  "approved-post-cm",
                  "approved-post-mn",
                  "approved-post-sl",
                  "approved-post-vp",
                  "approved-post-jo",
                  "approved-post-jgl",
                  "rejected-post-at",
                  "rejected-post-ab",
                  "rejected-postcm",
                  "rejected-post-mn",
                  "rejected-post-sl",
                  "rejected-post-vp",
                  "rejected-post-jo",
                  "rejected-post-jgl",
                  "quant-apr-post-ab",
                  "quant-apr-post-sl",
                  "quant-apr-post-jo",
                  "quant-apr-post-jgl",
                  "quant-apr-req-ab",
                  "quant-appr-req-sl",
                  "quant-apr-req-jo",
                  "quant-apr-req-jgl",
                  "quant-reject-ab",
                  "quant-reject-sl",
                  "quant-reject-jo",
                  "quant-reject-jgl",
                  "webinars-req-t-d-jo",
                  "webinar-appr-t-d-jo",
                  "webinar-rejec-t-d-jo",
                  "webinar-opt-req-t-d",
                  "webinar-opt-appr",
                  "webinar-opt-reject",
                  "chinese-ti-content"
                ],
                "required": false
              },
              "password": {
                "description": "A password to protect access to the content and excerpt.",
                "type": "string",
                "required": false
              },
              "title": {
                "description": "The title for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Title for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML title for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "content": {
                "description": "The content for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Content for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML content for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit"
                    ],
                    "readonly": true
                  },
                  "block_version": {
                    "description": "Version of the content block format used by the post.",
                    "type": "integer",
                    "context": [
                      "edit"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the content is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "excerpt": {
                "description": "The excerpt for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Excerpt for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML excerpt for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the excerpt is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "featured_media": {
                "description": "The ID of the featured media for the post.",
                "type": "integer",
                "required": false
              },
              "comment_status": {
                "description": "Whether or not comments are open on the post.",
                "type": "string",
                "enum": [
                  "open",
                  "closed"
                ],
                "required": false
              },
              "ping_status": {
                "description": "Whether or not the post can be pinged.",
                "type": "string",
                "enum": [
                  "open",
                  "closed"
                ],
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": [],
                "required": false
              },
              "template": {
                "description": "The theme file to use to display the post.",
                "type": "string",
                "required": false
              },
              "contributors-categories": {
                "description": "The terms assigned to the post in the contributors-categories taxonomy.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "required": false
              },
              "traders-academy": {
                "description": "The terms assigned to the post in the traders-academy taxonomy.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/trading-lessons/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the autosave.",
                "type": "integer",
                "required": false
              },
              "id": {
                "description": "The ID for the autosave.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/webinars": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "page": {
                "description": "Current page of the collection.",
                "type": "integer",
                "default": 1,
                "minimum": 1,
                "required": false
              },
              "per_page": {
                "description": "Maximum number of items to be returned in result set.",
                "type": "integer",
                "default": 10,
                "minimum": 1,
                "maximum": 100,
                "required": false
              },
              "search": {
                "description": "Limit results to those matching a string.",
                "type": "string",
                "required": false
              },
              "after": {
                "description": "Limit response to posts published after a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "modified_after": {
                "description": "Limit response to posts modified after a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "before": {
                "description": "Limit response to posts published before a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "modified_before": {
                "description": "Limit response to posts modified before a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "exclude": {
                "description": "Ensure result set excludes specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "include": {
                "description": "Limit result set to specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "menu_order": {
                "description": "Limit result set to posts with a specific menu_order value.",
                "type": "integer",
                "required": false
              },
              "offset": {
                "description": "Offset the result set by a specific number of items.",
                "type": "integer",
                "required": false
              },
              "order": {
                "description": "Order sort attribute ascending or descending.",
                "type": "string",
                "default": "desc",
                "enum": [
                  "asc",
                  "desc"
                ],
                "required": false
              },
              "orderby": {
                "description": "Sort collection by post attribute.",
                "type": "string",
                "default": "date",
                "enum": [
                  "author",
                  "date",
                  "id",
                  "include",
                  "modified",
                  "parent",
                  "relevance",
                  "slug",
                  "include_slugs",
                  "title",
                  "menu_order"
                ],
                "required": false
              },
              "parent": {
                "description": "Limit result set to items with particular parent IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "parent_exclude": {
                "description": "Limit result set to all items except those of a particular parent ID.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "search_columns": {
                "default": [],
                "description": "Array of column names to be searched.",
                "type": "array",
                "items": {
                  "enum": [
                    "post_title",
                    "post_content",
                    "post_excerpt"
                  ],
                  "type": "string"
                },
                "required": false
              },
              "slug": {
                "description": "Limit result set to posts with one or more specific slugs.",
                "type": "array",
                "items": {
                  "type": "string"
                },
                "required": false
              },
              "status": {
                "default": "publish",
                "description": "Limit result set to posts assigned one or more statuses.",
                "type": "array",
                "items": {
                  "enum": [
                    "publish",
                    "future",
                    "draft",
                    "pending",
                    "private",
                    "trash",
                    "auto-draft",
                    "inherit",
                    "request-pending",
                    "request-confirmed",
                    "request-failed",
                    "request-completed",
                    "acf-disabled",
                    "pitch",
                    "appr-request-ab",
                    "appr-request-at",
                    "appr-request-cm",
                    "appr-request-mn",
                    "appr-request-sl",
                    "appr-request-vp",
                    "appr-request-jo",
                    "appr-request-jgl",
                    "approved-post-ab",
                    "approved-post-at",
                    "approved-post-cm",
                    "approved-post-mn",
                    "approved-post-sl",
                    "approved-post-vp",
                    "approved-post-jo",
                    "approved-post-jgl",
                    "rejected-post-at",
                    "rejected-post-ab",
                    "rejected-postcm",
                    "rejected-post-mn",
                    "rejected-post-sl",
                    "rejected-post-vp",
                    "rejected-post-jo",
                    "rejected-post-jgl",
                    "quant-apr-post-ab",
                    "quant-apr-post-sl",
                    "quant-apr-post-jo",
                    "quant-apr-post-jgl",
                    "quant-apr-req-ab",
                    "quant-appr-req-sl",
                    "quant-apr-req-jo",
                    "quant-apr-req-jgl",
                    "quant-reject-ab",
                    "quant-reject-sl",
                    "quant-reject-jo",
                    "quant-reject-jgl",
                    "webinars-req-t-d-jo",
                    "webinar-appr-t-d-jo",
                    "webinar-rejec-t-d-jo",
                    "webinar-opt-req-t-d",
                    "webinar-opt-appr",
                    "webinar-opt-reject",
                    "chinese-ti-content",
                    "any"
                  ],
                  "type": "string"
                },
                "required": false
              },
              "tax_relation": {
                "description": "Limit result set based on relationship between multiple taxonomies.",
                "type": "string",
                "enum": [
                  "AND",
                  "OR"
                ],
                "required": false
              },
              "contributors-categories": {
                "description": "Limit result set to items with specific terms assigned in the contributors-categories taxonomy.",
                "type": [
                  "object",
                  "array"
                ],
                "oneOf": [
                  {
                    "title": "Term ID List",
                    "description": "Match terms with the listed IDs.",
                    "type": "array",
                    "items": {
                      "type": "integer"
                    }
                  },
                  {
                    "title": "Term ID Taxonomy Query",
                    "description": "Perform an advanced term query.",
                    "type": "object",
                    "properties": {
                      "terms": {
                        "description": "Term IDs.",
                        "type": "array",
                        "items": {
                          "type": "integer"
                        },
                        "default": []
                      },
                      "include_children": {
                        "description": "Whether to include child terms in the terms limiting the result set.",
                        "type": "boolean",
                        "default": false
                      },
                      "operator": {
                        "description": "Whether items must be assigned all or any of the specified terms.",
                        "type": "string",
                        "enum": [
                          "AND",
                          "OR"
                        ],
                        "default": "OR"
                      }
                    },
                    "additionalProperties": false
                  }
                ],
                "required": false
              },
              "contributors-categories_exclude": {
                "description": "Limit result set to items except those with specific terms assigned in the contributors-categories taxonomy.",
                "type": [
                  "object",
                  "array"
                ],
                "oneOf": [
                  {
                    "title": "Term ID List",
                    "description": "Match terms with the listed IDs.",
                    "type": "array",
                    "items": {
                      "type": "integer"
                    }
                  },
                  {
                    "title": "Term ID Taxonomy Query",
                    "description": "Perform an advanced term query.",
                    "type": "object",
                    "properties": {
                      "terms": {
                        "description": "Term IDs.",
                        "type": "array",
                        "items": {
                          "type": "integer"
                        },
                        "default": []
                      },
                      "include_children": {
                        "description": "Whether to include child terms in the terms limiting the result set.",
                        "type": "boolean",
                        "default": false
                      }
                    },
                    "additionalProperties": false
                  }
                ],
                "required": false
              },
              "webinar-categories": {
                "description": "Limit result set to items with specific terms assigned in the webinar-categories taxonomy.",
                "type": [
                  "object",
                  "array"
                ],
                "oneOf": [
                  {
                    "title": "Term ID List",
                    "description": "Match terms with the listed IDs.",
                    "type": "array",
                    "items": {
                      "type": "integer"
                    }
                  },
                  {
                    "title": "Term ID Taxonomy Query",
                    "description": "Perform an advanced term query.",
                    "type": "object",
                    "properties": {
                      "terms": {
                        "description": "Term IDs.",
                        "type": "array",
                        "items": {
                          "type": "integer"
                        },
                        "default": []
                      },
                      "include_children": {
                        "description": "Whether to include child terms in the terms limiting the result set.",
                        "type": "boolean",
                        "default": false
                      },
                      "operator": {
                        "description": "Whether items must be assigned all or any of the specified terms.",
                        "type": "string",
                        "enum": [
                          "AND",
                          "OR"
                        ],
                        "default": "OR"
                      }
                    },
                    "additionalProperties": false
                  }
                ],
                "required": false
              },
              "webinar-categories_exclude": {
                "description": "Limit result set to items except those with specific terms assigned in the webinar-categories taxonomy.",
                "type": [
                  "object",
                  "array"
                ],
                "oneOf": [
                  {
                    "title": "Term ID List",
                    "description": "Match terms with the listed IDs.",
                    "type": "array",
                    "items": {
                      "type": "integer"
                    }
                  },
                  {
                    "title": "Term ID Taxonomy Query",
                    "description": "Perform an advanced term query.",
                    "type": "object",
                    "properties": {
                      "terms": {
                        "description": "Term IDs.",
                        "type": "array",
                        "items": {
                          "type": "integer"
                        },
                        "default": []
                      },
                      "include_children": {
                        "description": "Whether to include child terms in the terms limiting the result set.",
                        "type": "boolean",
                        "default": false
                      }
                    },
                    "additionalProperties": false
                  }
                ],
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "date": {
                "description": "The date the post was published, in the site's timezone.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "date_gmt": {
                "description": "The date the post was published, as GMT.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the post unique to its type.",
                "type": "string",
                "required": false
              },
              "status": {
                "description": "A named status for the post.",
                "type": "string",
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "acf-disabled",
                  "pitch",
                  "appr-request-ab",
                  "appr-request-at",
                  "appr-request-cm",
                  "appr-request-mn",
                  "appr-request-sl",
                  "appr-request-vp",
                  "appr-request-jo",
                  "appr-request-jgl",
                  "approved-post-ab",
                  "approved-post-at",
                  "approved-post-cm",
                  "approved-post-mn",
                  "approved-post-sl",
                  "approved-post-vp",
                  "approved-post-jo",
                  "approved-post-jgl",
                  "rejected-post-at",
                  "rejected-post-ab",
                  "rejected-postcm",
                  "rejected-post-mn",
                  "rejected-post-sl",
                  "rejected-post-vp",
                  "rejected-post-jo",
                  "rejected-post-jgl",
                  "quant-apr-post-ab",
                  "quant-apr-post-sl",
                  "quant-apr-post-jo",
                  "quant-apr-post-jgl",
                  "quant-apr-req-ab",
                  "quant-appr-req-sl",
                  "quant-apr-req-jo",
                  "quant-apr-req-jgl",
                  "quant-reject-ab",
                  "quant-reject-sl",
                  "quant-reject-jo",
                  "quant-reject-jgl",
                  "webinars-req-t-d-jo",
                  "webinar-appr-t-d-jo",
                  "webinar-rejec-t-d-jo",
                  "webinar-opt-req-t-d",
                  "webinar-opt-appr",
                  "webinar-opt-reject",
                  "chinese-ti-content"
                ],
                "required": false
              },
              "password": {
                "description": "A password to protect access to the content and excerpt.",
                "type": "string",
                "required": false
              },
              "parent": {
                "description": "The ID for the parent of the post.",
                "type": "integer",
                "required": false
              },
              "title": {
                "description": "The title for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Title for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML title for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "content": {
                "description": "The content for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Content for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML content for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit"
                    ],
                    "readonly": true
                  },
                  "block_version": {
                    "description": "Version of the content block format used by the post.",
                    "type": "integer",
                    "context": [
                      "edit"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the content is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "excerpt": {
                "description": "The excerpt for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Excerpt for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML excerpt for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the excerpt is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "featured_media": {
                "description": "The ID of the featured media for the post.",
                "type": "integer",
                "required": false
              },
              "menu_order": {
                "description": "The order of the post in relation to other posts.",
                "type": "integer",
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": [],
                "required": false
              },
              "template": {
                "description": "The theme file to use to display the post.",
                "type": "string",
                "required": false
              },
              "contributors-categories": {
                "description": "The terms assigned to the post in the contributors-categories taxonomy.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "required": false
              },
              "webinar-categories": {
                "description": "The terms assigned to the post in the webinar-categories taxonomy.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/webinars"
            }
          ]
        }
      },
      "/wp/v2/webinars/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the post.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "password": {
                "description": "The password for the post if it is password protected.",
                "type": "string",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST",
              "PUT",
              "PATCH"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the post.",
                "type": "integer",
                "required": false
              },
              "date": {
                "description": "The date the post was published, in the site's timezone.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "date_gmt": {
                "description": "The date the post was published, as GMT.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the post unique to its type.",
                "type": "string",
                "required": false
              },
              "status": {
                "description": "A named status for the post.",
                "type": "string",
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "acf-disabled",
                  "pitch",
                  "appr-request-ab",
                  "appr-request-at",
                  "appr-request-cm",
                  "appr-request-mn",
                  "appr-request-sl",
                  "appr-request-vp",
                  "appr-request-jo",
                  "appr-request-jgl",
                  "approved-post-ab",
                  "approved-post-at",
                  "approved-post-cm",
                  "approved-post-mn",
                  "approved-post-sl",
                  "approved-post-vp",
                  "approved-post-jo",
                  "approved-post-jgl",
                  "rejected-post-at",
                  "rejected-post-ab",
                  "rejected-postcm",
                  "rejected-post-mn",
                  "rejected-post-sl",
                  "rejected-post-vp",
                  "rejected-post-jo",
                  "rejected-post-jgl",
                  "quant-apr-post-ab",
                  "quant-apr-post-sl",
                  "quant-apr-post-jo",
                  "quant-apr-post-jgl",
                  "quant-apr-req-ab",
                  "quant-appr-req-sl",
                  "quant-apr-req-jo",
                  "quant-apr-req-jgl",
                  "quant-reject-ab",
                  "quant-reject-sl",
                  "quant-reject-jo",
                  "quant-reject-jgl",
                  "webinars-req-t-d-jo",
                  "webinar-appr-t-d-jo",
                  "webinar-rejec-t-d-jo",
                  "webinar-opt-req-t-d",
                  "webinar-opt-appr",
                  "webinar-opt-reject",
                  "chinese-ti-content"
                ],
                "required": false
              },
              "password": {
                "description": "A password to protect access to the content and excerpt.",
                "type": "string",
                "required": false
              },
              "parent": {
                "description": "The ID for the parent of the post.",
                "type": "integer",
                "required": false
              },
              "title": {
                "description": "The title for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Title for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML title for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "content": {
                "description": "The content for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Content for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML content for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit"
                    ],
                    "readonly": true
                  },
                  "block_version": {
                    "description": "Version of the content block format used by the post.",
                    "type": "integer",
                    "context": [
                      "edit"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the content is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "excerpt": {
                "description": "The excerpt for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Excerpt for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML excerpt for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the excerpt is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "featured_media": {
                "description": "The ID of the featured media for the post.",
                "type": "integer",
                "required": false
              },
              "menu_order": {
                "description": "The order of the post in relation to other posts.",
                "type": "integer",
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": [],
                "required": false
              },
              "template": {
                "description": "The theme file to use to display the post.",
                "type": "string",
                "required": false
              },
              "contributors-categories": {
                "description": "The terms assigned to the post in the contributors-categories taxonomy.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "required": false
              },
              "webinar-categories": {
                "description": "The terms assigned to the post in the webinar-categories taxonomy.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the post.",
                "type": "integer",
                "required": false
              },
              "force": {
                "type": "boolean",
                "default": false,
                "description": "Whether to bypass Trash and force deletion.",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/webinars/(?P<parent>[\\d]+)/revisions": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the revision.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "page": {
                "description": "Current page of the collection.",
                "type": "integer",
                "default": 1,
                "minimum": 1,
                "required": false
              },
              "per_page": {
                "description": "Maximum number of items to be returned in result set.",
                "type": "integer",
                "minimum": 1,
                "maximum": 100,
                "required": false
              },
              "search": {
                "description": "Limit results to those matching a string.",
                "type": "string",
                "required": false
              },
              "exclude": {
                "description": "Ensure result set excludes specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "include": {
                "description": "Limit result set to specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "offset": {
                "description": "Offset the result set by a specific number of items.",
                "type": "integer",
                "required": false
              },
              "order": {
                "description": "Order sort attribute ascending or descending.",
                "type": "string",
                "default": "desc",
                "enum": [
                  "asc",
                  "desc"
                ],
                "required": false
              },
              "orderby": {
                "description": "Sort collection by object attribute.",
                "type": "string",
                "default": "date",
                "enum": [
                  "date",
                  "id",
                  "include",
                  "relevance",
                  "slug",
                  "include_slugs",
                  "title"
                ],
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/webinars/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the revision.",
                "type": "integer",
                "required": false
              },
              "id": {
                "description": "Unique identifier for the revision.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the revision.",
                "type": "integer",
                "required": false
              },
              "id": {
                "description": "Unique identifier for the revision.",
                "type": "integer",
                "required": false
              },
              "force": {
                "type": "boolean",
                "default": false,
                "description": "Required to be true, as revisions do not support trashing.",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/webinars/(?P<id>[\\d]+)/autosaves": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the autosave.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the post.",
                "type": "integer",
                "required": false
              },
              "date": {
                "description": "The date the post was published, in the site's timezone.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "date_gmt": {
                "description": "The date the post was published, as GMT.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the post unique to its type.",
                "type": "string",
                "required": false
              },
              "status": {
                "description": "A named status for the post.",
                "type": "string",
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "acf-disabled",
                  "pitch",
                  "appr-request-ab",
                  "appr-request-at",
                  "appr-request-cm",
                  "appr-request-mn",
                  "appr-request-sl",
                  "appr-request-vp",
                  "appr-request-jo",
                  "appr-request-jgl",
                  "approved-post-ab",
                  "approved-post-at",
                  "approved-post-cm",
                  "approved-post-mn",
                  "approved-post-sl",
                  "approved-post-vp",
                  "approved-post-jo",
                  "approved-post-jgl",
                  "rejected-post-at",
                  "rejected-post-ab",
                  "rejected-postcm",
                  "rejected-post-mn",
                  "rejected-post-sl",
                  "rejected-post-vp",
                  "rejected-post-jo",
                  "rejected-post-jgl",
                  "quant-apr-post-ab",
                  "quant-apr-post-sl",
                  "quant-apr-post-jo",
                  "quant-apr-post-jgl",
                  "quant-apr-req-ab",
                  "quant-appr-req-sl",
                  "quant-apr-req-jo",
                  "quant-apr-req-jgl",
                  "quant-reject-ab",
                  "quant-reject-sl",
                  "quant-reject-jo",
                  "quant-reject-jgl",
                  "webinars-req-t-d-jo",
                  "webinar-appr-t-d-jo",
                  "webinar-rejec-t-d-jo",
                  "webinar-opt-req-t-d",
                  "webinar-opt-appr",
                  "webinar-opt-reject",
                  "chinese-ti-content"
                ],
                "required": false
              },
              "password": {
                "description": "A password to protect access to the content and excerpt.",
                "type": "string",
                "required": false
              },
              "title": {
                "description": "The title for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Title for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML title for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "content": {
                "description": "The content for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Content for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML content for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit"
                    ],
                    "readonly": true
                  },
                  "block_version": {
                    "description": "Version of the content block format used by the post.",
                    "type": "integer",
                    "context": [
                      "edit"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the content is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "excerpt": {
                "description": "The excerpt for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Excerpt for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML excerpt for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the excerpt is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "featured_media": {
                "description": "The ID of the featured media for the post.",
                "type": "integer",
                "required": false
              },
              "menu_order": {
                "description": "The order of the post in relation to other posts.",
                "type": "integer",
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": [],
                "required": false
              },
              "template": {
                "description": "The theme file to use to display the post.",
                "type": "string",
                "required": false
              },
              "contributors-categories": {
                "description": "The terms assigned to the post in the contributors-categories taxonomy.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "required": false
              },
              "webinar-categories": {
                "description": "The terms assigned to the post in the webinar-categories taxonomy.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/webinars/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the autosave.",
                "type": "integer",
                "required": false
              },
              "id": {
                "description": "The ID for the autosave.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/ibkr-api-page": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "page": {
                "description": "Current page of the collection.",
                "type": "integer",
                "default": 1,
                "minimum": 1,
                "required": false
              },
              "per_page": {
                "description": "Maximum number of items to be returned in result set.",
                "type": "integer",
                "default": 10,
                "minimum": 1,
                "maximum": 100,
                "required": false
              },
              "search": {
                "description": "Limit results to those matching a string.",
                "type": "string",
                "required": false
              },
              "after": {
                "description": "Limit response to posts published after a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "modified_after": {
                "description": "Limit response to posts modified after a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "before": {
                "description": "Limit response to posts published before a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "modified_before": {
                "description": "Limit response to posts modified before a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "exclude": {
                "description": "Ensure result set excludes specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "include": {
                "description": "Limit result set to specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "offset": {
                "description": "Offset the result set by a specific number of items.",
                "type": "integer",
                "required": false
              },
              "order": {
                "description": "Order sort attribute ascending or descending.",
                "type": "string",
                "default": "desc",
                "enum": [
                  "asc",
                  "desc"
                ],
                "required": false
              },
              "orderby": {
                "description": "Sort collection by post attribute.",
                "type": "string",
                "default": "date",
                "enum": [
                  "author",
                  "date",
                  "id",
                  "include",
                  "modified",
                  "parent",
                  "relevance",
                  "slug",
                  "include_slugs",
                  "title"
                ],
                "required": false
              },
              "parent": {
                "description": "Limit result set to items with particular parent IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "parent_exclude": {
                "description": "Limit result set to all items except those of a particular parent ID.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "search_columns": {
                "default": [],
                "description": "Array of column names to be searched.",
                "type": "array",
                "items": {
                  "enum": [
                    "post_title",
                    "post_content",
                    "post_excerpt"
                  ],
                  "type": "string"
                },
                "required": false
              },
              "slug": {
                "description": "Limit result set to posts with one or more specific slugs.",
                "type": "array",
                "items": {
                  "type": "string"
                },
                "required": false
              },
              "status": {
                "default": "publish",
                "description": "Limit result set to posts assigned one or more statuses.",
                "type": "array",
                "items": {
                  "enum": [
                    "publish",
                    "future",
                    "draft",
                    "pending",
                    "private",
                    "trash",
                    "auto-draft",
                    "inherit",
                    "request-pending",
                    "request-confirmed",
                    "request-failed",
                    "request-completed",
                    "acf-disabled",
                    "pitch",
                    "appr-request-ab",
                    "appr-request-at",
                    "appr-request-cm",
                    "appr-request-mn",
                    "appr-request-sl",
                    "appr-request-vp",
                    "appr-request-jo",
                    "appr-request-jgl",
                    "approved-post-ab",
                    "approved-post-at",
                    "approved-post-cm",
                    "approved-post-mn",
                    "approved-post-sl",
                    "approved-post-vp",
                    "approved-post-jo",
                    "approved-post-jgl",
                    "rejected-post-at",
                    "rejected-post-ab",
                    "rejected-postcm",
                    "rejected-post-mn",
                    "rejected-post-sl",
                    "rejected-post-vp",
                    "rejected-post-jo",
                    "rejected-post-jgl",
                    "quant-apr-post-ab",
                    "quant-apr-post-sl",
                    "quant-apr-post-jo",
                    "quant-apr-post-jgl",
                    "quant-apr-req-ab",
                    "quant-appr-req-sl",
                    "quant-apr-req-jo",
                    "quant-apr-req-jgl",
                    "quant-reject-ab",
                    "quant-reject-sl",
                    "quant-reject-jo",
                    "quant-reject-jgl",
                    "webinars-req-t-d-jo",
                    "webinar-appr-t-d-jo",
                    "webinar-rejec-t-d-jo",
                    "webinar-opt-req-t-d",
                    "webinar-opt-appr",
                    "webinar-opt-reject",
                    "chinese-ti-content",
                    "any"
                  ],
                  "type": "string"
                },
                "required": false
              },
              "tax_relation": {
                "description": "Limit result set based on relationship between multiple taxonomies.",
                "type": "string",
                "enum": [
                  "AND",
                  "OR"
                ],
                "required": false
              },
              "ibkr-api": {
                "description": "Limit result set to items with specific terms assigned in the ibkr-api taxonomy.",
                "type": [
                  "object",
                  "array"
                ],
                "oneOf": [
                  {
                    "title": "Term ID List",
                    "description": "Match terms with the listed IDs.",
                    "type": "array",
                    "items": {
                      "type": "integer"
                    }
                  },
                  {
                    "title": "Term ID Taxonomy Query",
                    "description": "Perform an advanced term query.",
                    "type": "object",
                    "properties": {
                      "terms": {
                        "description": "Term IDs.",
                        "type": "array",
                        "items": {
                          "type": "integer"
                        },
                        "default": []
                      },
                      "include_children": {
                        "description": "Whether to include child terms in the terms limiting the result set.",
                        "type": "boolean",
                        "default": false
                      },
                      "operator": {
                        "description": "Whether items must be assigned all or any of the specified terms.",
                        "type": "string",
                        "enum": [
                          "AND",
                          "OR"
                        ],
                        "default": "OR"
                      }
                    },
                    "additionalProperties": false
                  }
                ],
                "required": false
              },
              "ibkr-api_exclude": {
                "description": "Limit result set to items except those with specific terms assigned in the ibkr-api taxonomy.",
                "type": [
                  "object",
                  "array"
                ],
                "oneOf": [
                  {
                    "title": "Term ID List",
                    "description": "Match terms with the listed IDs.",
                    "type": "array",
                    "items": {
                      "type": "integer"
                    }
                  },
                  {
                    "title": "Term ID Taxonomy Query",
                    "description": "Perform an advanced term query.",
                    "type": "object",
                    "properties": {
                      "terms": {
                        "description": "Term IDs.",
                        "type": "array",
                        "items": {
                          "type": "integer"
                        },
                        "default": []
                      },
                      "include_children": {
                        "description": "Whether to include child terms in the terms limiting the result set.",
                        "type": "boolean",
                        "default": false
                      }
                    },
                    "additionalProperties": false
                  }
                ],
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "date": {
                "description": "The date the post was published, in the site's timezone.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "date_gmt": {
                "description": "The date the post was published, as GMT.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the post unique to its type.",
                "type": "string",
                "required": false
              },
              "status": {
                "description": "A named status for the post.",
                "type": "string",
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "acf-disabled",
                  "pitch",
                  "appr-request-ab",
                  "appr-request-at",
                  "appr-request-cm",
                  "appr-request-mn",
                  "appr-request-sl",
                  "appr-request-vp",
                  "appr-request-jo",
                  "appr-request-jgl",
                  "approved-post-ab",
                  "approved-post-at",
                  "approved-post-cm",
                  "approved-post-mn",
                  "approved-post-sl",
                  "approved-post-vp",
                  "approved-post-jo",
                  "approved-post-jgl",
                  "rejected-post-at",
                  "rejected-post-ab",
                  "rejected-postcm",
                  "rejected-post-mn",
                  "rejected-post-sl",
                  "rejected-post-vp",
                  "rejected-post-jo",
                  "rejected-post-jgl",
                  "quant-apr-post-ab",
                  "quant-apr-post-sl",
                  "quant-apr-post-jo",
                  "quant-apr-post-jgl",
                  "quant-apr-req-ab",
                  "quant-appr-req-sl",
                  "quant-apr-req-jo",
                  "quant-apr-req-jgl",
                  "quant-reject-ab",
                  "quant-reject-sl",
                  "quant-reject-jo",
                  "quant-reject-jgl",
                  "webinars-req-t-d-jo",
                  "webinar-appr-t-d-jo",
                  "webinar-rejec-t-d-jo",
                  "webinar-opt-req-t-d",
                  "webinar-opt-appr",
                  "webinar-opt-reject",
                  "chinese-ti-content"
                ],
                "required": false
              },
              "password": {
                "description": "A password to protect access to the content and excerpt.",
                "type": "string",
                "required": false
              },
              "parent": {
                "description": "The ID for the parent of the post.",
                "type": "integer",
                "required": false
              },
              "title": {
                "description": "The title for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Title for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML title for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "content": {
                "description": "The content for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Content for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML content for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit"
                    ],
                    "readonly": true
                  },
                  "block_version": {
                    "description": "Version of the content block format used by the post.",
                    "type": "integer",
                    "context": [
                      "edit"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the content is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "excerpt": {
                "description": "The excerpt for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Excerpt for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML excerpt for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the excerpt is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "featured_media": {
                "description": "The ID of the featured media for the post.",
                "type": "integer",
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": [],
                "required": false
              },
              "template": {
                "description": "The theme file to use to display the post.",
                "type": "string",
                "required": false
              },
              "ibkr-api": {
                "description": "The terms assigned to the post in the ibkr-api taxonomy.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/ibkr-api-page"
            }
          ]
        }
      },
      "/wp/v2/ibkr-api-page/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the post.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "password": {
                "description": "The password for the post if it is password protected.",
                "type": "string",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST",
              "PUT",
              "PATCH"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the post.",
                "type": "integer",
                "required": false
              },
              "date": {
                "description": "The date the post was published, in the site's timezone.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "date_gmt": {
                "description": "The date the post was published, as GMT.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the post unique to its type.",
                "type": "string",
                "required": false
              },
              "status": {
                "description": "A named status for the post.",
                "type": "string",
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "acf-disabled",
                  "pitch",
                  "appr-request-ab",
                  "appr-request-at",
                  "appr-request-cm",
                  "appr-request-mn",
                  "appr-request-sl",
                  "appr-request-vp",
                  "appr-request-jo",
                  "appr-request-jgl",
                  "approved-post-ab",
                  "approved-post-at",
                  "approved-post-cm",
                  "approved-post-mn",
                  "approved-post-sl",
                  "approved-post-vp",
                  "approved-post-jo",
                  "approved-post-jgl",
                  "rejected-post-at",
                  "rejected-post-ab",
                  "rejected-postcm",
                  "rejected-post-mn",
                  "rejected-post-sl",
                  "rejected-post-vp",
                  "rejected-post-jo",
                  "rejected-post-jgl",
                  "quant-apr-post-ab",
                  "quant-apr-post-sl",
                  "quant-apr-post-jo",
                  "quant-apr-post-jgl",
                  "quant-apr-req-ab",
                  "quant-appr-req-sl",
                  "quant-apr-req-jo",
                  "quant-apr-req-jgl",
                  "quant-reject-ab",
                  "quant-reject-sl",
                  "quant-reject-jo",
                  "quant-reject-jgl",
                  "webinars-req-t-d-jo",
                  "webinar-appr-t-d-jo",
                  "webinar-rejec-t-d-jo",
                  "webinar-opt-req-t-d",
                  "webinar-opt-appr",
                  "webinar-opt-reject",
                  "chinese-ti-content"
                ],
                "required": false
              },
              "password": {
                "description": "A password to protect access to the content and excerpt.",
                "type": "string",
                "required": false
              },
              "parent": {
                "description": "The ID for the parent of the post.",
                "type": "integer",
                "required": false
              },
              "title": {
                "description": "The title for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Title for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML title for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "content": {
                "description": "The content for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Content for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML content for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit"
                    ],
                    "readonly": true
                  },
                  "block_version": {
                    "description": "Version of the content block format used by the post.",
                    "type": "integer",
                    "context": [
                      "edit"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the content is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "excerpt": {
                "description": "The excerpt for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Excerpt for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML excerpt for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the excerpt is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "featured_media": {
                "description": "The ID of the featured media for the post.",
                "type": "integer",
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": [],
                "required": false
              },
              "template": {
                "description": "The theme file to use to display the post.",
                "type": "string",
                "required": false
              },
              "ibkr-api": {
                "description": "The terms assigned to the post in the ibkr-api taxonomy.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the post.",
                "type": "integer",
                "required": false
              },
              "force": {
                "type": "boolean",
                "default": false,
                "description": "Whether to bypass Trash and force deletion.",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/ibkr-api-page/(?P<parent>[\\d]+)/revisions": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the revision.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "page": {
                "description": "Current page of the collection.",
                "type": "integer",
                "default": 1,
                "minimum": 1,
                "required": false
              },
              "per_page": {
                "description": "Maximum number of items to be returned in result set.",
                "type": "integer",
                "minimum": 1,
                "maximum": 100,
                "required": false
              },
              "search": {
                "description": "Limit results to those matching a string.",
                "type": "string",
                "required": false
              },
              "exclude": {
                "description": "Ensure result set excludes specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "include": {
                "description": "Limit result set to specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "offset": {
                "description": "Offset the result set by a specific number of items.",
                "type": "integer",
                "required": false
              },
              "order": {
                "description": "Order sort attribute ascending or descending.",
                "type": "string",
                "default": "desc",
                "enum": [
                  "asc",
                  "desc"
                ],
                "required": false
              },
              "orderby": {
                "description": "Sort collection by object attribute.",
                "type": "string",
                "default": "date",
                "enum": [
                  "date",
                  "id",
                  "include",
                  "relevance",
                  "slug",
                  "include_slugs",
                  "title"
                ],
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/ibkr-api-page/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the revision.",
                "type": "integer",
                "required": false
              },
              "id": {
                "description": "Unique identifier for the revision.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the revision.",
                "type": "integer",
                "required": false
              },
              "id": {
                "description": "Unique identifier for the revision.",
                "type": "integer",
                "required": false
              },
              "force": {
                "type": "boolean",
                "default": false,
                "description": "Required to be true, as revisions do not support trashing.",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/ibkr-api-page/(?P<id>[\\d]+)/autosaves": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the autosave.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the post.",
                "type": "integer",
                "required": false
              },
              "date": {
                "description": "The date the post was published, in the site's timezone.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "date_gmt": {
                "description": "The date the post was published, as GMT.",
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the post unique to its type.",
                "type": "string",
                "required": false
              },
              "status": {
                "description": "A named status for the post.",
                "type": "string",
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "acf-disabled",
                  "pitch",
                  "appr-request-ab",
                  "appr-request-at",
                  "appr-request-cm",
                  "appr-request-mn",
                  "appr-request-sl",
                  "appr-request-vp",
                  "appr-request-jo",
                  "appr-request-jgl",
                  "approved-post-ab",
                  "approved-post-at",
                  "approved-post-cm",
                  "approved-post-mn",
                  "approved-post-sl",
                  "approved-post-vp",
                  "approved-post-jo",
                  "approved-post-jgl",
                  "rejected-post-at",
                  "rejected-post-ab",
                  "rejected-postcm",
                  "rejected-post-mn",
                  "rejected-post-sl",
                  "rejected-post-vp",
                  "rejected-post-jo",
                  "rejected-post-jgl",
                  "quant-apr-post-ab",
                  "quant-apr-post-sl",
                  "quant-apr-post-jo",
                  "quant-apr-post-jgl",
                  "quant-apr-req-ab",
                  "quant-appr-req-sl",
                  "quant-apr-req-jo",
                  "quant-apr-req-jgl",
                  "quant-reject-ab",
                  "quant-reject-sl",
                  "quant-reject-jo",
                  "quant-reject-jgl",
                  "webinars-req-t-d-jo",
                  "webinar-appr-t-d-jo",
                  "webinar-rejec-t-d-jo",
                  "webinar-opt-req-t-d",
                  "webinar-opt-appr",
                  "webinar-opt-reject",
                  "chinese-ti-content"
                ],
                "required": false
              },
              "password": {
                "description": "A password to protect access to the content and excerpt.",
                "type": "string",
                "required": false
              },
              "title": {
                "description": "The title for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Title for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML title for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "content": {
                "description": "The content for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Content for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML content for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit"
                    ],
                    "readonly": true
                  },
                  "block_version": {
                    "description": "Version of the content block format used by the post.",
                    "type": "integer",
                    "context": [
                      "edit"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the content is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "excerpt": {
                "description": "The excerpt for the post.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Excerpt for the post, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML excerpt for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  },
                  "protected": {
                    "description": "Whether the excerpt is protected with a password.",
                    "type": "boolean",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "featured_media": {
                "description": "The ID of the featured media for the post.",
                "type": "integer",
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": [],
                "required": false
              },
              "template": {
                "description": "The theme file to use to display the post.",
                "type": "string",
                "required": false
              },
              "ibkr-api": {
                "description": "The terms assigned to the post in the ibkr-api taxonomy.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/ibkr-api-page/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the autosave.",
                "type": "integer",
                "required": false
              },
              "id": {
                "description": "The ID for the autosave.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/types": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/types"
            }
          ]
        }
      },
      "/wp/v2/types/(?P<type>[\\w-]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "type": {
                "description": "An alphanumeric identifier for the post type.",
                "type": "string",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/statuses": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/statuses"
            }
          ]
        }
      },
      "/wp/v2/statuses/(?P<status>[\\w-]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "status": {
                "description": "An alphanumeric identifier for the status.",
                "type": "string",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/taxonomies": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "type": {
                "description": "Limit results to taxonomies associated with a specific post type.",
                "type": "string",
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/taxonomies"
            }
          ]
        }
      },
      "/wp/v2/taxonomies/(?P<taxonomy>[\\w-]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "taxonomy": {
                "description": "An alphanumeric identifier for the taxonomy.",
                "type": "string",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/categories": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "page": {
                "description": "Current page of the collection.",
                "type": "integer",
                "default": 1,
                "minimum": 1,
                "required": false
              },
              "per_page": {
                "description": "Maximum number of items to be returned in result set.",
                "type": "integer",
                "default": 10,
                "minimum": 1,
                "maximum": 100,
                "required": false
              },
              "search": {
                "description": "Limit results to those matching a string.",
                "type": "string",
                "required": false
              },
              "exclude": {
                "description": "Ensure result set excludes specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "include": {
                "description": "Limit result set to specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "order": {
                "description": "Order sort attribute ascending or descending.",
                "type": "string",
                "default": "asc",
                "enum": [
                  "asc",
                  "desc"
                ],
                "required": false
              },
              "orderby": {
                "description": "Sort collection by term attribute.",
                "type": "string",
                "default": "name",
                "enum": [
                  "id",
                  "include",
                  "name",
                  "slug",
                  "include_slugs",
                  "term_group",
                  "description",
                  "count"
                ],
                "required": false
              },
              "hide_empty": {
                "description": "Whether to hide terms not assigned to any posts.",
                "type": "boolean",
                "default": false,
                "required": false
              },
              "parent": {
                "description": "Limit result set to terms assigned to a specific parent.",
                "type": "integer",
                "required": false
              },
              "post": {
                "description": "Limit result set to terms assigned to a specific post.",
                "type": "integer",
                "default": null,
                "required": false
              },
              "slug": {
                "description": "Limit result set to terms with one or more specific slugs.",
                "type": "array",
                "items": {
                  "type": "string"
                },
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "description": {
                "description": "HTML description of the term.",
                "type": "string",
                "required": false
              },
              "name": {
                "description": "HTML title for the term.",
                "type": "string",
                "required": true
              },
              "slug": {
                "description": "An alphanumeric identifier for the term unique to its type.",
                "type": "string",
                "required": false
              },
              "parent": {
                "description": "The parent term ID.",
                "type": "integer",
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": [],
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/categories"
            }
          ]
        }
      },
      "/wp/v2/categories/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the term.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST",
              "PUT",
              "PATCH"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the term.",
                "type": "integer",
                "required": false
              },
              "description": {
                "description": "HTML description of the term.",
                "type": "string",
                "required": false
              },
              "name": {
                "description": "HTML title for the term.",
                "type": "string",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the term unique to its type.",
                "type": "string",
                "required": false
              },
              "parent": {
                "description": "The parent term ID.",
                "type": "integer",
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": [],
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the term.",
                "type": "integer",
                "required": false
              },
              "force": {
                "type": "boolean",
                "default": false,
                "description": "Required to be true, as terms do not support trashing.",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/tags": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "page": {
                "description": "Current page of the collection.",
                "type": "integer",
                "default": 1,
                "minimum": 1,
                "required": false
              },
              "per_page": {
                "description": "Maximum number of items to be returned in result set.",
                "type": "integer",
                "default": 10,
                "minimum": 1,
                "maximum": 100,
                "required": false
              },
              "search": {
                "description": "Limit results to those matching a string.",
                "type": "string",
                "required": false
              },
              "exclude": {
                "description": "Ensure result set excludes specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "include": {
                "description": "Limit result set to specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "offset": {
                "description": "Offset the result set by a specific number of items.",
                "type": "integer",
                "required": false
              },
              "order": {
                "description": "Order sort attribute ascending or descending.",
                "type": "string",
                "default": "asc",
                "enum": [
                  "asc",
                  "desc"
                ],
                "required": false
              },
              "orderby": {
                "description": "Sort collection by term attribute.",
                "type": "string",
                "default": "name",
                "enum": [
                  "id",
                  "include",
                  "name",
                  "slug",
                  "include_slugs",
                  "term_group",
                  "description",
                  "count"
                ],
                "required": false
              },
              "hide_empty": {
                "description": "Whether to hide terms not assigned to any posts.",
                "type": "boolean",
                "default": false,
                "required": false
              },
              "post": {
                "description": "Limit result set to terms assigned to a specific post.",
                "type": "integer",
                "default": null,
                "required": false
              },
              "slug": {
                "description": "Limit result set to terms with one or more specific slugs.",
                "type": "array",
                "items": {
                  "type": "string"
                },
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "description": {
                "description": "HTML description of the term.",
                "type": "string",
                "required": false
              },
              "name": {
                "description": "HTML title for the term.",
                "type": "string",
                "required": true
              },
              "slug": {
                "description": "An alphanumeric identifier for the term unique to its type.",
                "type": "string",
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": [],
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/tags"
            }
          ]
        }
      },
      "/wp/v2/tags/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the term.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST",
              "PUT",
              "PATCH"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the term.",
                "type": "integer",
                "required": false
              },
              "description": {
                "description": "HTML description of the term.",
                "type": "string",
                "required": false
              },
              "name": {
                "description": "HTML title for the term.",
                "type": "string",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the term unique to its type.",
                "type": "string",
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": [],
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the term.",
                "type": "integer",
                "required": false
              },
              "force": {
                "type": "boolean",
                "default": false,
                "description": "Required to be true, as terms do not support trashing.",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/menus": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "page": {
                "description": "Current page of the collection.",
                "type": "integer",
                "default": 1,
                "minimum": 1,
                "required": false
              },
              "per_page": {
                "description": "Maximum number of items to be returned in result set.",
                "type": "integer",
                "default": 10,
                "minimum": 1,
                "maximum": 100,
                "required": false
              },
              "search": {
                "description": "Limit results to those matching a string.",
                "type": "string",
                "required": false
              },
              "exclude": {
                "description": "Ensure result set excludes specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "include": {
                "description": "Limit result set to specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "offset": {
                "description": "Offset the result set by a specific number of items.",
                "type": "integer",
                "required": false
              },
              "order": {
                "description": "Order sort attribute ascending or descending.",
                "type": "string",
                "default": "asc",
                "enum": [
                  "asc",
                  "desc"
                ],
                "required": false
              },
              "orderby": {
                "description": "Sort collection by term attribute.",
                "type": "string",
                "default": "name",
                "enum": [
                  "id",
                  "include",
                  "name",
                  "slug",
                  "include_slugs",
                  "term_group",
                  "description",
                  "count"
                ],
                "required": false
              },
              "hide_empty": {
                "description": "Whether to hide terms not assigned to any posts.",
                "type": "boolean",
                "default": false,
                "required": false
              },
              "post": {
                "description": "Limit result set to terms assigned to a specific post.",
                "type": "integer",
                "default": null,
                "required": false
              },
              "slug": {
                "description": "Limit result set to terms with one or more specific slugs.",
                "type": "array",
                "items": {
                  "type": "string"
                },
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "description": {
                "description": "HTML description of the term.",
                "type": "string",
                "required": false
              },
              "name": {
                "description": "HTML title for the term.",
                "type": "string",
                "required": true
              },
              "slug": {
                "description": "An alphanumeric identifier for the term unique to its type.",
                "type": "string",
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": [],
                "required": false
              },
              "locations": {
                "description": "The locations assigned to the menu.",
                "type": "array",
                "items": {
                  "type": "string"
                },
                "required": false
              },
              "auto_add": {
                "description": "Whether to automatically add top level pages to this menu.",
                "type": "boolean",
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/menus"
            }
          ]
        }
      },
      "/wp/v2/menus/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the term.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST",
              "PUT",
              "PATCH"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the term.",
                "type": "integer",
                "required": false
              },
              "description": {
                "description": "HTML description of the term.",
                "type": "string",
                "required": false
              },
              "name": {
                "description": "HTML title for the term.",
                "type": "string",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the term unique to its type.",
                "type": "string",
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": [],
                "required": false
              },
              "locations": {
                "description": "The locations assigned to the menu.",
                "type": "array",
                "items": {
                  "type": "string"
                },
                "required": false
              },
              "auto_add": {
                "description": "Whether to automatically add top level pages to this menu.",
                "type": "boolean",
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the term.",
                "type": "integer",
                "required": false
              },
              "force": {
                "type": "boolean",
                "default": false,
                "description": "Required to be true, as terms do not support trashing.",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/contributors-categories": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "page": {
                "description": "Current page of the collection.",
                "type": "integer",
                "default": 1,
                "minimum": 1,
                "required": false
              },
              "per_page": {
                "description": "Maximum number of items to be returned in result set.",
                "type": "integer",
                "default": 10,
                "minimum": 1,
                "maximum": 100,
                "required": false
              },
              "search": {
                "description": "Limit results to those matching a string.",
                "type": "string",
                "required": false
              },
              "exclude": {
                "description": "Ensure result set excludes specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "include": {
                "description": "Limit result set to specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "order": {
                "description": "Order sort attribute ascending or descending.",
                "type": "string",
                "default": "asc",
                "enum": [
                  "asc",
                  "desc"
                ],
                "required": false
              },
              "orderby": {
                "description": "Sort collection by term attribute.",
                "type": "string",
                "default": "name",
                "enum": [
                  "id",
                  "include",
                  "name",
                  "slug",
                  "include_slugs",
                  "term_group",
                  "description",
                  "count"
                ],
                "required": false
              },
              "hide_empty": {
                "description": "Whether to hide terms not assigned to any posts.",
                "type": "boolean",
                "default": false,
                "required": false
              },
              "parent": {
                "description": "Limit result set to terms assigned to a specific parent.",
                "type": "integer",
                "required": false
              },
              "post": {
                "description": "Limit result set to terms assigned to a specific post.",
                "type": "integer",
                "default": null,
                "required": false
              },
              "slug": {
                "description": "Limit result set to terms with one or more specific slugs.",
                "type": "array",
                "items": {
                  "type": "string"
                },
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "description": {
                "description": "HTML description of the term.",
                "type": "string",
                "required": false
              },
              "name": {
                "description": "HTML title for the term.",
                "type": "string",
                "required": true
              },
              "slug": {
                "description": "An alphanumeric identifier for the term unique to its type.",
                "type": "string",
                "required": false
              },
              "parent": {
                "description": "The parent term ID.",
                "type": "integer",
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": [],
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/contributors-categories"
            }
          ]
        }
      },
      "/wp/v2/contributors-categories/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the term.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST",
              "PUT",
              "PATCH"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the term.",
                "type": "integer",
                "required": false
              },
              "description": {
                "description": "HTML description of the term.",
                "type": "string",
                "required": false
              },
              "name": {
                "description": "HTML title for the term.",
                "type": "string",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the term unique to its type.",
                "type": "string",
                "required": false
              },
              "parent": {
                "description": "The parent term ID.",
                "type": "integer",
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": [],
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the term.",
                "type": "integer",
                "required": false
              },
              "force": {
                "type": "boolean",
                "default": false,
                "description": "Required to be true, as terms do not support trashing.",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/traders-glossary": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "page": {
                "description": "Current page of the collection.",
                "type": "integer",
                "default": 1,
                "minimum": 1,
                "required": false
              },
              "per_page": {
                "description": "Maximum number of items to be returned in result set.",
                "type": "integer",
                "default": 10,
                "minimum": 1,
                "maximum": 100,
                "required": false
              },
              "search": {
                "description": "Limit results to those matching a string.",
                "type": "string",
                "required": false
              },
              "exclude": {
                "description": "Ensure result set excludes specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "include": {
                "description": "Limit result set to specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "order": {
                "description": "Order sort attribute ascending or descending.",
                "type": "string",
                "default": "asc",
                "enum": [
                  "asc",
                  "desc"
                ],
                "required": false
              },
              "orderby": {
                "description": "Sort collection by term attribute.",
                "type": "string",
                "default": "name",
                "enum": [
                  "id",
                  "include",
                  "name",
                  "slug",
                  "include_slugs",
                  "term_group",
                  "description",
                  "count"
                ],
                "required": false
              },
              "hide_empty": {
                "description": "Whether to hide terms not assigned to any posts.",
                "type": "boolean",
                "default": false,
                "required": false
              },
              "parent": {
                "description": "Limit result set to terms assigned to a specific parent.",
                "type": "integer",
                "required": false
              },
              "post": {
                "description": "Limit result set to terms assigned to a specific post.",
                "type": "integer",
                "default": null,
                "required": false
              },
              "slug": {
                "description": "Limit result set to terms with one or more specific slugs.",
                "type": "array",
                "items": {
                  "type": "string"
                },
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "description": {
                "description": "HTML description of the term.",
                "type": "string",
                "required": false
              },
              "name": {
                "description": "HTML title for the term.",
                "type": "string",
                "required": true
              },
              "slug": {
                "description": "An alphanumeric identifier for the term unique to its type.",
                "type": "string",
                "required": false
              },
              "parent": {
                "description": "The parent term ID.",
                "type": "integer",
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": [],
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/traders-glossary"
            }
          ]
        }
      },
      "/wp/v2/traders-glossary/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the term.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST",
              "PUT",
              "PATCH"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the term.",
                "type": "integer",
                "required": false
              },
              "description": {
                "description": "HTML description of the term.",
                "type": "string",
                "required": false
              },
              "name": {
                "description": "HTML title for the term.",
                "type": "string",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the term unique to its type.",
                "type": "string",
                "required": false
              },
              "parent": {
                "description": "The parent term ID.",
                "type": "integer",
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": [],
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the term.",
                "type": "integer",
                "required": false
              },
              "force": {
                "type": "boolean",
                "default": false,
                "description": "Required to be true, as terms do not support trashing.",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/traders-academy": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "page": {
                "description": "Current page of the collection.",
                "type": "integer",
                "default": 1,
                "minimum": 1,
                "required": false
              },
              "per_page": {
                "description": "Maximum number of items to be returned in result set.",
                "type": "integer",
                "default": 10,
                "minimum": 1,
                "maximum": 100,
                "required": false
              },
              "search": {
                "description": "Limit results to those matching a string.",
                "type": "string",
                "required": false
              },
              "exclude": {
                "description": "Ensure result set excludes specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "include": {
                "description": "Limit result set to specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "order": {
                "description": "Order sort attribute ascending or descending.",
                "type": "string",
                "default": "asc",
                "enum": [
                  "asc",
                  "desc"
                ],
                "required": false
              },
              "orderby": {
                "description": "Sort collection by term attribute.",
                "type": "string",
                "default": "name",
                "enum": [
                  "id",
                  "include",
                  "name",
                  "slug",
                  "include_slugs",
                  "term_group",
                  "description",
                  "count"
                ],
                "required": false
              },
              "hide_empty": {
                "description": "Whether to hide terms not assigned to any posts.",
                "type": "boolean",
                "default": false,
                "required": false
              },
              "parent": {
                "description": "Limit result set to terms assigned to a specific parent.",
                "type": "integer",
                "required": false
              },
              "post": {
                "description": "Limit result set to terms assigned to a specific post.",
                "type": "integer",
                "default": null,
                "required": false
              },
              "slug": {
                "description": "Limit result set to terms with one or more specific slugs.",
                "type": "array",
                "items": {
                  "type": "string"
                },
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "description": {
                "description": "HTML description of the term.",
                "type": "string",
                "required": false
              },
              "name": {
                "description": "HTML title for the term.",
                "type": "string",
                "required": true
              },
              "slug": {
                "description": "An alphanumeric identifier for the term unique to its type.",
                "type": "string",
                "required": false
              },
              "parent": {
                "description": "The parent term ID.",
                "type": "integer",
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": [],
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/traders-academy"
            }
          ]
        }
      },
      "/wp/v2/traders-academy/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the term.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST",
              "PUT",
              "PATCH"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the term.",
                "type": "integer",
                "required": false
              },
              "description": {
                "description": "HTML description of the term.",
                "type": "string",
                "required": false
              },
              "name": {
                "description": "HTML title for the term.",
                "type": "string",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the term unique to its type.",
                "type": "string",
                "required": false
              },
              "parent": {
                "description": "The parent term ID.",
                "type": "integer",
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": [],
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the term.",
                "type": "integer",
                "required": false
              },
              "force": {
                "type": "boolean",
                "default": false,
                "description": "Required to be true, as terms do not support trashing.",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/webinar-categories": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "page": {
                "description": "Current page of the collection.",
                "type": "integer",
                "default": 1,
                "minimum": 1,
                "required": false
              },
              "per_page": {
                "description": "Maximum number of items to be returned in result set.",
                "type": "integer",
                "default": 10,
                "minimum": 1,
                "maximum": 100,
                "required": false
              },
              "search": {
                "description": "Limit results to those matching a string.",
                "type": "string",
                "required": false
              },
              "exclude": {
                "description": "Ensure result set excludes specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "include": {
                "description": "Limit result set to specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "order": {
                "description": "Order sort attribute ascending or descending.",
                "type": "string",
                "default": "asc",
                "enum": [
                  "asc",
                  "desc"
                ],
                "required": false
              },
              "orderby": {
                "description": "Sort collection by term attribute.",
                "type": "string",
                "default": "name",
                "enum": [
                  "id",
                  "include",
                  "name",
                  "slug",
                  "include_slugs",
                  "term_group",
                  "description",
                  "count"
                ],
                "required": false
              },
              "hide_empty": {
                "description": "Whether to hide terms not assigned to any posts.",
                "type": "boolean",
                "default": false,
                "required": false
              },
              "parent": {
                "description": "Limit result set to terms assigned to a specific parent.",
                "type": "integer",
                "required": false
              },
              "post": {
                "description": "Limit result set to terms assigned to a specific post.",
                "type": "integer",
                "default": null,
                "required": false
              },
              "slug": {
                "description": "Limit result set to terms with one or more specific slugs.",
                "type": "array",
                "items": {
                  "type": "string"
                },
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "description": {
                "description": "HTML description of the term.",
                "type": "string",
                "required": false
              },
              "name": {
                "description": "HTML title for the term.",
                "type": "string",
                "required": true
              },
              "slug": {
                "description": "An alphanumeric identifier for the term unique to its type.",
                "type": "string",
                "required": false
              },
              "parent": {
                "description": "The parent term ID.",
                "type": "integer",
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": [],
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/webinar-categories"
            }
          ]
        }
      },
      "/wp/v2/webinar-categories/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the term.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST",
              "PUT",
              "PATCH"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the term.",
                "type": "integer",
                "required": false
              },
              "description": {
                "description": "HTML description of the term.",
                "type": "string",
                "required": false
              },
              "name": {
                "description": "HTML title for the term.",
                "type": "string",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the term unique to its type.",
                "type": "string",
                "required": false
              },
              "parent": {
                "description": "The parent term ID.",
                "type": "integer",
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": [],
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the term.",
                "type": "integer",
                "required": false
              },
              "force": {
                "type": "boolean",
                "default": false,
                "description": "Required to be true, as terms do not support trashing.",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/ibkr-api": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "page": {
                "description": "Current page of the collection.",
                "type": "integer",
                "default": 1,
                "minimum": 1,
                "required": false
              },
              "per_page": {
                "description": "Maximum number of items to be returned in result set.",
                "type": "integer",
                "default": 10,
                "minimum": 1,
                "maximum": 100,
                "required": false
              },
              "search": {
                "description": "Limit results to those matching a string.",
                "type": "string",
                "required": false
              },
              "exclude": {
                "description": "Ensure result set excludes specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "include": {
                "description": "Limit result set to specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "order": {
                "description": "Order sort attribute ascending or descending.",
                "type": "string",
                "default": "asc",
                "enum": [
                  "asc",
                  "desc"
                ],
                "required": false
              },
              "orderby": {
                "description": "Sort collection by term attribute.",
                "type": "string",
                "default": "name",
                "enum": [
                  "id",
                  "include",
                  "name",
                  "slug",
                  "include_slugs",
                  "term_group",
                  "description",
                  "count"
                ],
                "required": false
              },
              "hide_empty": {
                "description": "Whether to hide terms not assigned to any posts.",
                "type": "boolean",
                "default": false,
                "required": false
              },
              "parent": {
                "description": "Limit result set to terms assigned to a specific parent.",
                "type": "integer",
                "required": false
              },
              "post": {
                "description": "Limit result set to terms assigned to a specific post.",
                "type": "integer",
                "default": null,
                "required": false
              },
              "slug": {
                "description": "Limit result set to terms with one or more specific slugs.",
                "type": "array",
                "items": {
                  "type": "string"
                },
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "description": {
                "description": "HTML description of the term.",
                "type": "string",
                "required": false
              },
              "name": {
                "description": "HTML title for the term.",
                "type": "string",
                "required": true
              },
              "slug": {
                "description": "An alphanumeric identifier for the term unique to its type.",
                "type": "string",
                "required": false
              },
              "parent": {
                "description": "The parent term ID.",
                "type": "integer",
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": [],
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/ibkr-api"
            }
          ]
        }
      },
      "/wp/v2/ibkr-api/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the term.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST",
              "PUT",
              "PATCH"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the term.",
                "type": "integer",
                "required": false
              },
              "description": {
                "description": "HTML description of the term.",
                "type": "string",
                "required": false
              },
              "name": {
                "description": "HTML title for the term.",
                "type": "string",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the term unique to its type.",
                "type": "string",
                "required": false
              },
              "parent": {
                "description": "The parent term ID.",
                "type": "integer",
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": [],
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the term.",
                "type": "integer",
                "required": false
              },
              "force": {
                "type": "boolean",
                "default": false,
                "description": "Required to be true, as terms do not support trashing.",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/users": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "page": {
                "description": "Current page of the collection.",
                "type": "integer",
                "default": 1,
                "minimum": 1,
                "required": false
              },
              "per_page": {
                "description": "Maximum number of items to be returned in result set.",
                "type": "integer",
                "default": 10,
                "minimum": 1,
                "maximum": 100,
                "required": false
              },
              "search": {
                "description": "Limit results to those matching a string.",
                "type": "string",
                "required": false
              },
              "exclude": {
                "description": "Ensure result set excludes specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "include": {
                "description": "Limit result set to specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "offset": {
                "description": "Offset the result set by a specific number of items.",
                "type": "integer",
                "required": false
              },
              "order": {
                "default": "asc",
                "description": "Order sort attribute ascending or descending.",
                "enum": [
                  "asc",
                  "desc"
                ],
                "type": "string",
                "required": false
              },
              "orderby": {
                "default": "name",
                "description": "Sort collection by user attribute.",
                "enum": [
                  "id",
                  "include",
                  "name",
                  "registered_date",
                  "slug",
                  "include_slugs",
                  "email",
                  "url"
                ],
                "type": "string",
                "required": false
              },
              "slug": {
                "description": "Limit result set to users with one or more specific slugs.",
                "type": "array",
                "items": {
                  "type": "string"
                },
                "required": false
              },
              "roles": {
                "description": "Limit result set to users matching at least one specific role provided. Accepts csv list or single role.",
                "type": "array",
                "items": {
                  "type": "string"
                },
                "required": false
              },
              "capabilities": {
                "description": "Limit result set to users matching at least one specific capability provided. Accepts csv list or single capability.",
                "type": "array",
                "items": {
                  "type": "string"
                },
                "required": false
              },
              "who": {
                "description": "Limit result set to users who are considered authors.",
                "type": "string",
                "enum": [
                  "authors"
                ],
                "required": false
              },
              "has_published_posts": {
                "description": "Limit result set to users who have published posts.",
                "type": [
                  "boolean",
                  "array"
                ],
                "items": {
                  "type": "string",
                  "enum": {
                    "post": "post",
                    "page": "page",
                    "attachment": "attachment",
                    "nav_menu_item": "nav_menu_item",
                    "wp_block": "wp_block",
                    "wp_template": "wp_template",
                    "wp_template_part": "wp_template_part",
                    "wp_navigation": "wp_navigation",
                    "glossary-terms": "glossary-terms",
                    "trading-course": "trading-course",
                    "trading-lessons": "trading-lessons",
                    "webinars": "webinars",
                    "ibkr-api-page": "ibkr-api-page"
                  }
                },
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "args": {
              "username": {
                "description": "Login name for the user.",
                "type": "string",
                "required": true
              },
              "name": {
                "description": "Display name for the user.",
                "type": "string",
                "required": false
              },
              "first_name": {
                "description": "First name for the user.",
                "type": "string",
                "required": false
              },
              "last_name": {
                "description": "Last name for the user.",
                "type": "string",
                "required": false
              },
              "email": {
                "description": "The email address for the user.",
                "type": "string",
                "format": "email",
                "required": true
              },
              "url": {
                "description": "URL of the user.",
                "type": "string",
                "format": "uri",
                "required": false
              },
              "description": {
                "description": "Description of the user.",
                "type": "string",
                "required": false
              },
              "locale": {
                "description": "Locale for the user.",
                "type": "string",
                "enum": [
                  "",
                  "en_US"
                ],
                "required": false
              },
              "nickname": {
                "description": "The nickname for the user.",
                "type": "string",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the user.",
                "type": "string",
                "required": false
              },
              "roles": {
                "description": "Roles assigned to the user.",
                "type": "array",
                "items": {
                  "type": "string"
                },
                "required": false
              },
              "password": {
                "description": "Password for the user (never included).",
                "type": "string",
                "required": true
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": {
                  "persisted_preferences": {
                    "type": "object",
                    "description": "",
                    "default": [],
                    "context": [
                      "edit"
                    ],
                    "properties": {
                      "_modified": {
                        "description": "The date and time the preferences were updated.",
                        "type": "string",
                        "format": "date-time",
                        "readonly": false
                      }
                    },
                    "additionalProperties": true
                  }
                },
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/users"
            }
          ]
        }
      },
      "/wp/v2/users/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "id": {
                "description": "Unique identifier for the user.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST",
              "PUT",
              "PATCH"
            ],
            "args": {
              "id": {
                "description": "Unique identifier for the user.",
                "type": "integer",
                "required": false
              },
              "username": {
                "description": "Login name for the user.",
                "type": "string",
                "required": false
              },
              "name": {
                "description": "Display name for the user.",
                "type": "string",
                "required": false
              },
              "first_name": {
                "description": "First name for the user.",
                "type": "string",
                "required": false
              },
              "last_name": {
                "description": "Last name for the user.",
                "type": "string",
                "required": false
              },
              "email": {
                "description": "The email address for the user.",
                "type": "string",
                "format": "email",
                "required": false
              },
              "url": {
                "description": "URL of the user.",
                "type": "string",
                "format": "uri",
                "required": false
              },
              "description": {
                "description": "Description of the user.",
                "type": "string",
                "required": false
              },
              "locale": {
                "description": "Locale for the user.",
                "type": "string",
                "enum": [
                  "",
                  "en_US"
                ],
                "required": false
              },
              "nickname": {
                "description": "The nickname for the user.",
                "type": "string",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the user.",
                "type": "string",
                "required": false
              },
              "roles": {
                "description": "Roles assigned to the user.",
                "type": "array",
                "items": {
                  "type": "string"
                },
                "required": false
              },
              "password": {
                "description": "Password for the user (never included).",
                "type": "string",
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": {
                  "persisted_preferences": {
                    "type": "object",
                    "description": "",
                    "default": [],
                    "context": [
                      "edit"
                    ],
                    "properties": {
                      "_modified": {
                        "description": "The date and time the preferences were updated.",
                        "type": "string",
                        "format": "date-time",
                        "readonly": false
                      }
                    },
                    "additionalProperties": true
                  }
                },
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "args": {
              "id": {
                "description": "Unique identifier for the user.",
                "type": "integer",
                "required": false
              },
              "force": {
                "type": "boolean",
                "default": false,
                "description": "Required to be true, as users do not support trashing.",
                "required": false
              },
              "reassign": {
                "type": "integer",
                "description": "Reassign the deleted user's posts and links to this user ID.",
                "required": true
              }
            }
          }
        ]
      },
      "/wp/v2/users/me": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST",
              "PUT",
              "PATCH"
            ],
            "args": {
              "username": {
                "description": "Login name for the user.",
                "type": "string",
                "required": false
              },
              "name": {
                "description": "Display name for the user.",
                "type": "string",
                "required": false
              },
              "first_name": {
                "description": "First name for the user.",
                "type": "string",
                "required": false
              },
              "last_name": {
                "description": "Last name for the user.",
                "type": "string",
                "required": false
              },
              "email": {
                "description": "The email address for the user.",
                "type": "string",
                "format": "email",
                "required": false
              },
              "url": {
                "description": "URL of the user.",
                "type": "string",
                "format": "uri",
                "required": false
              },
              "description": {
                "description": "Description of the user.",
                "type": "string",
                "required": false
              },
              "locale": {
                "description": "Locale for the user.",
                "type": "string",
                "enum": [
                  "",
                  "en_US"
                ],
                "required": false
              },
              "nickname": {
                "description": "The nickname for the user.",
                "type": "string",
                "required": false
              },
              "slug": {
                "description": "An alphanumeric identifier for the user.",
                "type": "string",
                "required": false
              },
              "roles": {
                "description": "Roles assigned to the user.",
                "type": "array",
                "items": {
                  "type": "string"
                },
                "required": false
              },
              "password": {
                "description": "Password for the user (never included).",
                "type": "string",
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": {
                  "persisted_preferences": {
                    "type": "object",
                    "description": "",
                    "default": [],
                    "context": [
                      "edit"
                    ],
                    "properties": {
                      "_modified": {
                        "description": "The date and time the preferences were updated.",
                        "type": "string",
                        "format": "date-time",
                        "readonly": false
                      }
                    },
                    "additionalProperties": true
                  }
                },
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "args": {
              "force": {
                "type": "boolean",
                "default": false,
                "description": "Required to be true, as users do not support trashing.",
                "required": false
              },
              "reassign": {
                "type": "integer",
                "description": "Reassign the deleted user's posts and links to this user ID.",
                "required": true
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/users/me"
            }
          ]
        }
      },
      "/wp/v2/users/(?P<user_id>(?:[\\d]+|me))/application-passwords": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "args": {
              "app_id": {
                "description": "A UUID provided by the application to uniquely identify it. It is recommended to use an UUID v5 with the URL or DNS namespace.",
                "type": "string",
                "format": "uuid",
                "required": false
              },
              "name": {
                "description": "The name of the application password.",
                "type": "string",
                "minLength": 1,
                "pattern": ".*\\S.*",
                "required": true
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "args": []
          }
        ]
      },
      "/wp/v2/users/(?P<user_id>(?:[\\d]+|me))/application-passwords/introspect": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/users/(?P<user_id>(?:[\\d]+|me))/application-passwords/(?P<uuid>[\\w\\-]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST",
              "PUT",
              "PATCH"
            ],
            "args": {
              "app_id": {
                "description": "A UUID provided by the application to uniquely identify it. It is recommended to use an UUID v5 with the URL or DNS namespace.",
                "type": "string",
                "format": "uuid",
                "required": false
              },
              "name": {
                "description": "The name of the application password.",
                "type": "string",
                "minLength": 1,
                "pattern": ".*\\S.*",
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "args": []
          }
        ]
      },
      "/wp/v2/comments": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "page": {
                "description": "Current page of the collection.",
                "type": "integer",
                "default": 1,
                "minimum": 1,
                "required": false
              },
              "per_page": {
                "description": "Maximum number of items to be returned in result set.",
                "type": "integer",
                "default": 10,
                "minimum": 1,
                "maximum": 100,
                "required": false
              },
              "search": {
                "description": "Limit results to those matching a string.",
                "type": "string",
                "required": false
              },
              "after": {
                "description": "Limit response to comments published after a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "author": {
                "description": "Limit result set to comments assigned to specific user IDs. Requires authorization.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "required": false
              },
              "author_exclude": {
                "description": "Ensure result set excludes comments assigned to specific user IDs. Requires authorization.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "required": false
              },
              "author_email": {
                "default": null,
                "description": "Limit result set to that from a specific author email. Requires authorization.",
                "format": "email",
                "type": "string",
                "required": false
              },
              "before": {
                "description": "Limit response to comments published before a given ISO8601 compliant date.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "exclude": {
                "description": "Ensure result set excludes specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "include": {
                "description": "Limit result set to specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "offset": {
                "description": "Offset the result set by a specific number of items.",
                "type": "integer",
                "required": false
              },
              "order": {
                "description": "Order sort attribute ascending or descending.",
                "type": "string",
                "default": "desc",
                "enum": [
                  "asc",
                  "desc"
                ],
                "required": false
              },
              "orderby": {
                "description": "Sort collection by comment attribute.",
                "type": "string",
                "default": "date_gmt",
                "enum": [
                  "date",
                  "date_gmt",
                  "id",
                  "include",
                  "post",
                  "parent",
                  "type"
                ],
                "required": false
              },
              "parent": {
                "default": [],
                "description": "Limit result set to comments of specific parent IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "required": false
              },
              "parent_exclude": {
                "default": [],
                "description": "Ensure result set excludes specific parent IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "required": false
              },
              "post": {
                "default": [],
                "description": "Limit result set to comments assigned to specific post IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "required": false
              },
              "status": {
                "default": "approve",
                "description": "Limit result set to comments assigned a specific status. Requires authorization.",
                "type": "string",
                "required": false
              },
              "type": {
                "default": "comment",
                "description": "Limit result set to comments assigned a specific type. Requires authorization.",
                "type": "string",
                "required": false
              },
              "password": {
                "description": "The password for the post if it is password protected.",
                "type": "string",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "args": {
              "author": {
                "description": "The ID of the user object, if author was a user.",
                "type": "integer",
                "required": false
              },
              "author_email": {
                "description": "Email address for the comment author.",
                "type": "string",
                "format": "email",
                "required": false
              },
              "author_ip": {
                "description": "IP address for the comment author.",
                "type": "string",
                "format": "ip",
                "required": false
              },
              "author_name": {
                "description": "Display name for the comment author.",
                "type": "string",
                "required": false
              },
              "author_url": {
                "description": "URL for the comment author.",
                "type": "string",
                "format": "uri",
                "required": false
              },
              "author_user_agent": {
                "description": "User agent for the comment author.",
                "type": "string",
                "required": false
              },
              "content": {
                "description": "The content for the comment.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Content for the comment, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML content for the comment, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "date": {
                "description": "The date the comment was published, in the site's timezone.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "date_gmt": {
                "description": "The date the comment was published, as GMT.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "parent": {
                "default": 0,
                "description": "The ID for the parent of the comment.",
                "type": "integer",
                "required": false
              },
              "post": {
                "default": 0,
                "description": "The ID of the associated post object.",
                "type": "integer",
                "required": false
              },
              "status": {
                "description": "State of the comment.",
                "type": "string",
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": [],
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/comments"
            }
          ]
        }
      },
      "/wp/v2/comments/(?P<id>[\\d]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "id": {
                "description": "Unique identifier for the comment.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "password": {
                "description": "The password for the parent post of the comment (if the post is password protected).",
                "type": "string",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST",
              "PUT",
              "PATCH"
            ],
            "args": {
              "id": {
                "description": "Unique identifier for the comment.",
                "type": "integer",
                "required": false
              },
              "author": {
                "description": "The ID of the user object, if author was a user.",
                "type": "integer",
                "required": false
              },
              "author_email": {
                "description": "Email address for the comment author.",
                "type": "string",
                "format": "email",
                "required": false
              },
              "author_ip": {
                "description": "IP address for the comment author.",
                "type": "string",
                "format": "ip",
                "required": false
              },
              "author_name": {
                "description": "Display name for the comment author.",
                "type": "string",
                "required": false
              },
              "author_url": {
                "description": "URL for the comment author.",
                "type": "string",
                "format": "uri",
                "required": false
              },
              "author_user_agent": {
                "description": "User agent for the comment author.",
                "type": "string",
                "required": false
              },
              "content": {
                "description": "The content for the comment.",
                "type": "object",
                "properties": {
                  "raw": {
                    "description": "Content for the comment, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "rendered": {
                    "description": "HTML content for the comment, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              },
              "date": {
                "description": "The date the comment was published, in the site's timezone.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "date_gmt": {
                "description": "The date the comment was published, as GMT.",
                "type": "string",
                "format": "date-time",
                "required": false
              },
              "parent": {
                "description": "The ID for the parent of the comment.",
                "type": "integer",
                "required": false
              },
              "post": {
                "description": "The ID of the associated post object.",
                "type": "integer",
                "required": false
              },
              "status": {
                "description": "State of the comment.",
                "type": "string",
                "required": false
              },
              "meta": {
                "description": "Meta fields.",
                "type": "object",
                "properties": [],
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "args": {
              "id": {
                "description": "Unique identifier for the comment.",
                "type": "integer",
                "required": false
              },
              "force": {
                "type": "boolean",
                "default": false,
                "description": "Whether to bypass Trash and force deletion.",
                "required": false
              },
              "password": {
                "description": "The password for the parent post of the comment (if the post is password protected).",
                "type": "string",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/search": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed"
                ],
                "default": "view",
                "required": false
              },
              "page": {
                "description": "Current page of the collection.",
                "type": "integer",
                "default": 1,
                "minimum": 1,
                "required": false
              },
              "per_page": {
                "description": "Maximum number of items to be returned in result set.",
                "type": "integer",
                "default": 10,
                "minimum": 1,
                "maximum": 100,
                "required": false
              },
              "search": {
                "description": "Limit results to those matching a string.",
                "type": "string",
                "required": false
              },
              "type": {
                "default": "post",
                "description": "Limit results to items of an object type.",
                "type": "string",
                "enum": [
                  "post",
                  "term",
                  "post-format"
                ],
                "required": false
              },
              "subtype": {
                "default": "any",
                "description": "Limit results to items of one or more object subtypes.",
                "type": "array",
                "items": {
                  "enum": [
                    "post",
                    "page",
                    "glossary-terms",
                    "trading-course",
                    "trading-lessons",
                    "webinars",
                    "ibkr-api-page",
                    "category",
                    "post_tag",
                    "contributors-categories",
                    "traders-glossary",
                    "traders-academy",
                    "webinar-categories",
                    "ibkr-api",
                    "any"
                  ],
                  "type": "string"
                },
                "required": false
              },
              "exclude": {
                "description": "Ensure result set excludes specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              },
              "include": {
                "description": "Limit result set to specific IDs.",
                "type": "array",
                "items": {
                  "type": "integer"
                },
                "default": [],
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/search"
            }
          ]
        }
      },
      "/wp/v2/block-renderer/(?P<name>[a-z0-9-]+/[a-z0-9-]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET",
              "POST"
            ],
            "args": {
              "name": {
                "description": "Unique registered name for the block.",
                "type": "string",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "attributes": {
                "description": "Attributes for the block.",
                "type": "object",
                "default": [],
                "required": false
              },
              "post_id": {
                "description": "ID of the post context.",
                "type": "integer",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/block-types": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "namespace": {
                "description": "Block namespace.",
                "type": "string",
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/block-types"
            }
          ]
        }
      },
      "/wp/v2/block-types/(?P<namespace>[a-zA-Z0-9_-]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "namespace": {
                "description": "Block namespace.",
                "type": "string",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/block-types/(?P<namespace>[a-zA-Z0-9_-]+)/(?P<name>[a-zA-Z0-9_-]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "name": {
                "description": "Block name.",
                "type": "string",
                "required": false
              },
              "namespace": {
                "description": "Block namespace.",
                "type": "string",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/global-styles/(?P<parent>[\\d]+)/revisions": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "parent": {
                "description": "The ID for the parent of the revision.",
                "type": "integer",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "page": {
                "description": "Current page of the collection.",
                "type": "integer",
                "default": 1,
                "minimum": 1,
                "required": false
              },
              "per_page": {
                "description": "Maximum number of items to be returned in result set.",
                "type": "integer",
                "minimum": 1,
                "maximum": 100,
                "required": false
              },
              "offset": {
                "description": "Offset the result set by a specific number of items.",
                "type": "integer",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/global-styles/themes/(?P<stylesheet>[\\/\\s%\\w\\.\\(\\)\\[\\]\\@_\\-]+)/variations": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "stylesheet": {
                "description": "The theme identifier",
                "type": "string",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/global-styles/themes/(?P<stylesheet>[^\\/:<>\\*\\?\"\\|]+(?:\\/[^\\/:<>\\*\\?\"\\|]+)?)": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "stylesheet": {
                "description": "The theme identifier",
                "type": "string",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/global-styles/(?P<id>[\\/\\w-]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST",
          "PUT",
          "PATCH"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "id": {
                "description": "The id of a template",
                "type": "string",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST",
              "PUT",
              "PATCH"
            ],
            "args": {
              "styles": {
                "description": "Global styles.",
                "type": [
                  "object"
                ],
                "required": false
              },
              "settings": {
                "description": "Global settings.",
                "type": [
                  "object"
                ],
                "required": false
              },
              "title": {
                "description": "Title of the global styles variation.",
                "type": [
                  "object",
                  "string"
                ],
                "properties": {
                  "raw": {
                    "description": "Title for the global styles variation, as it exists in the database.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ]
                  },
                  "rendered": {
                    "description": "HTML title for the post, transformed for display.",
                    "type": "string",
                    "context": [
                      "view",
                      "edit",
                      "embed"
                    ],
                    "readonly": true
                  }
                },
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/settings": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST",
          "PUT",
          "PATCH"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": []
          },
          {
            "methods": [
              "POST",
              "PUT",
              "PATCH"
            ],
            "args": {
              "title": {
                "description": "Site title.",
                "type": "string",
                "required": false
              },
              "description": {
                "description": "Site tagline.",
                "type": "string",
                "required": false
              },
              "timezone": {
                "description": "A city in the same timezone as you.",
                "type": "string",
                "required": false
              },
              "date_format": {
                "description": "A date format for all date strings.",
                "type": "string",
                "required": false
              },
              "time_format": {
                "description": "A time format for all time strings.",
                "type": "string",
                "required": false
              },
              "start_of_week": {
                "description": "A day number of the week that the week should start on.",
                "type": "integer",
                "required": false
              },
              "language": {
                "description": "WordPress locale code.",
                "type": "string",
                "required": false
              },
              "use_smilies": {
                "description": "Convert emoticons like :-) and :-P to graphics on display.",
                "type": "boolean",
                "required": false
              },
              "default_category": {
                "description": "Default post category.",
                "type": "integer",
                "required": false
              },
              "default_post_format": {
                "description": "Default post format.",
                "type": "string",
                "required": false
              },
              "posts_per_page": {
                "description": "Blog pages show at most.",
                "type": "integer",
                "required": false
              },
              "show_on_front": {
                "description": "What to show on the front page",
                "type": "string",
                "required": false
              },
              "page_on_front": {
                "description": "The ID of the page that should be displayed on the front page",
                "type": "integer",
                "required": false
              },
              "page_for_posts": {
                "description": "The ID of the page that should display the latest posts",
                "type": "integer",
                "required": false
              },
              "default_ping_status": {
                "description": "Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.",
                "type": "string",
                "enum": [
                  "open",
                  "closed"
                ],
                "required": false
              },
              "default_comment_status": {
                "description": "Allow people to submit comments on new posts.",
                "type": "string",
                "enum": [
                  "open",
                  "closed"
                ],
                "required": false
              },
              "site_logo": {
                "description": "Site logo.",
                "type": "integer",
                "required": false
              },
              "site_icon": {
                "description": "Site icon.",
                "type": "integer",
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/settings"
            }
          ]
        }
      },
      "/wp/v2/themes": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "status": {
                "description": "Limit result set to themes assigned one or more statuses.",
                "type": "array",
                "items": {
                  "enum": [
                    "active",
                    "inactive"
                  ],
                  "type": "string"
                },
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/themes"
            }
          ]
        }
      },
      "/wp/v2/themes/(?P<stylesheet>[^\\/:<>\\*\\?\"\\|]+(?:\\/[^\\/:<>\\*\\?\"\\|]+)?)": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "stylesheet": {
                "description": "The theme's stylesheet. This uniquely identifies the theme.",
                "type": "string",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/plugins": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "search": {
                "description": "Limit results to those matching a string.",
                "type": "string",
                "required": false
              },
              "status": {
                "description": "Limits results to plugins with the given status.",
                "type": "array",
                "items": {
                  "type": "string",
                  "enum": [
                    "inactive",
                    "active",
                    "network-active"
                  ]
                },
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "args": {
              "slug": {
                "type": "string",
                "description": "WordPress.org plugin directory slug.",
                "pattern": "[\\w\\-]+",
                "required": true
              },
              "status": {
                "description": "The plugin activation status.",
                "type": "string",
                "enum": [
                  "inactive",
                  "active",
                  "network-active"
                ],
                "default": "inactive",
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/plugins"
            }
          ]
        }
      },
      "/wp/v2/plugins/(?P<plugin>[^.\\/]+(?:\\/[^.\\/]+)?)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "plugin": {
                "type": "string",
                "pattern": "[^.\\/]+(?:\\/[^.\\/]+)?",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST",
              "PUT",
              "PATCH"
            ],
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "plugin": {
                "type": "string",
                "pattern": "[^.\\/]+(?:\\/[^.\\/]+)?",
                "required": false
              },
              "status": {
                "description": "The plugin activation status.",
                "type": "string",
                "enum": [
                  "inactive",
                  "active",
                  "network-active"
                ],
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "plugin": {
                "type": "string",
                "pattern": "[^.\\/]+(?:\\/[^.\\/]+)?",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/sidebars": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/sidebars"
            }
          ]
        }
      },
      "/wp/v2/sidebars/(?P<id>[\\w-]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST",
          "PUT",
          "PATCH"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "id": {
                "description": "The id of a registered sidebar",
                "type": "string",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST",
              "PUT",
              "PATCH"
            ],
            "args": {
              "widgets": {
                "description": "Nested widgets.",
                "type": "array",
                "items": {
                  "type": [
                    "object",
                    "string"
                  ]
                },
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/widget-types": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/widget-types"
            }
          ]
        }
      },
      "/wp/v2/widget-types/(?P<id>[a-zA-Z0-9_-]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "id": {
                "description": "The widget type id.",
                "type": "string",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/widget-types/(?P<id>[a-zA-Z0-9_-]+)/encode": {
        "namespace": "wp/v2",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": {
              "id": {
                "description": "The widget type id.",
                "type": "string",
                "required": true
              },
              "instance": {
                "description": "Current instance settings of the widget.",
                "type": "object",
                "required": false
              },
              "form_data": {
                "description": "Serialized widget form data to encode into instance settings.",
                "type": "string",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/widget-types/(?P<id>[a-zA-Z0-9_-]+)/render": {
        "namespace": "wp/v2",
        "methods": [
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "POST"
            ],
            "args": {
              "id": {
                "description": "The widget type id.",
                "type": "string",
                "required": true
              },
              "instance": {
                "description": "Current instance settings of the widget.",
                "type": "object",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/widgets": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "sidebar": {
                "description": "The sidebar to return widgets for.",
                "type": "string",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the widget.",
                "type": "string",
                "required": false
              },
              "id_base": {
                "description": "The type of the widget. Corresponds to ID in widget-types endpoint.",
                "type": "string",
                "required": false
              },
              "sidebar": {
                "default": "wp_inactive_widgets",
                "description": "The sidebar the widget belongs to.",
                "type": "string",
                "required": true
              },
              "instance": {
                "description": "Instance settings of the widget, if supported.",
                "type": "object",
                "properties": {
                  "encoded": {
                    "description": "Base64 encoded representation of the instance settings.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "hash": {
                    "description": "Cryptographic hash of the instance settings.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "raw": {
                    "description": "Unencoded instance settings, if supported.",
                    "type": "object",
                    "context": [
                      "edit"
                    ]
                  }
                },
                "required": false
              },
              "form_data": {
                "description": "URL-encoded form data from the widget admin form. Used to update a widget that does not support instance. Write only.",
                "type": "string",
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/widgets"
            }
          ]
        }
      },
      "/wp/v2/widgets/(?P<id>[\\w\\-]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET",
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          },
          {
            "methods": [
              "POST",
              "PUT",
              "PATCH"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "id": {
                "description": "Unique identifier for the widget.",
                "type": "string",
                "required": false
              },
              "id_base": {
                "description": "The type of the widget. Corresponds to ID in widget-types endpoint.",
                "type": "string",
                "required": false
              },
              "sidebar": {
                "description": "The sidebar the widget belongs to.",
                "type": "string",
                "required": false
              },
              "instance": {
                "description": "Instance settings of the widget, if supported.",
                "type": "object",
                "properties": {
                  "encoded": {
                    "description": "Base64 encoded representation of the instance settings.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "hash": {
                    "description": "Cryptographic hash of the instance settings.",
                    "type": "string",
                    "context": [
                      "edit"
                    ]
                  },
                  "raw": {
                    "description": "Unencoded instance settings, if supported.",
                    "type": "object",
                    "context": [
                      "edit"
                    ]
                  }
                },
                "required": false
              },
              "form_data": {
                "description": "URL-encoded form data from the widget admin form. Used to update a widget that does not support instance. Write only.",
                "type": "string",
                "required": false
              }
            }
          },
          {
            "methods": [
              "DELETE"
            ],
            "allow_batch": {
              "v1": true
            },
            "args": {
              "force": {
                "description": "Whether to force removal of the widget, or move it to the inactive sidebar.",
                "type": "boolean",
                "required": false
              }
            }
          }
        ]
      },
      "/wp/v2/block-directory/search": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view"
                ],
                "default": "view",
                "required": false
              },
              "page": {
                "description": "Current page of the collection.",
                "type": "integer",
                "default": 1,
                "minimum": 1,
                "required": false
              },
              "per_page": {
                "description": "Maximum number of items to be returned in result set.",
                "type": "integer",
                "default": 10,
                "minimum": 1,
                "maximum": 100,
                "required": false
              },
              "term": {
                "description": "Limit result set to blocks matching the search term.",
                "type": "string",
                "minLength": 1,
                "required": true
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/block-directory/search"
            }
          ]
        }
      },
      "/wp/v2/pattern-directory/patterns": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              },
              "page": {
                "description": "Current page of the collection.",
                "type": "integer",
                "default": 1,
                "minimum": 1,
                "required": false
              },
              "per_page": {
                "description": "Maximum number of items to be returned in result set.",
                "type": "integer",
                "default": 100,
                "minimum": 1,
                "maximum": 100,
                "required": false
              },
              "search": {
                "description": "Limit results to those matching a string.",
                "type": "string",
                "minLength": 1,
                "required": false
              },
              "category": {
                "description": "Limit results to those matching a category ID.",
                "type": "integer",
                "minimum": 1,
                "required": false
              },
              "keyword": {
                "description": "Limit results to those matching a keyword ID.",
                "type": "integer",
                "minimum": 1,
                "required": false
              },
              "slug": {
                "description": "Limit results to those matching a pattern (slug).",
                "type": "array",
                "required": false
              },
              "offset": {
                "description": "Offset the result set by a specific number of items.",
                "type": "integer",
                "required": false
              },
              "order": {
                "description": "Order sort attribute ascending or descending.",
                "type": "string",
                "default": "desc",
                "enum": [
                  "asc",
                  "desc"
                ],
                "required": false
              },
              "orderby": {
                "description": "Sort collection by post attribute.",
                "type": "string",
                "default": "date",
                "enum": [
                  "author",
                  "date",
                  "id",
                  "include",
                  "modified",
                  "parent",
                  "relevance",
                  "slug",
                  "include_slugs",
                  "title",
                  "favorite_count"
                ],
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/pattern-directory/patterns"
            }
          ]
        }
      },
      "/wp/v2/block-patterns/patterns": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": []
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/block-patterns/patterns"
            }
          ]
        }
      },
      "/wp/v2/block-patterns/categories": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": []
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/block-patterns/categories"
            }
          ]
        }
      },
      "/wp-site-health/v1": {
        "namespace": "wp-site-health/v1",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "namespace": {
                "default": "wp-site-health/v1",
                "required": false
              },
              "context": {
                "default": "view",
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp-site-health/v1"
            }
          ]
        }
      },
      "/wp-site-health/v1/tests/background-updates": {
        "namespace": "wp-site-health/v1",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": []
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp-site-health/v1/tests/background-updates"
            }
          ]
        }
      },
      "/wp-site-health/v1/tests/loopback-requests": {
        "namespace": "wp-site-health/v1",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": []
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp-site-health/v1/tests/loopback-requests"
            }
          ]
        }
      },
      "/wp-site-health/v1/tests/https-status": {
        "namespace": "wp-site-health/v1",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": []
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp-site-health/v1/tests/https-status"
            }
          ]
        }
      },
      "/wp-site-health/v1/tests/dotorg-communication": {
        "namespace": "wp-site-health/v1",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": []
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp-site-health/v1/tests/dotorg-communication"
            }
          ]
        }
      },
      "/wp-site-health/v1/tests/authorization-header": {
        "namespace": "wp-site-health/v1",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": []
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp-site-health/v1/tests/authorization-header"
            }
          ]
        }
      },
      "/wp-site-health/v1/directory-sizes": {
        "namespace": "wp-site-health/v1",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": []
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp-site-health/v1/directory-sizes"
            }
          ]
        }
      },
      "/wp-site-health/v1/tests/page-cache": {
        "namespace": "wp-site-health/v1",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": []
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp-site-health/v1/tests/page-cache"
            }
          ]
        }
      },
      "/wp-block-editor/v1": {
        "namespace": "wp-block-editor/v1",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "namespace": {
                "default": "wp-block-editor/v1",
                "required": false
              },
              "context": {
                "default": "view",
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp-block-editor/v1"
            }
          ]
        }
      },
      "/wp-block-editor/v1/url-details": {
        "namespace": "wp-block-editor/v1",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "url": {
                "description": "The URL to process.",
                "type": "string",
                "format": "uri",
                "required": true
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp-block-editor/v1/url-details"
            }
          ]
        }
      },
      "/wp/v2/menu-locations": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp/v2/menu-locations"
            }
          ]
        }
      },
      "/wp/v2/menu-locations/(?P<location>[\\w-]+)": {
        "namespace": "wp/v2",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": {
              "location": {
                "description": "An alphanumeric identifier for the menu location.",
                "type": "string",
                "required": false
              },
              "context": {
                "description": "Scope under which the request is made; determines fields present in response.",
                "type": "string",
                "enum": [
                  "view",
                  "embed",
                  "edit"
                ],
                "default": "view",
                "required": false
              }
            }
          }
        ]
      },
      "/wp-block-editor/v1/export": {
        "namespace": "wp-block-editor/v1",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": []
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp-block-editor/v1/export"
            }
          ]
        }
      },
      "/wp-block-editor/v1/navigation-fallback": {
        "namespace": "wp-block-editor/v1",
        "methods": [
          "GET"
        ],
        "endpoints": [
          {
            "methods": [
              "GET"
            ],
            "args": []
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://ibkrcampus.com/wp-json/wp-block-editor/v1/navigation-fallback"
            }
          ]
        }
      }
    },
    "site_logo": 0,
    "site_icon": 0,
    "site_icon_url": "",
    "_links": {
      "help": [
        {
          "href": "https://developer.wordpress.org/rest-api/"
        }
      ]
    }
  }