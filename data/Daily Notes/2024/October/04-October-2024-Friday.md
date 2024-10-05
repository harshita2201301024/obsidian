---
created: 2024-02-27 00:08
---


- [x] https://devops.det.gov.ae/DefaultCollection/IID/_workitems/edit/61661
- [x] https://devops.det.gov.ae/DefaultCollection/IID/_workitems/edit/61736/
- [ ] GYM -> 8PM - 10PM
- [x] Delete logo from project and laptop
- [ ] Health Insurance for family


- [ ] Check Eye Operation -> Assign to Shilpa -> 2PM - 3PM
- [ ] Check Hotel Price -> Assign to Shilpa -> 5- 6PM
- [ ] Mansi Laptop Fix -> 6:30PM - 7PM







- [ ] Complete Vue Book -> P0 -> 10 Hour 
- [ ] Apply for Freelancing Jobs ->P0 - 3 Hour -> 
- [ ] Shilpa Music Class -> P0 -> 4 Hour
- [ ] Speak with Vijendra if he can share production data - P0 -> 1 Hour
- [ ] Check Eye Operation - P0 -> 1 Hour
- [ ] Mansi Laptop Fix -> P1 - 1 Hour
- [ ] Excel Sheet Share for pricing - P1 -> Assign to Shilpa
- [ ] Prasad House - P2 -> 1 Hour 
- [ ] Business Bay for Desk - P2 -> 5 Hour
- [ ] Look for hotel - P2 -> 5 Hour
- [ ] Look for Taxi Driver - P2 -> 5 Hour



**TKC**

- [ ] Study VAT
- [ ] Study Corporate Tax
- [ ] Meeting with Shitiz in October
- [ ] Discussions about Sardar ji
	- [ ] Why he wants to join with us?
	- [ ] How much salary we need to pay him?
	- [ ] New employee that we are hiring, how much cost we have to bear?
	- [ ] Hotel Expenses
	- [ ] Flight Ticket Expenses
- [ ] Meeting with 618
- [ ] Website Preparation of TKC
- [ ] TKC social media channels Start Posting
- [ ] How Mainland License Work

**Pending**

- [ ] Talk about Leave with sumeet and Ajumal
- [ ] Mandir Cleaning
- [ ] Freelancing accounts
- [ ] Aakash job posts
- [ ] Aademy job post
- [ ] Launch TKC Dubai
- [ ] Mac charger fix
- [ ] Shilpa Music Class - 11 august 
- [ ] Plan October trip - 11 august
- [ ] Car Key - 12 august
- [ ] Academy plan - 13 August
- [ ] Shilpa old house transfer
- [ ] Shilpa old house construction
- [ ] Plot Boundary and foundation 
- [ ] Aakash Plot market status
- [ ] Resignation shilpa
- [ ] Change nominee of every account
- [ ] collect debit card of idbi
- [ ] add nominee in hdfc 
- [ ] Buy gift for siya and tejas

/Users/a.bathla/Documents/det-nuxt3/det-iid_portal/components/License/LicenseCondition/LicenseCondition.vue

@update-field="handleUpdateField"

handleUpdateField({ name, value }) {  
  this[`${this.licenseType}Form`].bean.attributes[name].value = value  
},

@update:model-value="$emit('updateField', { name: field.name, value: $event })"

export default defineEventHandler((event) => {  
  return {  
    code: 0,  
    desc: {  
      en: 'Success',  
      ar: 'Success',  
      code: null  
    },  
    errors: null,  
    data: {  
      error: false,  
      message: {  
        statusCode: 0,  
        en: 'Drie requirements pending',  
        ar: 'Drie requirements pending'  
      },  
      type: 'LICENSE',  
      token: '120020695',  
      nextStep: 'DRIE_EXECUTION',  
      drieResponse: {  
        outputVariables: {},  
        inputAttributes: {  
          members: [],  
          global: [  
            {  
              attributes: {  
                id: 3806,  
                attrId: 71,  
                messageEn: 'Please enter Emirates Id Number',  
                messageAr: null,  
                mandatory: true,  
                value: null,  
                fulfilled: null,  
                subType: 1,  
                visible: true,  
                direction: 1,  
                selectType: null  
              },  
              key: 'emiratesIdNumber'  
            }  
          ]  
        },  
        inputFieldsMeta: [  
          {  
            id: 352,  
            name: 'ShishaServicesII',  
            messageEn: 'Coffe Shop Outdoor',  
            messageAr: 'كوفي شوب خارج',  
            direction: 1,  
            iidDataType: {  
              value: false,  
              id: 4,  
              type: 'checkbox',  
              direction: 1,  
              attributes: {}  
            },  
            lookUpData: null,  
            selectType: null  
          },  
          {  
            id: 271,  
            name: 'Layou',  
            messageEn:  
              'الرجاء استخدام النموذج أدناه لتقديم مخطط منطقة الطعام الخاص بك للموافقة عليه',  
            messageAr:  
              'Please use the below template to provide your Food Area Layout for approval',  
            direction: 2,  
            iidDataType: {  
              value: null,  
              id: 9,  
              type: 'Message',  
              direction: 2,  
              attributes: {}  
            },  
            lookUpData: null,  
            selectType: null  
          },  
          {  
            id: 157,  
            name: 'OutputText',  
            messageEn: 'OutputText',  
            messageAr: 'OutputText',  
            direction: 2,  
            iidDataType: {  
              value: null,  
              id: 8,  
              type: 'Text',  
              direction: 2,  
              attributes: {}  
            },  
            lookUpData: null,  
            selectType: null  
          },  
          {  
            id: 71,  
            name: 'emiratesIdNumber',  
            messageEn: 'Please enter Emirates Id Number',  
            messageAr: null,  
            direction: 1,  
            iidDataType: {  
              value: null,  
              id: 1,  
              type: 'String',  
              direction: 1,  
              attributes: {}  
            },  
            lookUpData: null,  
            selectType: null  
          }  
        ],  
        outputAttributes: {  
          members: [],  
          global: []  
        },  
        eligibilityAttributes: {  
          members: [],  
          global: []  
        },  
        bean: {  
          primaryPersonId: 12477,  
          creationType: 1,  
          id: 120020695,  
          activities: [  
            {  
              code: '5229012',  
              valueEn: 'Aviation Consultancy',  
              valueAr: 'استشارات الطيران',  
              id: 4191,  
              primary: true,  
              activityGroups: [  
                {  
                  code: '320',  
                  valueEn: 'Consultancy –Technical',  
                  valueAr: 'الإستشارات – التقنية',  
                  id: 159  
                }  
              ]  
            }  
          ],  
          primaryActivityGroup: {  
            code: '320',  
            valueEn: 'Consultancy –Technical',  
            valueAr: 'الإستشارات – التقنية',  
            id: 159  
          },  
          primaryActivityCategory: {},  
          primaryActivity: {  
            code: '5229012',  
            valueEn: 'Aviation Consultancy',  
            valueAr: 'استشارات الطيران',  
            id: 4191  
          },  
          legalType: {  
            valueEn: 'Limited Liability Company - Single Owner(LLC - SO)',  
            valueAr: 'شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)',  
            id: 28  
          },  
          issueDate: '2024-10-04',  
          expiryDate: '2025-10-03',  
          uboSignedDate: '2024-10-04T09:58:59',  
          members: [  
            {  
              id: '31271',  
              personId: 12477,  
              dedPersonId: '101608',  
              nameEn: 'NASSER MOHAMED YOUSUF ALZAHIDI',  
              nameAr: 'ناصر محمد يوسف الزاهدى',  
              nationality: {  
                code: 'ARE',  
                valueEn: 'United Arab Emirates',  
                valueAr: 'الإمارات العربية المتحدة',  
                id: 101  
              },  
              eid: '784196902615754',  
              minor: false,  
              email: 'rashmi_local@mailinator.com',  
              personType: 0,  
              personCategory: 0,  
              canRemove: true,  
              partner: true,  
              owner: true,  
              manager: true,  
              serviceAgent: false,  
              corporateBody: {  
                applicable: false  
              },  
              attributes: {},  
              roles: [  
                {  
                  code: '2',  
                  valueEn: 'Shares owner',  
                  valueAr: 'مالك أسهم',  
                  id: 15  
                },  
                {  
                  code: '3',  
                  valueEn: 'Manager',  
                  valueAr: 'مدير',  
                  id: 21  
                }  
              ],  
              profileCompleted: false,  
              canEdit: false,  
              canConfirm: false,  
              inProgressTxn: false,  
              fields: [  
                {  
                  area: null,  
                  bankAccountCheckList: '27',  
                  noc: null,  
                  address: '345678',  
                  flatNumber: null,  
                  ownershipShare: 100,  
                  emirates: 32,  
                  authorizedSignatureEstablishmentCard: false,  
                  poBox: '1234567',  
                  borrowLendCheckList: '30',  
                  authorizeBankAccount: true,  
                  profitAndLostShare: 100,  
                  noOfSharesPerPartner: 100,  
                  authorizeBankLoan: true,  
                  buildingNumber: null,  
                  managerAuthorithyList: ',19,20,21,23,214,221,222,',  
                  agentServiceFee: null,  
                  memberMakani: null  
                }  
              ]  
            }  
          ],  
          companyRegistry: {  
            creationType: 1,  
            id: 18126,  
            activities: [  
              {  
                code: '5229012',  
                valueEn: 'Aviation Consultancy',  
                valueAr: 'استشارات الطيران',  
                id: 4191,  
                attributes: {  
                  freehold: true  
                },  
                primary: true,  
                activityGroups: [  
                  {  
                    code: '320',  
                    valueEn: 'Consultancy –Technical',  
                    valueAr: 'الإستشارات – التقنية',  
                    id: 159  
                  }  
                ]  
              }  
            ],  
            primaryActivityGroup: {  
              code: '320',  
              valueEn: 'Consultancy –Technical',  
              valueAr: 'الإستشارات – التقنية',  
              id: 159  
            },  
            primaryActivityCategory: {},  
            primaryActivity: {  
              code: '5229012',  
              valueEn: 'Aviation Consultancy',  
              valueAr: 'استشارات الطيران',  
              id: 4191,  
              attributes: {  
                freehold: true  
              }  
            },  
            legalType: {  
              valueEn: 'Limited Liability Company - Single Owner(LLC - SO)',  
              valueAr: 'شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)',  
              id: 28  
            },  
            issueDate: '2024-10-04',  
            expiryDate: '2025-10-03',  
            members: [  
              {  
                personId: 12477,  
                dedPersonId: '101608',  
                nameEn: 'NASSER MOHAMED YOUSUF ALZAHIDI',  
                nameAr: 'ناصر محمد يوسف الزاهدى',  
                nationality: {  
                  id: 101  
                },  
                passportNo: 'N8J052846',  
                passportExpiry: '2028-03-12',  
                passportIssue: '2013-03-13',  
                eid: '784196902615754',  
                eidIssue: '2008-05-27',  
                eidExpiry: '2013-05-27',  
                dob: '1969-07-01',  
                minor: false,  
                emirates: 32,  
                personType: 0,  
                personCategory: 0,  
                canRemove: true,  
                partner: true,  
                owner: true,  
                manager: false,  
                serviceAgent: false,  
                corporateBody: {  
                  applicable: false  
                },  
                attributes: {},  
                roles: [  
                  {  
                    code: '2',  
                    valueEn: 'Shares owner',  
                    valueAr: 'مالك أسهم',  
                    id: 15  
                  }  
                ],  
                ownership: 100,  
                profitAndLoss: 100,  
                birthPlaceEn: 'DUBAI',  
                birthPlaceAr: 'دبى',  
                passportIssuanceCountry: 101,  
                noOfSharesPerPartner: 100,  
                profileCompleted: false,  
                canEdit: false,  
                canConfirm: false,  
                inProgressTxn: false,  
                offshoreInvestor: false,  
                fields: []  
              }  
            ],  
            nameEn: 'killfill For Aviation Consultancy CO. L.L.C',  
            nameAr: 'كلفل لاستشارات الطيران شركة الشخص الواحد  ذ.م.م',  
            license: {  
              code: '1057040',  
              id: 120020695  
            },  
            companyStatus: {  
              valueEn: 'ACTIVE',  
              valueAr: 'ACTIVE',  
              id: 0  
            },  
            masterLegalType: {  
              valueEn: 'Limited Liability Company - Single Owner(LLC - SO)',  
              valueAr: 'شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)',  
              id: 28  
            },  
            locationType: {  
              id: 1  
            },  
            emirate: {  
              id: 32  
            },  
            companyEmail: 'sunrays.chauhan@gmail.com',  
            companyMobile: '+971-7866868686',  
            issuingAuthority: {  
              valueEn: 'DED',  
              valueAr: 'DED',  
              id: 1  
            },  
            ubos: [],  
            registerNumber: 419377,  
            shareValues: 10,  
            numberOfShares: 100,  
            capitalUnitType: {  
              valueEn: 'CASH',  
              valueAr: 'CASH',  
              id: 0  
            },  
            attestationAuthority: {  
              code: '02',  
              valueEn: 'Abu Dhabi Courts',  
              valueAr: 'محاكم أبوظبي',  
              id: 0  
            },  
            uboDeclared: false  
          },  
          licenseCategory: {  
            code: '82',  
            valueEn: 'SME License',  
            valueAr: 'رخصة مؤسسة محمد بن راشد',  
            id: 8  
          },  
          businessName: {},  
          tradeName: {  
            id: 12028666,  
            coreNameEn: 'killfill',  
            coreNameAr: 'كلفل',  
            nameEn: 'killfill For Aviation Consultancy CO. L.L.C',  
            nameAr: 'كلفل لاستشارات الطيران شركة الشخص الواحد  ذ.م.م',  
            status: 0,  
            expiry: 1743660010188,  
            dedTradeNameNumber: 2414407,  
            legalTypePatternId: 5,  
            characteristics: {  
              abbreviation: false,  
              arabized: false,  
              gulf: false,  
              numeric: false,  
              region: false,  
              tradeMark: false,  
              foreignWords: true  
            },  
            specialCase: false  
          },  
          attributes: {  
            Layou: {  
              id: 3714,  
              attrId: 271,  
              messageEn:  
                'الرجاء استخدام النموذج أدناه لتقديم مخطط منطقة الطعام الخاص بك للموافقة عليه',  
              messageAr:  
                'Please use the below template to provide your Food Area Layout for approval',  
              mandatory: true,  
              value: null,  
              fulfilled: null,  
              subType: 1,  
              visible: true,  
              direction: 2,  
              selectType: null  
            },  
            OutputText: {  
              id: 3715,  
              attrId: 157,  
              messageEn: 'OutputText',  
              messageAr: 'OutputText',  
              mandatory: true,  
              value: 'OutputText',  
              fulfilled: null,  
              subType: 1,  
              visible: true,  
              direction: 2,  
              selectType: null  
            },  
            ShishaServicesII: {  
              id: 3713,  
              attrId: 352,  
              messageEn: 'Coffe Shop Outdoor',  
              messageAr: 'كوفي شوب خارج',  
              mandatory: false,  
              value: null,  
              fulfilled: null,  
              subType: 1,  
              visible: true,  
              direction: 1,  
              selectType: null  
            }  
          },  
          feeItems: [],  
          status: {  
            valueEn: 'Active',  
            valueAr: 'سارية',  
            id: 0  
          },  
          profile: {  
            companyEmailAddress: 'sunrays.chauhan@gmail.com',  
            companyMobileNumber: '+971-7866868686',  
            licenseDuration: 1,  
            requestEstablishmentCardGDRFA: false,  
            requestEstablishmentCardMOHRE: false,  
            companyDuration: 99,  
            capitalAmount: 1000,  
            numberOfShares: 100,  
            shareValues: 10,  
            directorTenure: 5,  
            disputeSettlementAuthority: 25,  
            disputeSettlementAuthorityName: {  
              code: '25',  
              valueEn: 'Dubai Court',  
              valueAr: 'محاكم دبي'  
            },  
            licenseDurationValue: {  
              code: '1',  
              valueEn: '1 Year',  
              valueAr: 'سنة 1'            },  
            quorumToTakeDecision: 75,  
            quorumToDismissDirector: 75,  
            quorumToModifyMOA: 75,  
            quorumToDissolve: 75,  
            openBankAccount: false,  
            addrCity: 'DUBAI'  
          },  
          dedLicenseNumber: 1057040,  
          showScreens: {  
            managerAuthority: true,  
            shareDetail: true,  
            bankDetail: true  
          },  
          freehold: false,  
          licenseType: {  
            code: '2',  
            valueEn: 'Commercial',  
            valueAr: 'تجارية',  
            id: 2  
          },  
          mainLicense: true,  
          initialApproval: {  
            initialApprovalNo: 3011880,  
            dedInitialApprovalNo: 713733,  
            moaRequired: true,  
            moaStatus: true,  
            moaSignMode: 1,  
            lsaRequired: false,  
            lsaStatus: false,  
            lsaSignMode: 0,  
            civilRequired: false,  
            civilStatus: false,  
            civilSignMode: 0  
          },  
          ubo: {  
            declarationAllowed: false,  
            declarationDone: false,  
            declarationBy: null,  
            declarationDate: null,  
            members: [  
              {  
                id: '20604',  
                personId: 12477,  
                dedPersonId: '101608',  
                nameEn: 'NASSER MOHAMED YOUSUF ALZAHIDI',  
                nameAr: 'ناصر محمد يوسف الزاهدى',  
                nationality: {  
                  code: 'ARE',  
                  valueEn: 'United Arab Emirates',  
                  valueAr: 'الإمارات العربية المتحدة',  
                  id: 101  
                },  
                passportNo: 'N8J052846',  
                passportExpiry: null,  
                passportIssue: null,  
                eid: '784196902615754',  
                eidIssue: null,  
                eidExpiry: null,  
                unifiedId: '586780',  
                dob: '1969-07-01',  
                gender: 'M',  
                minor: false,  
                minorType: null,  
                email: 'rashmi_local@mailinator.com',  
                mobileNumber: '+971-5440587209',  
                address: '345678',  
                pobox: null,  
                area: null,  
                memberMakani: null,  
                emirates: 32,  
                verificationType: 1,  
                coreUserId: null,  
                personType: 0,  
                personCategory: 0,  
                errors: null,  
                state: null,  
                documentId: null,  
                completed: false,  
                srcOfIncome: [  
                  {  
                    code: '2',  
                    valueEn: 'Personal Investments/ Personal Funding',  
                    valueAr: 'الاستثمارات الشخصية/ التمويل الشخصي',  
                    id: 801  
                  }  
                ],  
                srcOfIncomeComment: null,  
                srcOfIncomeCountries: [  
                  {  
                    code: 'AFG',  
                    valueEn: 'Afghanistan',  
                    valueAr: 'افغانستان',  
                    id: 209  
                  }  
                ],  
                srcOfIncomeBanks: [],  
                srcOfIncomeBankComment: 'wertyui',  
                politicalExposed: 2,  
                politicalExposedType: null,  
                politicalExposedComment: null,  
                politicalExposedAssoc: 2,  
                politicalExposedDtls: [],  
                associatedIdentifier: null  
              }  
            ],  
            uboDeclared: false  
          },  
          ejariDetails: [  
            {  
              tenancyContractStartDate: '7/1/2021',  
              tenancyContractEndDate: '7/30/2028',  
              landLordInformation: {  
                EnglishDesc: 'AL SAYYAH & SONS INVESTMENT (L.L.C.)',  
                ArabicDesc: 'الصياح وابناؤه للاستثمار (ش . ذ . م . م )'              },  
              tenantInformation: {  
                EnglishDesc: 'PLUS POINT SUPERMARKET L.L.C',  
                ArabicDesc: 'سوبرماركت بلاس بوينت ش.ذ.م.م '              },  
              buildingName: '610',  
              landArea: {  
                valueEn: 'Business Bay',  
                valueAr: 'الخليج التجارى'  
              },  
              landNumber: '157',  
              uaeNGNo: '',  
              location: {  
                Latitude: '25.1877320070032',  
                Longitude: '55.270759539'  
              },  
              makaniNumber: '25752 86855',  
              contractNumber: '0120210711005428',  
              contractAnnualAmount: '75000',  
              region: {  
                valueEn: 'Dubai',  
                valueAr: 'دبي'  
              },  
              propertyDetails: [  
                {  
                  propertyNumber: '610',  
                  propertyType: 'Office',  
                  propertySubType: 'Office',  
                  propertyUsage: 'Commercial',  
                  dewa: '345920384',  
                  size: '200'  
                }  
              ],  
              licenseIssuer: 'DED'  
            },  
            {  
              tenancyContractStartDate: '6/7/2021',  
              tenancyContractEndDate: '6/6/2028',  
              landLordInformation: {  
                EnglishDesc: 'AL SAYYAH & SONS INVESTMENT (L.L.C.)',  
                ArabicDesc: 'الصياح وابناؤه للاستثمار (ش . ذ . م . م )'              },  
              tenantInformation: {  
                EnglishDesc: 'PLUS POINT SUPERMARKET L.L.C',  
                ArabicDesc: 'سوبرماركت بلاس بوينت ش.ذ.م.م '              },  
              buildingName: '1001',  
              landArea: {  
                valueEn: 'Business Bay',  
                valueAr: 'الخليج التجارى'  
              },  
              landNumber: '157',  
              uaeNGNo: '',  
              location: {  
                Latitude: '25.1877320070032',  
                Longitude: '55.270759539'  
              },  
              makaniNumber: '25752 86855',  
              contractNumber: '0120210607005195',  
              contractAnnualAmount: '4000',  
              region: {  
                valueEn: 'Dubai',  
                valueAr: 'دبي'  
              },  
              propertyDetails: [  
                {  
                  propertyNumber: '1001',  
                  propertyType: 'Office',  
                  propertySubType: 'Office',  
                  propertyUsage: 'Commercial',  
                  dewa: '345920384',  
                  size: '47.13'  
                }  
              ],  
              licenseIssuer: 'DED'  
            },  
            {  
              tenancyContractStartDate: '5/19/2021',  
              tenancyContractEndDate: '7/18/2021',  
              landLordInformation: {  
                EnglishDesc: 'AL SAYYAH & SONS INVESTMENT (L.L.C.)',  
                ArabicDesc: 'الصياح وابناؤه للاستثمار (ش . ذ . م . م )'              },  
              tenantInformation: {  
                EnglishDesc: 'PLUS POINT SUPERMARKET L.L.C',  
                ArabicDesc: 'سوبرماركت بلاس بوينت ش.ذ.م.م '              },  
              buildingName: '1716',  
              landArea: {  
                valueEn: 'Al Safouh Second',  
                valueAr: 'الصفوح الثانيه'  
              },  
              landNumber: '11',  
              uaeNGNo: '',  
              location: {  
                Latitude: '25.0893708130032',  
                Longitude: '55.1531770290024'  
              },  
              makaniNumber: '13752 76117',  
              contractNumber: '0120210519004996',  
              contractAnnualAmount: '85232.88',  
              region: {  
                valueEn: 'Dubai',  
                valueAr: 'دبي'  
              },  
              propertyDetails: [  
                {  
                  propertyNumber: '1716',  
                  propertyType: 'Office',  
                  propertySubType: 'Office',  
                  propertyUsage: 'Commercial',  
                  dewa: '511014252',  
                  size: '44.78'  
                }  
              ],  
              licenseIssuer: 'DED'  
            }  
          ],  
          representations: {  
            representations: []  
          }  
        },  
        requirementsPending: true,  
        stopExecution: false,  
        autoApprove: false  
      }  
    }  
  }  
})

