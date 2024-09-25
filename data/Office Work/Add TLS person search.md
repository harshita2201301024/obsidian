
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
