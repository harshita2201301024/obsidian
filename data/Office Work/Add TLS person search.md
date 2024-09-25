
https://www.figma.com/proto/41EM6OZwm46IO3V5q184vk/IID-Enhancement%2FRequirements?scaling=min-zoom&content-scaling=fixed&page-id=21781%3A36348&node-id=21781-36349&starting-point-node-id=21781%3A36349

2nd api

{
    "code": 0,
    "desc": {
        "en": "Success",
        "ar": "Success"
    },
    "data": [
        {
            "id": 144,
            "nameEn": "RASHED MOHAMMAD R BIN ADHED AL MEHAIRI",
            "nameAr": "راشد محمد راشد بن عاضد المهيرى",
            "status": "PENDING_VERIFICATION",
            "email": "info_ded@iid.ae",
            "isActive": true,
            "isVerified": false,
            "userVerificationReminder": {
                "notificationAction": "NOT_SENT"
            }
        }
    ]
}


1st api
{
    "code": 0,
    "desc": {
        "en": "Success",
        "ar": "Success"
    },
    "data": {
        "correlationId": "39595992-3ef8-42c2-ae9b-7bd8112f5b07",
        "personProfile": {
            "id": 144,
            "dedPersonId": 662352,
            "personalInfo": {
                "gender": "M",
                "mobileNo": "+971-501434567",
                "email": "info_ded@iid.ae",
                "nationality": {
                    "code": "ARE",
                    "valueEn": "United Arab Emirates",
                    "valueAr": "الإمارات العربية المتحدة",
                    "id": 101
                },
                "dob": "1992-12-19",
                "birthPlaceEn": "DUBAI",
                "birthPlaceAr": "دبى",
                "minor": false,
                "minorType": {
                    "code": "0",
                    "valueEn": "NA",
                    "valueAr": "NA",
                    "id": 0
                },
                "firstNameEn": "RASHED",
                "middleNameEn": "MOHAMMAD R BIN ADHED AL",
                "lastNameEn": "MEHAIRI",
                "firstNameAr": "راشد",
                "middleNameAr": "محمد راشد بن عاضد",
                "lastNameAr": "المهيرى",
                "nameEn": "RASHED MOHAMMAD R BIN ADHED AL MEHAIRI",
                "nameAr": "راشد محمد راشد بن عاضد المهيرى"
            },
            "identificationDocument": {
                "passportNo": "22",
                "passportIssue": "2011-06-29",
                "passportExpiry": "2030-10-12",
                "passportIssuePlaceEn": "UAE",
                "passportIssuePlaceAr": "???????? ?????",
                "passportIssueCountry": {
                    "code": "ARE",
                    "valueEn": "United Arab Emirates",
                    "valueAr": "الإمارات العربية المتحدة",
                    "id": 101
                },
                "eid": "784199214309603",
                "eidIssue": "2008-04-20",
                "eidExpiry": "2030-10-12",
                "unifiedId": "488664"
            },
            "residencyAddress": {
                "emirate": {
                    "valueEn": "Dubai",
                    "valueAr": "دبي",
                    "id": 32
                }
            },
            "status": {
                "valueEn": "BASIC",
                "valueAr": "BASIC",
                "id": 0
            },
            "syncInfo": {
                "syncStatus": {
                    "valueEn": "NOT_SYNCED",
                    "valueAr": "NOT_SYNCED",
                    "id": 10
                },
                "syncDate": null,
                "syncId": null
            },
            "digitalVerified": false,
            "offshore": false,
            "type": 0,
            "active": true,
            "approvalPhase": {
                "valueEn": "NOT_APPLICABLE",
                "valueAr": "NOT_APPLICABLE",
                "id": 0
            },
            "category": {
                "valueEn": "Person",
                "valueAr": "شخص",
                "id": 0
            },
            "underApproval": false
        },
        "mobileNumber": null,
        "canEdit": false,
        "canConfirm": false,
        "profileActions": [
            {
                "action": {
                    "code": "1",
                    "valueEn": "Edit",
                    "valueAr": "تعديل",
                    "id": 1
                },
                "allowed": false,
                "message": {
                    "statusCode": 0,
                    "en": "Profile is not IID Verified",
                    "ar": "Profile is not IID Verified",
                    "msgCode": "PRFA_1001"
                }
            },
            {
                "action": {
                    "code": "2",
                    "valueEn": "Refresh Emirates ID",
                    "valueAr": "تحديث هوية الإمارات",
                    "id": 2
                },
                "allowed": false,
                "message": {
                    "statusCode": 0,
                    "en": "Not Allowed for current user",
                    "ar": "غير مسموح به للمستخدم الحالي",
                    "msgCode": "PRFA_1002"
                }
            },
            {
                "action": {
                    "code": "3",
                    "valueEn": "Refresh from GDRFA",
                    "valueAr": "تحديث من GDRFA",
                    "id": 3
                },
                "allowed": true
            },
            {
                "action": {
                    "code": "4",
                    "valueEn": "Change Email Account",
                    "valueAr": "تغيير حساب البريد الإلكتروني",
                    "id": 4
                },
                "allowed": false,
                "message": {
                    "statusCode": 0,
                    "en": "Profile is not IID Verified",
                    "ar": "Profile is not IID Verified",
                    "msgCode": "PRFA_1001"
                }
            },
            {
                "action": {
                    "code": "11",
                    "valueEn": "Add Legal Heir",
                    "valueAr": "إضافة ورثة",
                    "id": 11
                },
                "allowed": true
            }
        ],
        "inProgressTxn": true,
        "nextStep": "ENRICHMENT_SEARCH",
        "profileVerificationAdditionalInfo": {
            "refreshFromGdrfa": false,
            "canCreateNewProfile": false,
            "hasAssets": false
        },
        "messages": null
    }
}


3rd api

{
    "code": 0,
    "desc": {
        "en": "Success",
        "ar": "Success"
    },
    "data": {
        "correlationId": "bf74bd92-0f67-4f8e-8b45-5ca3a2cc9963",
        "personProfile": {
            "personalInfo": {
                "gender": "F",
                "mobileNo": "+971-555615646",
                "email": "test@gmail.com",
                "nationality": {
                    "code": "IND",
                    "valueEn": "India",
                    "valueAr": "الهند",
                    "id": 205
                },
                "dob": "1959-07-01",
                "birthPlaceEn": "MORAYUR",
                "birthPlaceAr": "موراير",
                "minor": false,
                "minorType": {
                    "code": "0",
                    "valueEn": "NA",
                    "valueAr": "NA",
                    "id": 0
                },
                "firstNameEn": "AYISHABI",
                "middleNameEn": "MUKKANNAN",
                "lastNameEn": "ASSAINAR",
                "firstNameAr": "عائشه",
                "middleNameAr": "بى موكانان",
                "lastNameAr": "اسينار",
                "nameEn": "RASHED MOHAMMAD R BIN ADHED AL MEHAIRI",
                "nameAr": "راشد محمد راشد بن عاضد المهيرى"
            },
            "identificationDocument": {
                "passportNo": "G1110538",
                "passportIssue": "2007-01-23",
                "passportExpiry": "2017-01-22",
                "passportIssueCountry": {
                    "code": "IND",
                    "valueEn": "India",
                    "valueAr": "الهند",
                    "id": 205
                },
                "eid": "784195979629078",
                "eidIssue": "2012-05-12",
                "eidExpiry": "2013-05-14",
                "unifiedId": "17078904"
            },
            "residencyAddress": {
                "emirate": {
                    "valueEn": "Abu Dhabi",
                    "valueAr": "أبوظبي ",
                    "id": 33
                }
            },
            "status": {
                "valueEn": "GDRFA_VERIFIED",
                "valueAr": "GDRFA_VERIFIED",
                "id": 2
            },
            "syncInfo": {
                "syncStatus": {
                    "valueEn": "NOT_SYNCED",
                    "valueAr": "NOT_SYNCED",
                    "id": 10
                },
                "syncDate": null,
                "syncId": null
            },
            "digitalVerified": false,
            "offshore": false,
            "type": 0,
            "active": true,
            "approvalPhase": {
                "valueEn": "NOT_APPLICABLE",
                "valueAr": "NOT_APPLICABLE",
                "id": 0
            },
            "category": {
                "valueEn": "Person",
                "valueAr": "شخص",
                "id": 0
            },
            "underApproval": false
        },
        "mobileNumber": null,
        "canEdit": false,
        "canConfirm": false,
        "profileActions": [
            {
                "action": {
                    "code": "1",
                    "valueEn": "Edit",
                    "valueAr": "تعديل",
                    "id": 1
                },
                "allowed": false,
                "message": {
                    "statusCode": 0,
                    "en": "Profile is not IID Verified",
                    "ar": "Profile is not IID Verified",
                    "msgCode": "PRFA_1001"
                }
            },
            {
                "action": {
                    "code": "2",
                    "valueEn": "Refresh Emirates ID",
                    "valueAr": "تحديث هوية الإمارات",
                    "id": 2
                },
                "allowed": false,
                "message": {
                    "statusCode": 0,
                    "en": "Not Allowed for current user",
                    "ar": "غير مسموح به للمستخدم الحالي",
                    "msgCode": "PRFA_1002"
                }
            },
            {
                "action": {
                    "code": "3",
                    "valueEn": "Refresh from GDRFA",
                    "valueAr": "تحديث من GDRFA",
                    "id": 3
                },
                "allowed": true
            },
            {
                "action": {
                    "code": "4",
                    "valueEn": "Change Email Account",
                    "valueAr": "تغيير حساب البريد الإلكتروني",
                    "id": 4
                },
                "allowed": false,
                "message": {
                    "statusCode": 0,
                    "en": "Profile is not IID Verified",
                    "ar": "Profile is not IID Verified",
                    "msgCode": "PRFA_1001"
                }
            },
            {
                "action": {
                    "code": "11",
                    "valueEn": "Add Legal Heir",
                    "valueAr": "إضافة ورثة",
                    "id": 11
                },
                "allowed": true
            }
        ],
        "inProgressTxn": false,
        "nextStep": "ENRICHMENT_CONFIRM",
        "profileVerificationAdditionalInfo": {
            "refreshFromGdrfa": false,
            "canCreateNewProfile": false,
            "hasAssets": false
        },
        "messages": null
    }
}

4th api

{
    "code": 0,
    "desc": {
        "en": "Success",
        "ar": "Success"
    },
    "data": {
        "sections": [
            {
                "key": "RESIDENCY_ADDRESS",
                "data": [
                    {
                        "id": 163,
                        "systemFieldId": 42,
                        "multiSelect": false,
                        "labelEn": "Emirate",
                        "labelAr": "الإمارة",
                        "defaultValueEn": "DEFAULT EN",
                        "defaultValueAr": "",
                        "dataType": {
                            "id": 7,
                            "name": "Lookup",
                            "maxLength": -1,
                            "precision": -1,
                            "scale": -1,
                            "minLength": -1
                        },
                        "controlType": "dropdown",
                        "name": "emirates",
                        "placeHolderEn": "Emirate",
                        "placeHolderAr": "الإمارة",
                        "enabled": true,
                        "sequence": 1,
                        "iconPath": null,
                        "validation": "",
                        "mandatory": true,
                        "editable": false,
                        "systemEditable": false,
                        "values": [
                            {
                                "id": 32,
                                "textEn": "Dubai",
                                "textAr": "دبي",
                                "value": "32",
                                "selected": true,
                                "editable": true,
                                "multiSelect": false
                            },
                            {
                                "id": 33,
                                "textEn": "Abu Dhabi",
                                "textAr": "أبوظبي ",
                                "value": "33",
                                "selected": false,
                                "editable": true,
                                "multiSelect": false
                            },
                            {
                                "id": 34,
                                "textEn": "Sharjah",
                                "textAr": "الشارقة",
                                "value": "34",
                                "selected": false,
                                "editable": true,
                                "multiSelect": false
                            },
                            {
                                "id": 35,
                                "textEn": "Umm Al Quwain",
                                "textAr": "أم القوين ",
                                "value": "35",
                                "selected": false,
                                "editable": true,
                                "multiSelect": false
                            },
                            {
                                "id": 36,
                                "textEn": "Ajman",
                                "textAr": "عجمان ",
                                "value": "36",
                                "selected": false,
                                "editable": true,
                                "multiSelect": false
                            },
                            {
                                "id": 37,
                                "textEn": "Ras Al Khaimah",
                                "textAr": "راس الخيمة",
                                "value": "37",
                                "selected": false,
                                "editable": true,
                                "multiSelect": false
                            },
                            {
                                "id": 38,
                                "textEn": "Fujairah",
                                "textAr": "الفجيرة",
                                "value": "38",
                                "selected": false,
                                "editable": true,
                                "multiSelect": false
                            }
                        ],
                        "visible": false,
                        "category": null,
                        "groupCategory": "address",
                        "groupType": "RESIDENCY_ADDRESS",
                        "approvalType": {
                            "valueEn": "NA",
                            "valueAr": "NA",
                            "id": 0
                        },
                        "documents": null,
                        "mapField": "emirate"
                    },
                    {
                        "id": 169,
                        "systemFieldId": 48,
                        "multiSelect": false,
                        "labelEn": "Address",
                        "labelAr": "العنوان",
                        "defaultValueEn": "DEFAULT EN",
                        "defaultValueAr": "",
                        "dataType": {
                            "id": 1,
                            "name": "String",
                            "maxLength": 500,
                            "precision": -1,
                            "scale": -1,
                            "minLength": -1
                        },
                        "controlType": "text",
                        "name": "address",
                        "placeHolderEn": "Address",
                        "placeHolderAr": "العنوان",
                        "enabled": true,
                        "sequence": 2,
                        "iconPath": null,
                        "validation": "{\"regex\":\"^[a-zA-Z\\u0600-\\u06FF0-9٠-٩ ]{0,500}$\"}",
                        "mandatory": false,
                        "editable": false,
                        "systemEditable": false,
                        "values": null,
                        "visible": false,
                        "category": null,
                        "groupCategory": "address",
                        "groupType": "RESIDENCY_ADDRESS",
                        "approvalType": {
                            "valueEn": "NA",
                            "valueAr": "NA",
                            "id": 0
                        },
                        "documents": null,
                        "mapField": "address"
                    }
                ]
            },
            {
                "key": "PERSON_INFO",
                "data": [
                    {
                        "id": 137,
                        "systemFieldId": 67,
                        "multiSelect": false,
                        "labelEn": "First Name English",
                        "labelAr": "الاسم الأول بالإنجليزية",
                        "defaultValueEn": "DEFAULT EN",
                        "defaultValueAr": "",
                        "dataType": {
                            "id": 1,
                            "name": "String",
                            "maxLength": 100,
                            "precision": -1,
                            "scale": -1,
                            "minLength": 1
                        },
                        "controlType": "text",
                        "name": "firstNameEn",
                        "placeHolderEn": "First Name English",
                        "placeHolderAr": "الاسم الأول بالإنجليزية",
                        "enabled": true,
                        "sequence": 1,
                        "iconPath": null,
                        "validation": "",
                        "mandatory": true,
                        "editable": false,
                        "systemEditable": false,
                        "values": null,
                        "visible": false,
                        "category": null,
                        "groupCategory": null,
                        "groupType": "PERSON_INFO",
                        "approvalType": {
                            "valueEn": "NA",
                            "valueAr": "NA",
                            "id": 0
                        },
                        "documents": null,
                        "mapField": "firstNameEn"
                    },
                    {
                        "id": 138,
                        "systemFieldId": 68,
                        "multiSelect": false,
                        "labelEn": "Middle Name English",
                        "labelAr": "اسم الأب بالإنجليزية",
                        "defaultValueEn": "DEFAULT EN",
                        "defaultValueAr": "",
                        "dataType": {
                            "id": 1,
                            "name": "String",
                            "maxLength": 100,
                            "precision": -1,
                            "scale": -1,
                            "minLength": -1
                        },
                        "controlType": "text",
                        "name": "middleNameEn",
                        "placeHolderEn": "Middle Name English",
                        "placeHolderAr": "اسم الأب بالإنجليزية",
                        "enabled": true,
                        "sequence": 2,
                        "iconPath": null,
                        "validation": "",
                        "mandatory": false,
                        "editable": false,
                        "systemEditable": false,
                        "values": null,
                        "visible": false,
                        "category": null,
                        "groupCategory": null,
                        "groupType": "PERSON_INFO",
                        "approvalType": {
                            "valueEn": "NA",
                            "valueAr": "NA",
                            "id": 0
                        },
                        "documents": null,
                        "mapField": "middleNameEn"
                    },
                    {
                        "id": 139,
                        "systemFieldId": 69,
                        "multiSelect": false,
                        "labelEn": "Last Name English",
                        "labelAr": "اسم العائلة بالإنجليزية",
                        "defaultValueEn": "DEFAULT EN",
                        "defaultValueAr": "",
                        "dataType": {
                            "id": 1,
                            "name": "String",
                            "maxLength": 100,
                            "precision": -1,
                            "scale": -1,
                            "minLength": 1
                        },
                        "controlType": "text",
                        "name": "lastNameEn",
                        "placeHolderEn": "Last Name English",
                        "placeHolderAr": "اسم العائلة بالإنجليزية",
                        "enabled": true,
                        "sequence": 3,
                        "iconPath": null,
                        "validation": "",
                        "mandatory": true,
                        "editable": false,
                        "systemEditable": false,
                        "values": null,
                        "visible": false,
                        "category": null,
                        "groupCategory": null,
                        "groupType": "PERSON_INFO",
                        "approvalType": {
                            "valueEn": "NA",
                            "valueAr": "NA",
                            "id": 0
                        },
                        "documents": null,
                        "mapField": "lastNameEn"
                    },
                    {
                        "id": 140,
                        "systemFieldId": 70,
                        "multiSelect": false,
                        "labelEn": "First Name Arabic",
                        "labelAr": "الاسم الأول بالعربية",
                        "defaultValueEn": "DEFAULT EN",
                        "defaultValueAr": "",
                        "dataType": {
                            "id": 1,
                            "name": "String",
                            "maxLength": 100,
                            "precision": -1,
                            "scale": -1,
                            "minLength": 1
                        },
                        "controlType": "text",
                        "name": "firstNameAr",
                        "placeHolderEn": "First Name Arabic",
                        "placeHolderAr": "الاسم الأول بالعربية",
                        "enabled": true,
                        "sequence": 4,
                        "iconPath": null,
                        "validation": "",
                        "mandatory": true,
                        "editable": false,
                        "systemEditable": false,
                        "values": null,
                        "visible": false,
                        "category": null,
                        "groupCategory": null,
                        "groupType": "PERSON_INFO",
                        "approvalType": {
                            "valueEn": "NA",
                            "valueAr": "NA",
                            "id": 0
                        },
                        "documents": null,
                        "mapField": "firstNameAr"
                    },
                    {
                        "id": 141,
                        "systemFieldId": 71,
                        "multiSelect": false,
                        "labelEn": "Middle Name Arabic",
                        "labelAr": "اسم الأب بالعربية",
                        "defaultValueEn": "DEFAULT EN",
                        "defaultValueAr": "",
                        "dataType": {
                            "id": 1,
                            "name": "String",
                            "maxLength": 100,
                            "precision": -1,
                            "scale": -1,
                            "minLength": -1
                        },
                        "controlType": "text",
                        "name": "middleNameAr",
                        "placeHolderEn": "Middle Name Arabic",
                        "placeHolderAr": "اسم الأب بالعربية",
                        "enabled": true,
                        "sequence": 5,
                        "iconPath": null,
                        "validation": "",
                        "mandatory": false,
                        "editable": false,
                        "systemEditable": false,
                        "values": null,
                        "visible": false,
                        "category": null,
                        "groupCategory": null,
                        "groupType": "PERSON_INFO",
                        "approvalType": {
                            "valueEn": "NA",
                            "valueAr": "NA",
                            "id": 0
                        },
                        "documents": null,
                        "mapField": "middleNameAr"
                    },
                    {
                        "id": 142,
                        "systemFieldId": 72,
                        "multiSelect": false,
                        "labelEn": "Last Name Arabic",
                        "labelAr": "اسم العائلة بالعربية",
                        "defaultValueEn": "DEFAULT EN",
                        "defaultValueAr": "",
                        "dataType": {
                            "id": 1,
                            "name": "String",
                            "maxLength": 100,
                            "precision": -1,
                            "scale": -1,
                            "minLength": 1
                        },
                        "controlType": "text",
                        "name": "lastNameAr",
                        "placeHolderEn": "Last Name Arabic",
                        "placeHolderAr": "اسم العائلة بالعربية",
                        "enabled": true,
                        "sequence": 6,
                        "iconPath": null,
                        "validation": "",
                        "mandatory": true,
                        "editable": false,
                        "systemEditable": false,
                        "values": null,
                        "visible": false,
                        "category": null,
                        "groupCategory": null,
                        "groupType": "PERSON_INFO",
                        "approvalType": {
                            "valueEn": "NA",
                            "valueAr": "NA",
                            "id": 0
                        },
                        "documents": null,
                        "mapField": "lastNameAr"
                    }
                ]
            },
            {
                "key": "IDENTIFICATION_DOC",
                "data": [
                    {
                        "id": 152,
                        "systemFieldId": 55,
                        "multiSelect": false,
                        "labelEn": "Passport Number",
                        "labelAr": "رقم جواز السفر",
                        "defaultValueEn": "DEFAULT EN",
                        "defaultValueAr": "",
                        "dataType": {
                            "id": 1,
                            "name": "String",
                            "maxLength": 20,
                            "precision": -1,
                            "scale": -1,
                            "minLength": 5
                        },
                        "controlType": "text",
                        "name": "personPassport",
                        "placeHolderEn": "Passport Number",
                        "placeHolderAr": "رقم جواز السفر",
                        "enabled": true,
                        "sequence": 1,
                        "iconPath": null,
                        "validation": "",
                        "mandatory": true,
                        "editable": false,
                        "systemEditable": false,
                        "values": null,
                        "visible": false,
                        "category": null,
                        "groupCategory": null,
                        "groupType": "IDENTIFICATION_DOC",
                        "approvalType": {
                            "valueEn": "BACK_OFFICE",
                            "valueAr": "BACK_OFFICE",
                            "id": 1
                        },
                        "documents": [
                            {
                                "valueEn": "PASSPORT",
                                "valueAr": "PASSPORT",
                                "id": 17
                            },
                            {
                                "valueEn": "PASSPORTSELFIE",
                                "valueAr": "PASSPORTSELFIE",
                                "id": 18
                            }
                        ],
                        "mapField": "passportNo"
                    }
                ]
            }
        ]
    }
}
