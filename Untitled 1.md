```json
{
  "header": {
    "left": [
	  {
		  "type": "mixed-emphasis-text",
		  "leftIcon":"eye",
		  "chevron": true,
		  "content":[
			  {
				  "type":"text",
				  "content":"View as",
				  "font-weight":"bold"
			  },
			  {
				  "type":"text",
				  "content":"John Appleseed"
			  }
		  ],
		  "nested-menu-style":"search-list-component"
	  },
      {
        "type": "text",
        "content": "Overview",
        "chevron": true,
        "nested-menu-style":"hover-based-expand",
        "subnav": [
	        {
		        "type": "text",
		        "content": "My Home"
	        },
	        {
		        "type": "text",
		        "content": "My Delegations"
	        },
	        {
		        "type": "text",
		        "content": "My Consent Requests"
	        },
	        {
		        "type": "text",
		        "content": "My Due Payments"
	        },
	        {
		        "type": "text",
		        "content": "My Residency"
	        }
        ]
      },
      {
        "type": "text",
        "content": "Business",
        "chevron": true,
        "nested-menu-style":"hover-based-expand",
        "mobile-nested-menu-style":"side-panel-slide",
        "subnav": [
	        {
		        "type": "text",
		        "content": "All Business",
		        "chevron": true,
		        "subnav":[
			        {
				        "type": "text",
				        "content": "Registered Business"
			        },
			        {
				        "type": "text",
				        "content": "In Progress Licenses"
			        }
		        ]
	        },
	        {
		        "type": "text",
		        "content": "All Business Names",
		        "chevron": true,
	        },
	        {
		        "type": "text",
		        "content": "My Dubai Unified Licenses"
	        }
        ]
      },
      {
	      "type":"text",
	      "content": "Resources",
	      ""
      },
      {
        "type": "dropdown",
        "content": "Services",
        "chevron": true,
        "nested-menu-style":"tabs-with-nested-options",
        "subnav": [
          {
            "type": "text",
            "content": "Consulting",
            "subnav": [
              {
                "type": "text",
                "content": "Business Consulting"
              },
              {
                "type": "text",
                "content": "IT Consulting"
              }
            ]
          },
          {
            "type": "text",
            "content": "Support"
          }
        ]
      }
    ],
    "right": [
      {
        "type": "icon",
        "icon": "mdi-account",
        "badge": 3
      },
      {
        "type": "icon",
        "icon": "mdi-bell",
        "badge": 5
      },
      {
        "type": "text",
        "content": "Login",
        "chevron": false
      }
    ]
  }
}
```

