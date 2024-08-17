- [Global Vue API is changed to use an application instance](https://v3-migration.vuejs.org/breaking-changes/global-api)

<ChildComponent v-model="pageTitle" />

<!-- would be shorthand for: -->

```
<ChildComponent v-model="pageTitle" />

<!-- would be shorthand for: -->

<ChildComponent
  :modelValue="pageTitle"
  @update:modelValue="pageTitle = $event"
/>
```

```
<ChildComponent :title.sync="pageTitle" /> <!-- to be replaced with --> <ChildComponent v-model:title="pageTitle" />
```

- for all `v-model`s without arguments, make sure to change props and events name to `modelValue` and `update:modelValue` respectively
  html
  ```
  <ChildComponent v-model="pageTitle" />
  ```
  js
  ```
  // ChildComponent.vue

  export default {
    props: {
      modelValue: String
      // previously was `value: String`
    },
    emits: ['update:modelValue'],
    methods: {
      changePageTitle(title) {
        this.$emit('update:modelValue', title)
        // previously was `this.$emit('input', title)`
      }
    }
  }
  ```

change above code to vue3, vuetiffy3, nuxt 3
keep optional api and do as minimum changes as possible
don't remove comment
only do must do changes


[
    {
        "licenseId": 150152344,
        "dedLicenseNumber": 1002990,
        "licenseExpireDate": "2023-08-03T04:00:00",
        "tradeName": {
            "valueEn": "DEVA LUTA FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "دفا لوطا لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 15052178
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004082,
        "dedLicenseNumber": 1007022,
        "licenseExpireDate": "2025-07-31T04:00:00",
        "tradeName": {
            "valueEn": "202408011623 CO. L.L.C",
            "valueAr": "202408011623 شركة الشخص الواحد  ذ.م.م",
            "id": 18003912
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004080,
        "dedLicenseNumber": 1007021,
        "licenseExpireDate": "2025-07-31T04:00:00",
        "tradeName": {
            "valueEn": "202408011608 CO. L.L.C",
            "valueAr": "202408011608 شركة الشخص الواحد  ذ.م.م",
            "id": 18003910
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 120002111,
        "dedLicenseNumber": 1002773,
        "licenseExpireDate": "2023-06-22T04:00:00",
        "tradeName": {
            "valueEn": "DUPLIVATONA MITAVOSI FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "دبليفتنا لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 13002027
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 150152377,
        "dedLicenseNumber": 1003028,
        "licenseExpireDate": "2023-08-08T04:00:00",
        "tradeName": {
            "valueEn": "GORE GORE MUKHDE FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "جوري جوري مخد لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 15052221
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 150152376,
        "dedLicenseNumber": 1003027,
        "licenseExpireDate": "2023-08-08T04:00:00",
        "tradeName": {
            "valueEn": "CHAALO RE CHAALO FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "شاله لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 15052219
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 150152433,
        "dedLicenseNumber": 1003075,
        "licenseExpireDate": "2023-08-14T04:00:00",
        "tradeName": {
            "valueEn": "TURISTA PILO FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "تريستا بيل لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 15052295
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004022,
        "dedLicenseNumber": 1007005,
        "licenseExpireDate": "2025-07-31T04:00:00",
        "tradeName": {
            "valueEn": "202408010951 CO. L.L.C",
            "valueAr": "202408010951 شركة الشخص الواحد  ذ.م.م",
            "id": 18003864
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003867,
        "dedLicenseNumber": 1005379,
        "licenseExpireDate": "2024-09-22T04:00:00",
        "tradeName": {
            "valueEn": "20230923101530 FOR ROSE WATER BOTTLING CO. L.L.C",
            "valueAr": "٢٠٢٣٠٩٢٣١٠١٥٣٠ لتعبئة ماء الورد شركة الشخص الواحد  ذ.م.م",
            "id": 18003710
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 120002121,
        "dedLicenseNumber": 1002776,
        "licenseExpireDate": "2023-06-22T04:00:00",
        "tradeName": {
            "valueEn": "GUJGUJU KALUDILA FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "جوججج كالأدلا لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 13002039
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003866,
        "dedLicenseNumber": 1002942,
        "licenseExpireDate": "2023-07-25T04:00:00",
        "tradeName": {
            "valueEn": "KOLA VERI DI FOR SHISHA SERVICES CO. L.L.C",
            "valueAr": "كلا فري لخدمات تقديم الشيشة شركة الشخص الواحد  ذ.م.م",
            "id": 18003709
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 150152432,
        "dedLicenseNumber": 1003074,
        "licenseExpireDate": "2023-08-14T04:00:00",
        "tradeName": {
            "valueEn": "HUNGAMA SE FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "هونجما ص لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 15052293
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 150152347,
        "dedLicenseNumber": 1002994,
        "licenseExpireDate": "2023-08-03T04:00:00",
        "tradeName": {
            "valueEn": "DILRUNA CHILA FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "ديلرنا شيلى لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 15052185
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 150152351,
        "dedLicenseNumber": 1002999,
        "licenseExpireDate": "2023-08-03T04:00:00",
        "tradeName": {
            "valueEn": "DINAPOOL GYMOU FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "ذنبل جيم لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 15052189
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 120052170,
        "dedLicenseNumber": 1002845,
        "licenseExpireDate": "2023-06-30T04:00:00",
        "tradeName": {
            "valueEn": "PUNGA DOLI MELU FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "بونج دولي مل لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 13052084
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004564,
        "dedLicenseNumber": 1007166,
        "licenseExpireDate": "2025-08-12T04:00:00",
        "tradeName": {
            "valueEn": "202408131554 CO. L.L.C",
            "valueAr": "202408131554 شركة الشخص الواحد  ذ.م.م",
            "id": 18004380
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003045,
        "dedLicenseNumber": 1006676,
        "licenseExpireDate": "2025-06-04T04:00:00",
        "tradeName": {
            "valueEn": "LLCSOAGAIN FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "لكسجن لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 18002861
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004024,
        "dedLicenseNumber": 1007007,
        "licenseExpireDate": "2025-07-31T04:00:00",
        "tradeName": {
            "valueEn": "202408011004 CO. L.L.C",
            "valueAr": "202408011004 شركة الشخص الواحد  ذ.م.م",
            "id": 18003866
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003863,
        "dedLicenseNumber": 1005389,
        "licenseExpireDate": "2024-09-24T04:00:00",
        "tradeName": {
            "valueEn": "20230925114932 FOR ROSE WATER BOTTLING CO. L.L.C",
            "valueAr": "٢٠٢٣٠٩٢٥١١٤٩٣٢ لتعبئة ماء الورد شركة الشخص الواحد  ذ.م.م",
            "id": 18003707
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 150152343,
        "dedLicenseNumber": 1002989,
        "licenseExpireDate": "2023-08-03T04:00:00",
        "tradeName": {
            "valueEn": "TERA MERA RISHTA FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "ترى مرة ريشت لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 15052176
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 120002122,
        "dedLicenseNumber": 1002778,
        "licenseExpireDate": "2023-06-22T04:00:00",
        "tradeName": {
            "valueEn": "DUKARTEE SIMONA CHII FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "ذكرتي سيمون شي لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 13002040
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004572,
        "dedLicenseNumber": 1007173,
        "licenseExpireDate": "2025-08-12T04:00:00",
        "tradeName": {
            "valueEn": "202408132129 CO. L.L.C",
            "valueAr": "202408132129 شركة الشخص الواحد  ذ.م.م",
            "id": 18004390
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 120052191,
        "dedLicenseNumber": 1002876,
        "licenseExpireDate": "2023-07-05T04:00:00",
        "tradeName": {
            "valueEn": "LO BHAI BANN GAYA FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "سغعلغع ثلع غغعزدع لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 13052103
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 120002110,
        "dedLicenseNumber": 1002772,
        "licenseExpireDate": "2023-06-22T04:00:00",
        "tradeName": {
            "valueEn": "DUNDUNDUN CHULAKA FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "دندوندن شلاقة لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 13002026
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 90438192,
        "dedLicenseNumber": 929296,
        "licenseExpireDate": "2022-05-25T04:00:00",
        "tradeName": {
            "valueEn": "TESTAFTERNIZAMFIXES FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "تستفترنزمفكسص لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 9007921
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002401,
        "dedLicenseNumber": 1006412,
        "licenseExpireDate": "2025-04-04T04:00:00",
        "tradeName": {
            "valueEn": "DRXTDYF VHUI FOR WEB-DESIGN CO. L.L.C",
            "valueAr": "دركستديف لتصميم مواقع الشبكة المعلوماتية ( الانترنت) شركة الشخص الواحد  ذ.م.م",
            "id": 18002192
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 150152365,
        "dedLicenseNumber": 1003012,
        "licenseExpireDate": "2023-08-04T04:00:00",
        "tradeName": {
            "valueEn": "DUGIL BJARA FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "دجل بجرة لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 15052203
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 90438242,
        "dedLicenseNumber": 929412,
        "licenseExpireDate": "2022-05-30T04:00:00",
        "tradeName": {
            "valueEn": "TEST FOR WEB-DESIGN CO. L.L.C",
            "valueAr": "تيست لتصميم مواقع الشبكة المعلوماتية ( الانترنت) شركة الشخص الواحد  ذ.م.م",
            "id": 9007995
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004554,
        "dedLicenseNumber": 1007162,
        "licenseExpireDate": "2025-08-12T04:00:00",
        "tradeName": {
            "valueEn": "202408131448 CO. L.L.C",
            "valueAr": "202408131448 شركة الشخص الواحد  ذ.م.م",
            "id": 18004375
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004536,
        "dedLicenseNumber": 1007156,
        "licenseExpireDate": "2025-08-12T04:00:00",
        "tradeName": {
            "valueEn": "202408130934 CO. L.L.C",
            "valueAr": "202408130934 شركة الشخص الواحد  ذ.م.م",
            "id": 18004359
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004270,
        "dedLicenseNumber": 1007071,
        "licenseExpireDate": "2025-08-05T04:00:00",
        "tradeName": {
            "valueEn": "LOPAOPS FOR GROWING OF VEGETABLES CO. L.L.C",
            "valueAr": "لبابس لزراعة الخضروات شركة الشخص الواحد  ذ.م.م",
            "id": 18004103
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 150152380,
        "dedLicenseNumber": 1003030,
        "licenseExpireDate": "2023-08-08T04:00:00",
        "tradeName": {
            "valueEn": "BADE LOKE BETI LOG FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "بعد لك بيتي لج لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 15052224
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 90440094,
        "dedLicenseNumber": 1000066,
        "licenseExpireDate": "2022-09-13T04:00:00",
        "tradeName": {
            "valueEn": "YELLOW GUAVA FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "يلو جافا لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 9010142
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002246,
        "dedLicenseNumber": 1006325,
        "licenseExpireDate": "2025-03-10T04:00:00",
        "tradeName": {
            "valueEn": "WITHOUTUBO FOR SILOS MANUFACTURING CO. L.L.C",
            "valueAr": "وتحتوبه لصناعة صوامع التخزين شركة الشخص الواحد  ذ.م.م",
            "id": 18001991
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 150152349,
        "dedLicenseNumber": 1002997,
        "licenseExpireDate": "2023-08-03T04:00:00",
        "tradeName": {
            "valueEn": "TAUNI TATANTA FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "توني تتنتا لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 15052187
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 150152368,
        "dedLicenseNumber": 1003016,
        "licenseExpireDate": "2023-08-07T04:00:00",
        "tradeName": {
            "valueEn": "TOYEHI LOGA PATHA FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "تيهي لغة بذا لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 15052209
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004030,
        "dedLicenseNumber": 1007009,
        "licenseExpireDate": "2025-07-31T04:00:00",
        "tradeName": {
            "valueEn": "202408011029 CO. L.L.C",
            "valueAr": "202408011029 شركة الشخص الواحد  ذ.م.م",
            "id": 18003869
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004573,
        "dedLicenseNumber": 1007174,
        "licenseExpireDate": "2025-08-12T04:00:00",
        "tradeName": {
            "valueEn": "SEARCHING CO. L.L.C",
            "valueAr": "البحث شركة الشخص الواحد  ذ.م.م",
            "id": 18004391
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004546,
        "dedLicenseNumber": 1007159,
        "licenseExpireDate": "2025-08-12T04:00:00",
        "tradeName": {
            "valueEn": "202408131203 CO. L.L.C",
            "valueAr": "202408131203 شركة الشخص الواحد  ذ.م.م",
            "id": 18004369
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 150152340,
        "dedLicenseNumber": 1002987,
        "licenseExpireDate": "2023-08-03T04:00:00",
        "tradeName": {
            "valueEn": "TREI LOGUI CHESSA FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "تري لغوي كسى لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 15052172
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 150152366,
        "dedLicenseNumber": 1003013,
        "licenseExpireDate": "2023-08-04T04:00:00",
        "tradeName": {
            "valueEn": "FYUING GUYSD FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "فينج جويسد لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 15052204
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002154,
        "dedLicenseNumber": 1006265,
        "licenseExpireDate": "2025-03-07T04:00:00",
        "tradeName": {
            "valueEn": "EVERYDAY FOR SILOS MANUFACTURING CO. L.L.C",
            "valueAr": "فريدي لصناعة صوامع التخزين شركة الشخص الواحد  ذ.م.م",
            "id": 18001914
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 90440074,
        "dedLicenseNumber": 1000053,
        "licenseExpireDate": "2022-09-11T04:00:00",
        "tradeName": {
            "valueEn": "345345.55888 FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "٣٤٥٣٤٥.٥٥٨٨٨ لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 9010116
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003854,
        "dedLicenseNumber": 1005381,
        "licenseExpireDate": "2024-09-22T04:00:00",
        "tradeName": {
            "valueEn": "20230923190602 FOR ROSE WATER BOTTLING CO. L.L.C",
            "valueAr": "٢٠٢٣٠٩٢٣١٩٠٦٠٢ لتعبئة ماء الورد شركة الشخص الواحد  ذ.م.م",
            "id": 18003699
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002618,
        "dedLicenseNumber": 1006648,
        "licenseExpireDate": "2025-05-29T04:00:00",
        "tradeName": {
            "valueEn": "KILFULGUL FOR WEB-DESIGN CO. L.L.C",
            "valueAr": "كلفلجل لتصميم مواقع الشبكة المعلوماتية ( الانترنت) شركة الشخص الواحد  ذ.م.م",
            "id": 18002802
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002262,
        "dedLicenseNumber": 1006337,
        "licenseExpireDate": "2025-03-10T04:00:00",
        "tradeName": {
            "valueEn": "JUMKJUMK FOR SILOS MANUFACTURING CO. L.L.C",
            "valueAr": "جومكجومك لصناعة صوامع التخزين شركة الشخص الواحد  ذ.م.م",
            "id": 18002003
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 150152379,
        "dedLicenseNumber": 1003029,
        "licenseExpireDate": "2023-08-08T04:00:00",
        "tradeName": {
            "valueEn": "THODA SBR KRO FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "تحدى صبر كره لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 15052223
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003853,
        "dedLicenseNumber": 1002922,
        "licenseExpireDate": "2023-07-21T04:00:00",
        "tradeName": {
            "valueEn": "CHABRA KA COLA FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "شبرا كا كلا لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 18003698
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 150152350,
        "dedLicenseNumber": 1002998,
        "licenseExpireDate": "2023-08-03T04:00:00",
        "tradeName": {
            "valueEn": "TELUMA BUNNA FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "طلما بنا لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 15052188
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004019,
        "dedLicenseNumber": 1007003,
        "licenseExpireDate": "2025-07-31T04:00:00",
        "tradeName": {
            "valueEn": "202408010918 CO. L.L.C",
            "valueAr": "202408010918 شركة الشخص الواحد  ذ.م.م",
            "id": 18003862
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 150152348,
        "dedLicenseNumber": 1002995,
        "licenseExpireDate": "2023-08-03T04:00:00",
        "tradeName": {
            "valueEn": "GALI GALI FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "غالي غالي لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 15052186
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003850,
        "dedLicenseNumber": 1005382,
        "licenseExpireDate": "2024-09-22T04:00:00",
        "tradeName": {
            "valueEn": "20230923191953 FOR ROSE WATER BOTTLING CO. L.L.C",
            "valueAr": "٢٠٢٣٠٩٢٣١٩١٩٥٣ لتعبئة ماء الورد شركة الشخص الواحد  ذ.م.م",
            "id": 18003695
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 90438148,
        "dedLicenseNumber": 929249,
        "licenseExpireDate": "2022-05-24T04:00:00",
        "tradeName": {
            "valueEn": "FREEHOLDBYIRAQI FOR CENTRAL AIR-CONDITIONING REQUISITES MANUFACTURING CO. L.L.C",
            "valueAr": "فرحلدبيرق لصناعة مستلزمات  انظمة تكييف  الهواء المركزية شركة الشخص الواحد  ذ.م.م",
            "id": 9007870
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003849,
        "dedLicenseNumber": 1005405,
        "licenseExpireDate": "2024-09-25T04:00:00",
        "tradeName": {
            "valueEn": "20230926104849 FOR ROSE WATER BOTTLING CO. L.L.C",
            "valueAr": "٢٠٢٣٠٩٢٦١٠٤٨٤٩ لتعبئة ماء الورد شركة الشخص الواحد  ذ.م.م",
            "id": 18003694
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003847,
        "dedLicenseNumber": 1003182,
        "licenseExpireDate": "2023-08-28T04:00:00",
        "tradeName": {
            "valueEn": "ZEBRACROSSING HOSE FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "زبركرسنج هوس لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 18003692
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 150152382,
        "dedLicenseNumber": 1003033,
        "licenseExpireDate": "2023-08-08T04:00:00",
        "tradeName": {
            "valueEn": "CHANGE KRNA PADEGA FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "شانج قرنا بعدج لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 15052226
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 120052192,
        "dedLicenseNumber": 1002879,
        "licenseExpireDate": "2023-07-06T04:00:00",
        "tradeName": {
            "valueEn": "CHAL BE NIKAL FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "لدع يبعغدثعب يغعد لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 13052104
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003290,
        "dedLicenseNumber": 1006727,
        "licenseExpireDate": "2025-06-26T04:00:00",
        "tradeName": {
            "valueEn": "TESTPAYMENT FOR WEB-DESIGN CO. L.L.C",
            "valueAr": "تستبيمنة لتصميم مواقع الشبكة المعلوماتية ( الانترنت) شركة الشخص الواحد  ذ.م.م",
            "id": 18002869
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 90439110,
        "dedLicenseNumber": 930061,
        "licenseExpireDate": "2022-06-15T04:00:00",
        "tradeName": {
            "valueEn": "12772MCN.MM FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "١٢٧٧٢مسن.م لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 9008899
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 150152356,
        "dedLicenseNumber": 1003006,
        "licenseExpireDate": "2023-08-04T04:00:00",
        "tradeName": {
            "valueEn": "DTREENGA CHUNGA FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "دترنجا شونج لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 15052197
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003843,
        "dedLicenseNumber": 1003193,
        "licenseExpireDate": "2023-08-29T04:00:00",
        "tradeName": {
            "valueEn": "LICMEM INTANTLIC KARO FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "ليكمم انتنتلك كره لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 18003689
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 90438160,
        "dedLicenseNumber": 929261,
        "licenseExpireDate": "2022-05-25T04:00:00",
        "tradeName": {
            "valueEn": "26052021THEACTIVITYISNOTFREEHOLD FOR SHIP CHANDLERS CO. L.L.C",
            "valueAr": "????????ثياستيفيتييسنوتفرييهولد لتعهدات تزويد السفن والبواخر شركة الشخص الواحد  ذ.م.م",
            "id": 9007882
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003044,
        "dedLicenseNumber": 1006675,
        "licenseExpireDate": "2025-06-04T04:00:00",
        "tradeName": {
            "valueEn": "LLCSONORM1234 FOR WEB-DESIGN CO. L.L.C",
            "valueAr": "للسسونورم١٢٣٤ لتصميم مواقع الشبكة المعلوماتية ( الانترنت) شركة الشخص الواحد  ذ.م.م",
            "id": 18002860
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 150152375,
        "dedLicenseNumber": 1003026,
        "licenseExpireDate": "2023-08-08T04:00:00",
        "tradeName": {
            "valueEn": "PHODA THIK KARWAO FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "فوضى ذيك قاروه لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 15052218
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003842,
        "dedLicenseNumber": 1005380,
        "licenseExpireDate": "2024-09-22T04:00:00",
        "tradeName": {
            "valueEn": "20230923161458 FOR ROSE WATER BOTTLING CO. L.L.C",
            "valueAr": "٢٠٢٣٠٩٢٣١٦١٤٥٨ لتعبئة ماء الورد شركة الشخص الواحد  ذ.م.م",
            "id": 18003688
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 150152369,
        "dedLicenseNumber": 1003017,
        "licenseExpireDate": "2023-08-07T04:00:00",
        "tradeName": {
            "valueEn": "BAJRANG DAL FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "بجرنج دل لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 15052210
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004563,
        "dedLicenseNumber": 1007164,
        "licenseExpireDate": "2025-08-12T04:00:00",
        "tradeName": {
            "valueEn": "202408131534 CO. L.L.C",
            "valueAr": "202408131534 شركة الشخص الواحد  ذ.م.م",
            "id": 18004378
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 150152391,
        "dedLicenseNumber": 1003044,
        "licenseExpireDate": "2023-08-09T04:00:00",
        "tradeName": {
            "valueEn": "JHUMKA GIRA RE FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "جهمكا غير لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 15052237
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004083,
        "dedLicenseNumber": 1007023,
        "licenseExpireDate": "2025-07-31T04:00:00",
        "tradeName": {
            "valueEn": "202408011629 CO. L.L.C",
            "valueAr": "202408011629 شركة الشخص الواحد  ذ.م.م",
            "id": 18003913
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 150152372,
        "dedLicenseNumber": 1003024,
        "licenseExpireDate": "2023-08-08T04:00:00",
        "tradeName": {
            "valueEn": "TERACOTA PHILLO FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "تركت فيله لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 15052212
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 150152363,
        "dedLicenseNumber": 1003009,
        "licenseExpireDate": "2023-08-04T04:00:00",
        "tradeName": {
            "valueEn": "GOBINELA HUDRA FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "جبينلا حضرة لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 15052201
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004535,
        "dedLicenseNumber": 1007167,
        "licenseExpireDate": "2025-08-12T04:00:00",
        "tradeName": {
            "valueEn": "202408130930 CO. L.L.C",
            "valueAr": "202408130930 شركة الشخص الواحد  ذ.م.م",
            "id": 18004358
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004214,
        "dedLicenseNumber": 1007056,
        "licenseExpireDate": "2025-08-04T04:00:00",
        "tradeName": {
            "valueEn": "202408021009 CO. L.L.C",
            "valueAr": "202408021009 شركة الشخص الواحد  ذ.م.م",
            "id": 18003945
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 150152364,
        "dedLicenseNumber": 1003011,
        "licenseExpireDate": "2023-08-04T04:00:00",
        "tradeName": {
            "valueEn": "JUMANI TULAFI FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "جمعني تلافي لتجارة الملابس  والازياء الرسمية شركة الشخص الواحد  ذ.م.م",
            "id": 15052202
        },
        "legalType": {
            "valueEn": "Limited Liability Company - Single Owner(LLC - SO) ",
            "valueAr": "شركة ذات مسؤولية محدودة - الشخص الواحد (ذ.م.م.)\n",
            "id": 28
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003128,
        "dedLicenseNumber": 1006704,
        "licenseExpireDate": "2025-06-19T04:00:00",
        "tradeName": {
            "valueEn": "180003128 FOR UNIFORMS TRADING PARTNERSHIP COMPANY",
            "valueAr": "١٨٠٠٠٣١٢٨ لتجارة الملابس  والازياء الرسمية شركة تضامنية",
            "id": 18002974
        },
        "legalType": {
            "valueEn": "Partnership Company.",
            "valueAr": "تضامنية",
            "id": 1
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004103,
        "dedLicenseNumber": 1007026,
        "licenseExpireDate": "2025-08-01T04:00:00",
        "tradeName": {
            "valueEn": "202408020828 CO. L.L.C",
            "valueAr": "202408020828 ذ.م.م",
            "id": 18003936
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004094,
        "dedLicenseNumber": 1007024,
        "licenseExpireDate": "2025-07-31T04:00:00",
        "tradeName": {
            "valueEn": "202408011904 LLC",
            "valueAr": "202408011904 ذ م م",
            "id": 18003923
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002166,
        "dedLicenseNumber": 1006276,
        "licenseExpireDate": "2025-03-07T04:00:00",
        "tradeName": {
            "valueEn": "202403081153 FOR HERBS PACKAGING CO. L.L.C",
            "valueAr": "٢٠٢٤٠٣٠٨١١٥٣ لتعبئة النباتات  العشبية ذ.م.م",
            "id": 18001926
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001678,
        "dedLicenseNumber": 1006025,
        "licenseExpireDate": "2025-02-15T04:00:00",
        "tradeName": {
            "valueEn": "202402160954 FOR HERBS PACKAGING CO. L.L.C",
            "valueAr": "٢٠٢٤٠٢١٦٠٩٥٤ لتعبئة النباتات  العشبية ذ.م.م",
            "id": 18001557
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 90440341,
        "dedLicenseNumber": 1000435,
        "licenseExpireDate": "2022-11-01T04:00:00",
        "tradeName": {
            "valueEn": "GHFJGMNBGFDS FOR FISH & SEAFOOD CANNING & PRESERVING CO. L.L.C",
            "valueAr": "غفججمنبجفدس لتعليب  الاسماك والاغذية البحرية وحفظها ذ.م.م",
            "id": 9010454
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 90438196,
        "dedLicenseNumber": 929300,
        "licenseExpireDate": "2022-05-25T04:00:00",
        "tradeName": {
            "valueEn": "SURAJCHAND FOR SHIP CHANDLERS CO. L.L.C",
            "valueAr": "سراجشند لتعهدات تزويد السفن والبواخر ذ.م.م",
            "id": 9007925
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002064,
        "dedLicenseNumber": 1006226,
        "licenseExpireDate": "2025-03-04T04:00:00",
        "tradeName": {
            "valueEn": "202403051114 FOR HERBS PACKAGING CO. L.L.C",
            "valueAr": "٢٠٢٤٠٣٠٥١١١٤ لتعبئة النباتات  العشبية ذ.م.م",
            "id": 18001852
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001646,
        "dedLicenseNumber": 1006013,
        "licenseExpireDate": "2025-02-13T04:00:00",
        "tradeName": {
            "valueEn": "202402141546 FOR HERBS PACKAGING CO. L.L.C",
            "valueAr": "٢٠٢٤٠٢١٤١٥٤٦ لتعبئة النباتات  العشبية ذ.م.م",
            "id": 18001539
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 90440350,
        "dedLicenseNumber": 1000446,
        "licenseExpireDate": "2022-11-02T04:00:00",
        "tradeName": {
            "valueEn": "43567854678987654 FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "٤٣٥٦٧٨٥٤٦٧٨٩٨٧٦٥٤ لتجارة الملابس  والازياء الرسمية ذ.م.م",
            "id": 9010463
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004240,
        "dedLicenseNumber": 1007066,
        "licenseExpireDate": "2025-08-04T04:00:00",
        "tradeName": {
            "valueEn": "SUN MOON PORTAL LLC",
            "valueAr": "مجمع للتعامل الإلكتروني السيد شينشو ذ م م",
            "id": 18004065
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003864,
        "dedLicenseNumber": 1002944,
        "licenseExpireDate": "2023-07-25T04:00:00",
        "tradeName": {
            "valueEn": "CHANGA CHUICHA FOR SHISHA SERVICES CO. L.L.C",
            "valueAr": "شانج شيشة لخدمات تقديم الشيشة ذ.م.م",
            "id": 18003708
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001676,
        "dedLicenseNumber": 1006023,
        "licenseExpireDate": "2025-02-15T04:00:00",
        "tradeName": {
            "valueEn": "202402160925 FOR HERBS PACKAGING CO. L.L.C",
            "valueAr": "٢٠٢٤٠٢١٦٠٩٢٥ لتعبئة النباتات  العشبية ذ.م.م",
            "id": 18001555
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003994,
        "dedLicenseNumber": 1006995,
        "licenseExpireDate": "2025-07-30T04:00:00",
        "tradeName": {
            "valueEn": "SUNDRY PORTAL CO. L.L.C",
            "valueAr": "مجمع للتعامل الإلكتروني سندر ذ.م.م",
            "id": 18003841
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004485,
        "dedLicenseNumber": 1007145,
        "licenseExpireDate": "2025-08-11T04:00:00",
        "tradeName": {
            "valueEn": "202408121039 CO. L.L.C",
            "valueAr": "202408121039 ذ.م.م",
            "id": 18004326
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004104,
        "dedLicenseNumber": 1007027,
        "licenseExpireDate": "2025-08-01T04:00:00",
        "tradeName": {
            "valueEn": "202408020902 CO. L.L.C",
            "valueAr": "202408020902 ذ.م.م",
            "id": 18003938
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003124,
        "dedLicenseNumber": 1006701,
        "licenseExpireDate": "2025-06-18T04:00:00",
        "tradeName": {
            "valueEn": "180003124 FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "١٨٠٠٠٣١٢٤ لتجارة الملابس  والازياء الرسمية ذ.م.م",
            "id": 18002938
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002074,
        "dedLicenseNumber": 1006234,
        "licenseExpireDate": "2025-03-04T04:00:00",
        "tradeName": {
            "valueEn": "202403051406 FOR HERBS PACKAGING CO. L.L.C",
            "valueAr": "٢٠٢٤٠٣٠٥١٤٠٦ لتعبئة النباتات  العشبية ذ.م.م",
            "id": 18001861
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002107,
        "dedLicenseNumber": 1006242,
        "licenseExpireDate": "2025-03-05T04:00:00",
        "tradeName": {
            "valueEn": "202403060929 FOR HERBS PACKAGING CO. L.L.C",
            "valueAr": "٢٠٢٤٠٣٠٦٠٩٢٩ لتعبئة النباتات  العشبية ذ.م.م",
            "id": 18001871
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001642,
        "dedLicenseNumber": 1006012,
        "licenseExpireDate": "2025-02-13T04:00:00",
        "tradeName": {
            "valueEn": "202402141503 FOR HERBS PACKAGING CO. L.L.C",
            "valueAr": "٢٠٢٤٠٢١٤١٥٠٣ لتعبئة النباتات  العشبية ذ.م.م",
            "id": 18001535
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004102,
        "dedLicenseNumber": 1007025,
        "licenseExpireDate": "2025-08-01T04:00:00",
        "tradeName": {
            "valueEn": "202408020818 CO. L.L.C",
            "valueAr": "202408020818 ذ.م.م",
            "id": 18003935
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003123,
        "dedLicenseNumber": 1006700,
        "licenseExpireDate": "2025-06-18T04:00:00",
        "tradeName": {
            "valueEn": "180003123 FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "١٨٠٠٠٣١٢٣ لتجارة الملابس  والازياء الرسمية ذ.م.م",
            "id": 18002937
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001660,
        "dedLicenseNumber": 1006018,
        "licenseExpireDate": "2025-02-14T04:00:00",
        "tradeName": {
            "valueEn": "202402150852 FOR HERBS PACKAGING CO. L.L.C",
            "valueAr": "٢٠٢٤٠٢١٥٠٨٥٢ لتعبئة النباتات  العشبية ذ.م.م",
            "id": 18001546
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002109,
        "dedLicenseNumber": 1006243,
        "licenseExpireDate": "2025-03-05T04:00:00",
        "tradeName": {
            "valueEn": "202403061049 FOR HERBS PACKAGING CO. L.L.C",
            "valueAr": "٢٠٢٤٠٣٠٦١٠٤٩ لتعبئة النباتات  العشبية ذ.م.م",
            "id": 18001872
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004488,
        "dedLicenseNumber": 1007146,
        "licenseExpireDate": "2025-08-11T04:00:00",
        "tradeName": {
            "valueEn": "202408121110 CO. L.L.C",
            "valueAr": "202408121110 ذ.م.م",
            "id": 18004328
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 150152342,
        "dedLicenseNumber": 1002988,
        "licenseExpireDate": "2023-08-03T04:00:00",
        "tradeName": {
            "valueEn": "KEHTA HAI DIL. FOR UNIFORMS TRADING CO. L.L.C",
            "valueAr": "قحط هي ديل. لتجارة الملابس  والازياء الرسمية ذ.م.م",
            "id": 15052174
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001657,
        "dedLicenseNumber": 1006017,
        "licenseExpireDate": "2025-02-14T04:00:00",
        "tradeName": {
            "valueEn": "202402150834 FOR HERBS PACKAGING CO. L.L.C",
            "valueAr": "٢٠٢٤٠٢١٥٠٨٣٤ لتعبئة النباتات  العشبية ذ.م.م",
            "id": 18001545
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003998,
        "dedLicenseNumber": 1006996,
        "licenseExpireDate": "2025-07-30T04:00:00",
        "tradeName": {
            "valueEn": "180003992 CO. L.L.C",
            "valueAr": "180003992 ذ.م.م",
            "id": 18003844
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003857,
        "dedLicenseNumber": 1002941,
        "licenseExpireDate": "2023-07-25T04:00:00",
        "tradeName": {
            "valueEn": "NAHI SAMNE YE ALAG BAAT HAI FOR SHISHA SERVICES CO. L.L.C",
            "valueAr": "نهي سمن ي الأج بات لخدمات تقديم الشيشة ذ.م.م",
            "id": 18003702
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003856,
        "dedLicenseNumber": 1002945,
        "licenseExpireDate": "2023-07-25T04:00:00",
        "tradeName": {
            "valueEn": "DOPEING TUING FOR SHISHA SERVICES CO. L.L.C",
            "valueAr": "دبينج تونج لخدمات تقديم الشيشة ذ.م.م",
            "id": 18003701
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001682,
        "dedLicenseNumber": 1006027,
        "licenseExpireDate": "2025-02-15T04:00:00",
        "tradeName": {
            "valueEn": "202402161148 FOR HERBS PACKAGING CO. L.L.C",
            "valueAr": "٢٠٢٤٠٢١٦١١٤٨ لتعبئة النباتات  العشبية ذ.م.م",
            "id": 18001560
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 90438149,
        "dedLicenseNumber": 929250,
        "licenseExpireDate": "2022-05-24T04:00:00",
        "tradeName": {
            "valueEn": "THANDI HAWA FOR CENTRAL AIR-CONDITIONING REQUISITES MANUFACTURING CO. L.L.C",
            "valueAr": "ثاند هو لصناعة مستلزمات  انظمة تكييف  الهواء المركزية ذ.م.م",
            "id": 9007871
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002092,
        "dedLicenseNumber": 1006236,
        "licenseExpireDate": "2025-03-04T04:00:00",
        "tradeName": {
            "valueEn": "202403051500 FOR HERBS PACKAGING CO. L.L.C",
            "valueAr": "٢٠٢٤٠٣٠٥١٥٠٠ لتعبئة النباتات  العشبية ذ.م.م",
            "id": 18001863
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003855,
        "dedLicenseNumber": 1002946,
        "licenseExpireDate": "2023-07-25T04:00:00",
        "tradeName": {
            "valueEn": "DULA PULA FOR SHISHA SERVICES CO. L.L.C",
            "valueAr": "دولة بلا لخدمات تقديم الشيشة ذ.م.م",
            "id": 18003700
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003519,
        "dedLicenseNumber": 1006817,
        "licenseExpireDate": "2025-07-17T04:00:00",
        "tradeName": {
            "valueEn": "LLCNEWFLOW9003 FOR WEB-DESIGN CO. L.L.C CO. L.L.C",
            "valueAr": "للسنيوفلووص٠٠٣ لتصميم مواقع الشبكة المعلوماتية ( الانترنت) ذ.م.م ذ.م.م",
            "id": 18003395
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003885,
        "dedLicenseNumber": 1006974,
        "licenseExpireDate": "2025-07-28T04:00:00",
        "tradeName": {
            "valueEn": "TES MAHAMCLUB BILLIARD & POOL ROOM CO. L.L.C",
            "valueAr": "صالة بلياردو تس مهامكلب ذ.م.م",
            "id": 18003727
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 120001179,
        "dedLicenseNumber": 1001173,
        "licenseExpireDate": "2023-01-18T04:00:00",
        "tradeName": {
            "valueEn": "BIGBULL INC (DUBAI BRANCH)",
            "valueAr": "بجبل إنك (Dubai Branch)",
            "id": 13001192
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004034,
        "dedLicenseNumber": 1007010,
        "licenseExpireDate": "2025-07-31T04:00:00",
        "tradeName": {
            "valueEn": "202408011050 CO. L.L.C",
            "valueAr": "202408011050 ذ.م.م",
            "id": 18003870
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002073,
        "dedLicenseNumber": 1006233,
        "licenseExpireDate": "2025-03-04T04:00:00",
        "tradeName": {
            "valueEn": "202403051325 FOR HERBS PACKAGING CO. L.L.C",
            "valueAr": "٢٠٢٤٠٣٠٥١٣٢٥ لتعبئة النباتات  العشبية ذ.م.م",
            "id": 18001860
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002093,
        "dedLicenseNumber": 1006237,
        "licenseExpireDate": "2025-03-04T04:00:00",
        "tradeName": {
            "valueEn": "NON L MEMBER IS UBO FOR HERBS PACKAGING CO. L.L.C",
            "valueAr": "نون ل ممبر إس أبو لتعبئة النباتات  العشبية ذ.م.م",
            "id": 18001864
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 90438205,
        "dedLicenseNumber": 929311,
        "licenseExpireDate": "2022-05-26T04:00:00",
        "tradeName": {
            "valueEn": "THANKGOD FOR SHIP CHANDLERS CO. L.L.C",
            "valueAr": "ثانكجد لتعهدات تزويد السفن والبواخر ذ.م.م",
            "id": 9007934
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004483,
        "dedLicenseNumber": 1007144,
        "licenseExpireDate": "2025-08-11T04:00:00",
        "tradeName": {
            "valueEn": "202408121031 CO. L.L.C",
            "valueAr": "202408121031 ذ.م.م",
            "id": 18004325
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001650,
        "dedLicenseNumber": 1006014,
        "licenseExpireDate": "2025-02-13T04:00:00",
        "tradeName": {
            "valueEn": "CHAINER FOR WEB-DESIGN CO. L.L.C",
            "valueAr": "شنير لتصميم مواقع الشبكة المعلوماتية ( الانترنت) ذ.م.م",
            "id": 18001541
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 120001197,
        "dedLicenseNumber": 1001195,
        "licenseExpireDate": "2023-01-20T04:00:00",
        "tradeName": {
            "valueEn": "GHFJGMNBGFDS FOR FISH & SEAFOOD CANNING & PRESERVING CO. L.L.C NULL",
            "valueAr": "شركة غفججمنبجفدس لتعليب  الاسماك والاغذية البحرية وحفظها ذ.م.م null غفججمنبجفدس لتعليب  الاسماك والاغذية البحرية وحفظها ذ.م.م null ذ.م.م",
            "id": 13001210
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 90438194,
        "dedLicenseNumber": 929298,
        "licenseExpireDate": "2022-05-25T04:00:00",
        "tradeName": {
            "valueEn": "CHANDNI SHIP CHANDLERS CO. L.L.C",
            "valueAr": "شندني لتعهدات تزويد السفن والبواخر ذ.م.م",
            "id": 9007924
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001865,
        "dedLicenseNumber": 1006115,
        "licenseExpireDate": "2025-02-26T04:00:00",
        "tradeName": {
            "valueEn": "DEMO27022024 WEB-DESIGN LLC",
            "valueAr": "ديمؤح٠٢٢٠٢٤ لتصميم مواقع الشبكة المعلوماتية ( الانترنت) ذ م م",
            "id": 18001679
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001681,
        "dedLicenseNumber": 1006026,
        "licenseExpireDate": "2025-02-15T04:00:00",
        "tradeName": {
            "valueEn": "202402161021 FOR HERBS PACKAGING CO. L.L.C",
            "valueAr": "٢٠٢٤٠٢١٦١٠٢١ لتعبئة النباتات  العشبية ذ.م.م",
            "id": 18001559
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001643,
        "dedLicenseNumber": 1006010,
        "licenseExpireDate": "2025-02-13T04:00:00",
        "tradeName": {
            "valueEn": "202402141509 FOR HERBS PACKAGING CO. L.L.C",
            "valueAr": "٢٠٢٤٠٢١٤١٥٠٩ لتعبئة النباتات  العشبية ذ.م.م",
            "id": 18001536
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003845,
        "dedLicenseNumber": 1002940,
        "licenseExpireDate": "2023-07-25T04:00:00",
        "tradeName": {
            "valueEn": "MEMBER KA ADDRESS CHANGES FOR SHISHA SERVICES CO. L.L.C",
            "valueAr": "ممبر كا أدرس شانجس لخدمات تقديم الشيشة ذ.م.م",
            "id": 18003691
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001674,
        "dedLicenseNumber": 1006021,
        "licenseExpireDate": "2025-02-15T04:00:00",
        "tradeName": {
            "valueEn": "202402160842 FOR HERBS PACKAGING CO. L.L.C",
            "valueAr": "٢٠٢٤٠٢١٦٠٨٤٢ لتعبئة النباتات  العشبية ذ.م.م",
            "id": 18001553
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004234,
        "dedLicenseNumber": 1007065,
        "licenseExpireDate": "2025-08-04T04:00:00",
        "tradeName": {
            "valueEn": "202408051232 CO. L.L.C",
            "valueAr": "202408051232 ذ.م.م",
            "id": 18004056
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002083,
        "dedLicenseNumber": 1006235,
        "licenseExpireDate": "2025-03-04T04:00:00",
        "tradeName": {
            "valueEn": "ONLY ONE PARTNER HAS L.MEMBER AS NOMINEE FOR HERBS PACKAGING CO. L.L.C",
            "valueAr": "اونلي أن بارتنر حس ل.ممبر أس نوميني لتعبئة النباتات  العشبية ذ.م.م",
            "id": 18001862
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004480,
        "dedLicenseNumber": 1007142,
        "licenseExpireDate": "2025-08-11T04:00:00",
        "tradeName": {
            "valueEn": "202408121001 CO. L.L.C",
            "valueAr": "202408121001 ذ.م.م",
            "id": 18004322
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004225,
        "dedLicenseNumber": 1007063,
        "licenseExpireDate": "2025-08-04T04:00:00",
        "tradeName": {
            "valueEn": "SURPRISE CO. L.L.C",
            "valueAr": "فاجأ ذ.م.م",
            "id": 18004052
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004037,
        "dedLicenseNumber": 1007012,
        "licenseExpireDate": "2025-07-31T04:00:00",
        "tradeName": {
            "valueEn": "GOODFOOD CO. L.L.C",
            "valueAr": "طعام جيد ذ.م.م",
            "id": 18003873
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003991,
        "dedLicenseNumber": 1006994,
        "licenseExpireDate": "2025-07-30T04:00:00",
        "tradeName": {
            "valueEn": "202407311455 CO. L.L.C",
            "valueAr": "202407311455 ذ.م.م",
            "id": 18003840
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002106,
        "dedLicenseNumber": 1006240,
        "licenseExpireDate": "2025-03-05T04:00:00",
        "tradeName": {
            "valueEn": "202403060921 FOR HERBS PACKAGING CO. L.L.C",
            "valueAr": "٢٠٢٤٠٣٠٦٠٩٢١ لتعبئة النباتات  العشبية ذ.م.م",
            "id": 18001869
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004224,
        "dedLicenseNumber": 1007059,
        "licenseExpireDate": "2025-08-04T04:00:00",
        "tradeName": {
            "valueEn": "202408051049 CO. L.L.C",
            "valueAr": "202408051049 ذ.م.م",
            "id": 18004045
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 90438198,
        "dedLicenseNumber": 929301,
        "licenseExpireDate": "2022-05-25T04:00:00",
        "tradeName": {
            "valueEn": "PAWANDEVTA FOR SHIP CHANDLERS CO. L.L.C",
            "valueAr": "باوندفتا لتعهدات تزويد السفن والبواخر ذ.م.م",
            "id": 9007927
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002168,
        "dedLicenseNumber": 1006278,
        "licenseExpireDate": "2025-03-07T04:00:00",
        "tradeName": {
            "valueEn": "202403081205 FOR HERBS PACKAGING CO. L.L.C",
            "valueAr": "٢٠٢٤٠٣٠٨١٢٠٥ لتعبئة النباتات  العشبية ذ.م.م",
            "id": 18001928
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004492,
        "dedLicenseNumber": 1007147,
        "licenseExpireDate": "2025-08-11T04:00:00",
        "tradeName": {
            "valueEn": "202408121131 CO. L.L.C",
            "valueAr": "202408121131 ذ.م.م",
            "id": 18004332
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001675,
        "dedLicenseNumber": 1006022,
        "licenseExpireDate": "2025-02-15T04:00:00",
        "tradeName": {
            "valueEn": "202402160918 FOR HERBS PACKAGING CO. L.L.C",
            "valueAr": "٢٠٢٤٠٢١٦٠٩١٨ لتعبئة النباتات  العشبية ذ.م.م",
            "id": 18001554
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001645,
        "dedLicenseNumber": 1006011,
        "licenseExpireDate": "2025-02-13T04:00:00",
        "tradeName": {
            "valueEn": "202402141536 FOR HERBS PACKAGING CO. L.L.C",
            "valueAr": "٢٠٢٤٠٢١٤١٥٣٦ لتعبئة النباتات  العشبية ذ.م.م",
            "id": 18001538
        },
        "legalType": {
            "valueEn": "Limited Liability Company(LLC)",
            "valueAr": "ذات مسئولية محدودة",
            "id": 4
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002294,
        "dedLicenseNumber": 1006356,
        "licenseExpireDate": "2025-03-12T04:00:00",
        "tradeName": {
            "valueEn": "NINJA FOR SHISHA SERVICES LIMITED PARTNERSHIP CO.",
            "valueAr": "النينجا لخدمات تقديم الشيشة  شركة توصية بسيطة",
            "id": 18002031
        },
        "legalType": {
            "valueEn": "Simple Partnership Company.",
            "valueAr": "توصية بسيطة",
            "id": 5
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002293,
        "dedLicenseNumber": 1006355,
        "licenseExpireDate": "2025-03-12T04:00:00",
        "tradeName": {
            "valueEn": "THIS IS FISRT SIMPLE LICENSE FOR WEB-DESIGN LIMITED PARTNERSHIP CO.",
            "valueAr": "هذا هو أول ترخيص بسيط لتصميم مواقع الشبكة المعلوماتية ( الانترنت)  شركة توصية بسيطة",
            "id": 18002030
        },
        "legalType": {
            "valueEn": "Simple Partnership Company.",
            "valueAr": "توصية بسيطة",
            "id": 5
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003129,
        "dedLicenseNumber": 1006705,
        "licenseExpireDate": "2025-06-19T04:00:00",
        "tradeName": {
            "valueEn": "180003129 FOR UNIFORMS TRADING LIMITED PARTNERSHIP CO.",
            "valueAr": "١٨٠٠٠٣١٢٩ لتجارة الملابس  والازياء الرسمية  شركة توصية بسيطة",
            "id": 18002975
        },
        "legalType": {
            "valueEn": "Simple Partnership Company.",
            "valueAr": "توصية بسيطة",
            "id": 5
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004497,
        "dedLicenseNumber": 1007150,
        "licenseExpireDate": "2025-08-11T04:00:00",
        "tradeName": {
            "valueEn": "202408121230 CO.",
            "valueAr": "شركة 202408121230",
            "id": 18004336
        },
        "legalType": {
            "valueEn": "Civil Company",
            "valueAr": "أعمال مدنية",
            "id": 11
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004118,
        "dedLicenseNumber": 1007038,
        "licenseExpireDate": "2025-08-01T04:00:00",
        "tradeName": {
            "valueEn": "202408021139 CO.",
            "valueAr": "شركة 202408021139",
            "id": 18003955
        },
        "legalType": {
            "valueEn": "Civil Company",
            "valueAr": "أعمال مدنية",
            "id": 11
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003735,
        "dedLicenseNumber": 1006892,
        "licenseExpireDate": "2025-07-24T04:00:00",
        "tradeName": {
            "valueEn": "CIVILCHECKWIHTNEWJOUNREY FOR WEB-DESIGN CO. CO.",
            "valueAr": "شركة شركة شفلككوهتنوجنر لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 18003588
        },
        "legalType": {
            "valueEn": "Civil Company",
            "valueAr": "أعمال مدنية",
            "id": 11
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003860,
        "dedLicenseNumber": 929224,
        "licenseExpireDate": "2022-05-24T04:00:00",
        "tradeName": {
            "valueEn": "NANU FOR SHOE REPAIRING",
            "valueAr": "نانو لاصلاح الاحذية",
            "id": 9007843
        },
        "legalType": {
            "valueEn": "Civil Company",
            "valueAr": "أعمال مدنية",
            "id": 11
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002713,
        "dedLicenseNumber": 1006527,
        "licenseExpireDate": "2025-05-15T04:00:00",
        "tradeName": {
            "valueEn": "DON'T BECOME FOOL FOR SUGAR PACKAGING CO.",
            "valueAr": "شركة دون'ط بسم فول لتعبئة السكر",
            "id": 18002592
        },
        "legalType": {
            "valueEn": "Civil Company",
            "valueAr": "أعمال مدنية",
            "id": 11
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 90438137,
        "dedLicenseNumber": 929240,
        "licenseExpireDate": "2022-05-24T04:00:00",
        "tradeName": {
            "valueEn": "NORMALANAMIKA FOR SHOE REPAIRING CO.",
            "valueAr": "شركة نورمالنمكا لاصلاح الاحذية",
            "id": 9007859
        },
        "legalType": {
            "valueEn": "Civil Company",
            "valueAr": "أعمال مدنية",
            "id": 11
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003743,
        "dedLicenseNumber": 1006899,
        "licenseExpireDate": "2025-07-24T04:00:00",
        "tradeName": {
            "valueEn": "CIVILALLNONUAE FOR WEB-DESIGN CO. CO.",
            "valueAr": "شركة شركة شيفيللنن لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 18003594
        },
        "legalType": {
            "valueEn": "Civil Company",
            "valueAr": "أعمال مدنية",
            "id": 11
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003517,
        "dedLicenseNumber": 1006814,
        "licenseExpireDate": "2025-07-17T04:00:00",
        "tradeName": {
            "valueEn": "CIVILDEL9002 FOR WEB-DESIGN CO. CO.",
            "valueAr": "شركة شركة سيفيلديلص٠٠٢ لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 18003391
        },
        "legalType": {
            "valueEn": "Civil Company",
            "valueAr": "أعمال مدنية",
            "id": 11
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 120002123,
        "dedLicenseNumber": 1002779,
        "licenseExpireDate": "2023-06-22T04:00:00",
        "tradeName": {
            "valueEn": "PUNDRA PIKAOL FOR WEB-DESIGN CO.",
            "valueAr": "شركة بندر لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 13002041
        },
        "legalType": {
            "valueEn": "Civil Company",
            "valueAr": "أعمال مدنية",
            "id": 11
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003878,
        "dedLicenseNumber": 1006969,
        "licenseExpireDate": "2025-07-28T04:00:00",
        "tradeName": {
            "valueEn": "INSTANTLICALLNONUAEPARTNER FOR WEB-DESIGN CO.",
            "valueAr": "شركة نستنتلكلننبرتنر لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 18003719
        },
        "legalType": {
            "valueEn": "Civil Company",
            "valueAr": "أعمال مدنية",
            "id": 11
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001960,
        "dedLicenseNumber": 1006169,
        "licenseExpireDate": "2025-02-27T04:00:00",
        "tradeName": {
            "valueEn": "IEKAGAI PORTAL CO.",
            "valueAr": "شركة مجمع للتعامل الإلكتروني إيكاجاي",
            "id": 18001751
        },
        "legalType": {
            "valueEn": "Civil Company",
            "valueAr": "أعمال مدنية",
            "id": 11
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 120001513,
        "dedLicenseNumber": 1001485,
        "licenseExpireDate": "2023-02-08T04:00:00",
        "tradeName": {
            "valueEn": "MAINLICENSE000000 FOR AGRICULTURAL RESEARCH & CONSULTANCY CO.",
            "valueAr": "شركة ماينليسينسي٠٠٠٠٠٠ للاستشارات والدراسات والأبحاث الزراعية",
            "id": 13001481
        },
        "legalType": {
            "valueEn": "Civil Company",
            "valueAr": "أعمال مدنية",
            "id": 11
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003784,
        "dedLicenseNumber": 1006930,
        "licenseExpireDate": "2025-07-25T04:00:00",
        "tradeName": {
            "valueEn": "CIVILSME111111 FOR WEB-DESIGN CO. CO.",
            "valueAr": "شركة شركة سيفيلسمي١١١١١١ لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 18003631
        },
        "legalType": {
            "valueEn": "Civil Company",
            "valueAr": "أعمال مدنية",
            "id": 11
        },
        "licenseCategory": {
            "valueEn": "Mohammed Bin Rashid Est.",
            "valueAr": "مؤسسة محمد بن راشد لدعم مشاريع الشباب",
            "id": 82
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004051,
        "dedLicenseNumber": 1007013,
        "licenseExpireDate": "2025-07-31T04:00:00",
        "tradeName": {
            "valueEn": "202408011320 CO.",
            "valueAr": "شركة 202408011320",
            "id": 18003882
        },
        "legalType": {
            "valueEn": "Civil Company",
            "valueAr": "أعمال مدنية",
            "id": 11
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002057,
        "dedLicenseNumber": 1006221,
        "licenseExpireDate": "2025-03-04T04:00:00",
        "tradeName": {
            "valueEn": "SANJIV SUGAR PACKAGING CO.",
            "valueAr": "شركة سانجيف لتعبئة السكر",
            "id": 18001847
        },
        "legalType": {
            "valueEn": "Civil Company",
            "valueAr": "أعمال مدنية",
            "id": 11
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004119,
        "dedLicenseNumber": 1007039,
        "licenseExpireDate": "2025-08-01T04:00:00",
        "tradeName": {
            "valueEn": "202408021148 CO.",
            "valueAr": "شركة 202408021148",
            "id": 18003956
        },
        "legalType": {
            "valueEn": "Civil Company",
            "valueAr": "أعمال مدنية",
            "id": 11
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003126,
        "dedLicenseNumber": 1006702,
        "licenseExpireDate": "2025-06-19T04:00:00",
        "tradeName": {
            "valueEn": "180003126 FOR WEB-DESIGN CO.",
            "valueAr": "شركة ١٨٠٠٠٣١٢٦ لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 18002965
        },
        "legalType": {
            "valueEn": "Civil Company",
            "valueAr": "أعمال مدنية",
            "id": 11
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003766,
        "dedLicenseNumber": 1006917,
        "licenseExpireDate": "2025-07-25T04:00:00",
        "tradeName": {
            "valueEn": "CIVILNORMAL FOR WEB-DESIGN CO. CO.",
            "valueAr": "شركة شركة شيفيلنرمل لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 18003616
        },
        "legalType": {
            "valueEn": "Civil Company",
            "valueAr": "أعمال مدنية",
            "id": 11
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003846,
        "dedLicenseNumber": 929223,
        "licenseExpireDate": "2022-05-24T04:00:00",
        "tradeName": {
            "valueEn": "CHOTISEEASHA FOR FASHION DESIGNING",
            "valueAr": "شتسشا لتصميم الازياء والملابس",
            "id": 9007842
        },
        "legalType": {
            "valueEn": "Civil Company",
            "valueAr": "أعمال مدنية",
            "id": 11
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004059,
        "dedLicenseNumber": 1007015,
        "licenseExpireDate": "2025-07-31T04:00:00",
        "tradeName": {
            "valueEn": "202408011355 CO.",
            "valueAr": "شركة 202408011355",
            "id": 18003890
        },
        "legalType": {
            "valueEn": "Civil Company",
            "valueAr": "أعمال مدنية",
            "id": 11
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003844,
        "dedLicenseNumber": 1002893,
        "licenseExpireDate": "2023-07-12T04:00:00",
        "tradeName": {
            "valueEn": "JOBO JOBO RABBA FOR WEB-DESIGN CO.",
            "valueAr": "شركة جبه جبه ربى لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 18003690
        },
        "legalType": {
            "valueEn": "Civil Company",
            "valueAr": "أعمال مدنية",
            "id": 11
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002711,
        "dedLicenseNumber": 1006525,
        "licenseExpireDate": "2025-05-14T04:00:00",
        "tradeName": {
            "valueEn": "CIVILINSTANT FOR WEB-DESIGN CO.",
            "valueAr": "شركة سيفيلينصتنة لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 18002591
        },
        "legalType": {
            "valueEn": "Civil Company",
            "valueAr": "أعمال مدنية",
            "id": 11
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004067,
        "dedLicenseNumber": 1007016,
        "licenseExpireDate": "2025-07-31T04:00:00",
        "tradeName": {
            "valueEn": "202408011425 CO.",
            "valueAr": "شركة 202408011425",
            "id": 18003891
        },
        "legalType": {
            "valueEn": "Civil Company",
            "valueAr": "أعمال مدنية",
            "id": 11
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003127,
        "dedLicenseNumber": 1006703,
        "licenseExpireDate": "2025-06-19T04:00:00",
        "tradeName": {
            "valueEn": "180003127 FOR UNIFORMS TRADING CO.",
            "valueAr": "شركة ١٨٠٠٠٣١٢٧ لتجارة الملابس  والازياء الرسمية",
            "id": 18002973
        },
        "legalType": {
            "valueEn": "Civil Company",
            "valueAr": "أعمال مدنية",
            "id": 11
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 90438136,
        "dedLicenseNumber": 929239,
        "licenseExpireDate": "2022-05-24T04:00:00",
        "tradeName": {
            "valueEn": "NORMALSHOES FOR SHOE REPAIRING CO.",
            "valueAr": "شركة نورمالشس لاصلاح الاحذية",
            "id": 9007858
        },
        "legalType": {
            "valueEn": "Civil Company",
            "valueAr": "أعمال مدنية",
            "id": 11
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001620,
        "dedLicenseNumber": 1005994,
        "licenseExpireDate": "2025-02-13T04:00:00",
        "tradeName": {
            "valueEn": "202402141120 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢١٤١١٢٠",
            "id": 18001515
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002950,
        "dedLicenseNumber": 1006621,
        "licenseExpireDate": "2025-05-28T04:00:00",
        "tradeName": {
            "valueEn": "NOPOANO PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني نبينه",
            "id": 18002767
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003869,
        "dedLicenseNumber": 1005632,
        "licenseExpireDate": "2024-12-05T04:00:00",
        "tradeName": {
            "valueEn": "ACHAAR AAM KA FOR WEB-DESIGN",
            "valueAr": "أشار أم كا لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 18003712
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004127,
        "dedLicenseNumber": 1007045,
        "licenseExpireDate": "2025-08-01T04:00:00",
        "tradeName": {
            "valueEn": "SUMANT EST.",
            "valueAr": "مؤسسة مؤسسة",
            "id": 18003965
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002165,
        "dedLicenseNumber": 1006275,
        "licenseExpireDate": "2025-03-07T04:00:00",
        "tradeName": {
            "valueEn": "202403081143 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٣٠٨١١٤٣",
            "id": 18001925
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001704,
        "dedLicenseNumber": 1006037,
        "licenseExpireDate": "2025-02-18T04:00:00",
        "tradeName": {
            "valueEn": "202402191035 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢١٩١٠٣٥",
            "id": 18001571
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003868,
        "dedLicenseNumber": 1005060,
        "licenseExpireDate": "2024-09-05T04:00:00",
        "tradeName": {
            "valueEn": "20230906102722 FOR GRAINS PACKAGING EST.",
            "valueAr": "مؤسسة 20230906102722 لتعبئة الحبوب والغلال",
            "id": 18003711
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002111,
        "dedLicenseNumber": 1006245,
        "licenseExpireDate": "2025-03-05T04:00:00",
        "tradeName": {
            "valueEn": "BASIC USER INCLUDED PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني بيسك عصر انكلودد",
            "id": 18001874
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003121,
        "dedLicenseNumber": 1006711,
        "licenseExpireDate": "2025-06-19T04:00:00",
        "tradeName": {
            "valueEn": "180003121 FOR WEB-DESIGN",
            "valueAr": "١٨٠٠٠٣١٢١ لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 18002979
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001976,
        "dedLicenseNumber": 1006179,
        "licenseExpireDate": "2025-02-27T04:00:00",
        "tradeName": {
            "valueEn": "202402291331 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢٢٩١٣٣١",
            "id": 18001766
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001760,
        "dedLicenseNumber": 1006071,
        "licenseExpireDate": "2025-02-20T04:00:00",
        "tradeName": {
            "valueEn": "202402210925 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢٢١٠٩٢٥",
            "id": 18001611
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004126,
        "dedLicenseNumber": 1007044,
        "licenseExpireDate": "2025-08-01T04:00:00",
        "tradeName": {
            "valueEn": "202408021306 EST.",
            "valueAr": "مؤسسة 202408021306",
            "id": 18003964
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002970,
        "dedLicenseNumber": 1006639,
        "licenseExpireDate": "2025-05-28T04:00:00",
        "tradeName": {
            "valueEn": "202405291604 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٥٢٩١٦٠٤",
            "id": 18002790
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001636,
        "dedLicenseNumber": 1006007,
        "licenseExpireDate": "2025-02-13T04:00:00",
        "tradeName": {
            "valueEn": "202402141430 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢١٤١٤٣٠",
            "id": 18001532
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001688,
        "dedLicenseNumber": 1006029,
        "licenseExpireDate": "2025-02-15T04:00:00",
        "tradeName": {
            "valueEn": "202402161341 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢١٦١٣٤١",
            "id": 18001562
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002962,
        "dedLicenseNumber": 1006632,
        "licenseExpireDate": "2025-05-28T04:00:00",
        "tradeName": {
            "valueEn": "202405291404 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٥٢٩١٤٠٤",
            "id": 18002778
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002040,
        "dedLicenseNumber": 1006215,
        "licenseExpireDate": "2025-03-03T04:00:00",
        "tradeName": {
            "valueEn": "LIMITATIONS PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني لمتشنس",
            "id": 18001839
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002764,
        "dedLicenseNumber": 1006546,
        "licenseExpireDate": "2025-05-19T04:00:00",
        "tradeName": {
            "valueEn": "I DID IT WEB-DESIGN",
            "valueAr": "إ ضد إت لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 18002662
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003865,
        "dedLicenseNumber": 929236,
        "licenseExpireDate": "2022-05-24T04:00:00",
        "tradeName": {
            "valueEn": "454343 FOR WEB-DESIGN",
            "valueAr": "?????? لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 9007854
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003078,
        "dedLicenseNumber": 1006682,
        "licenseExpireDate": "2025-06-04T04:00:00",
        "tradeName": {
            "valueEn": "PAIDNORM090 FOR UNIFORMS TRADING EST.",
            "valueAr": "مؤسسة بايدنورم٠٩٠ لتجارة الملابس  والازياء الرسمية",
            "id": 18002871
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001326,
        "dedLicenseNumber": 1005810,
        "licenseExpireDate": "2025-01-30T04:00:00",
        "tradeName": {
            "valueEn": "202401311138 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠١٣١١١٣٨",
            "id": 18001296
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001705,
        "dedLicenseNumber": 1006038,
        "licenseExpireDate": "2025-02-18T04:00:00",
        "tradeName": {
            "valueEn": "202402191041 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢١٩١٠٤١",
            "id": 18001572
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 150152395,
        "dedLicenseNumber": 1003053,
        "licenseExpireDate": "2023-08-09T04:00:00",
        "tradeName": {
            "valueEn": "TANAK DHIN TANA FOR WEB-DESIGN EST.",
            "valueAr": "مؤسسة تناك دحين تانى لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 15052246
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002951,
        "dedLicenseNumber": 1006623,
        "licenseExpireDate": "2025-05-28T04:00:00",
        "tradeName": {
            "valueEn": "202405291237 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٥٢٩١٢٣٧",
            "id": 18002769
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001962,
        "dedLicenseNumber": 1006171,
        "licenseExpireDate": "2025-02-27T04:00:00",
        "tradeName": {
            "valueEn": "REGRESSION FOR GRAINS PACKAGING EST.",
            "valueAr": "مؤسسة تراجع لتعبئة الحبوب والغلال",
            "id": 18001754
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001967,
        "dedLicenseNumber": 1006173,
        "licenseExpireDate": "2025-02-27T04:00:00",
        "tradeName": {
            "valueEn": "REGRESSION FOR GRAINS PACKAGING EST.",
            "valueAr": "مؤسسة تراجع لتعبئة الحبوب والغلال",
            "id": 18001758
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004419,
        "dedLicenseNumber": 1007117,
        "licenseExpireDate": "2025-08-07T04:00:00",
        "tradeName": {
            "valueEn": "180004419 FOR WEB-DESIGN",
            "valueAr": "١٨٠٠٠٤٤١٩ لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 18004279
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001631,
        "dedLicenseNumber": 1006002,
        "licenseExpireDate": "2025-02-13T04:00:00",
        "tradeName": {
            "valueEn": "202402141405 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢١٤١٤٠٥",
            "id": 18001527
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003289,
        "dedLicenseNumber": 1006726,
        "licenseExpireDate": "2025-06-26T04:00:00",
        "tradeName": {
            "valueEn": "MAHAMCIDCHECK FOR WEB-DESIGN",
            "valueAr": "مهمشيدشك لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 18003032
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 90439109,
        "dedLicenseNumber": 930060,
        "licenseExpireDate": "2022-06-15T04:00:00",
        "tradeName": {
            "valueEn": "172782.02OOI ART GALLERY EST.",
            "valueAr": "مؤسسة معرض الأعمال الفنية ١٧٢٧٨٢.٠٢ووي",
            "id": 9008898
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002964,
        "dedLicenseNumber": 1006634,
        "licenseExpireDate": "2025-05-28T04:00:00",
        "tradeName": {
            "valueEn": "202405291450 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٥٢٩١٤٥٠",
            "id": 18002781
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001594,
        "dedLicenseNumber": 1005974,
        "licenseExpireDate": "2025-02-12T04:00:00",
        "tradeName": {
            "valueEn": "202402131656 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢١٣١٦٥٦",
            "id": 18001493
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002973,
        "dedLicenseNumber": 1006642,
        "licenseExpireDate": "2025-05-28T04:00:00",
        "tradeName": {
            "valueEn": "202405291712 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٥٢٩١٧١٢",
            "id": 18002794
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002137,
        "dedLicenseNumber": 1006260,
        "licenseExpireDate": "2025-03-06T04:00:00",
        "tradeName": {
            "valueEn": "202403071556 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٣٠٧١٥٥٦",
            "id": 18001902
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002802,
        "dedLicenseNumber": 1006573,
        "licenseExpireDate": "2025-05-22T04:00:00",
        "tradeName": {
            "valueEn": "202405231154 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٥٢٣١١٥٤",
            "id": 18002697
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002968,
        "dedLicenseNumber": 1006637,
        "licenseExpireDate": "2025-05-28T04:00:00",
        "tradeName": {
            "valueEn": "202405291521 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٥٢٩١٥٢١",
            "id": 18002784
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002875,
        "dedLicenseNumber": 1006583,
        "licenseExpireDate": "2025-05-26T04:00:00",
        "tradeName": {
            "valueEn": "202405271414 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٥٢٧١٤١٤",
            "id": 18002715
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001608,
        "dedLicenseNumber": 1005987,
        "licenseExpireDate": "2025-02-13T04:00:00",
        "tradeName": {
            "valueEn": "202402140856 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢١٤٠٨٥٦",
            "id": 18001508
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001757,
        "dedLicenseNumber": 1006068,
        "licenseExpireDate": "2025-02-20T04:00:00",
        "tradeName": {
            "valueEn": "202402210912 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢٢١٠٩١٢",
            "id": 18001608
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004123,
        "dedLicenseNumber": 1007042,
        "licenseExpireDate": "2025-08-05T04:00:00",
        "tradeName": {
            "valueEn": "202408021246",
            "valueAr": "202408021246",
            "id": 18003962
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003862,
        "dedLicenseNumber": 1005058,
        "licenseExpireDate": "2024-09-04T04:00:00",
        "tradeName": {
            "valueEn": "20230905161143 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني 20230905161143",
            "id": 18003706
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001632,
        "dedLicenseNumber": 1006003,
        "licenseExpireDate": "2025-02-13T04:00:00",
        "tradeName": {
            "valueEn": "202402141412 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢١٤١٤١٢",
            "id": 18001528
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002966,
        "dedLicenseNumber": 1006635,
        "licenseExpireDate": "2025-05-28T04:00:00",
        "tradeName": {
            "valueEn": "202405291501 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٥٢٩١٥٠١",
            "id": 18002782
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002669,
        "dedLicenseNumber": 1006498,
        "licenseExpireDate": "2025-05-15T04:00:00",
        "tradeName": {
            "valueEn": "HOW ARE YOU & YOUR'S FAMILY FOR WEB-DESIGN",
            "valueAr": "63546253457 لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 18002405
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 90440057,
        "dedLicenseNumber": 1000038,
        "licenseExpireDate": "2022-09-08T04:00:00",
        "tradeName": {
            "valueEn": "INSTANT.WITH.NSD.VOUCHER.1 FOR WEB-DESIGN EST.",
            "valueAr": "مؤسسة نستنت.وإذ.نسد.فشر.١ لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 9010095
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003861,
        "dedLicenseNumber": 1005549,
        "licenseExpireDate": "2024-11-02T04:00:00",
        "tradeName": {
            "valueEn": "DEDTRADING WITH NSDS FOR WEB-DESIGN",
            "valueAr": "ضدتردنج وإذ نصدس لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 18003705
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002052,
        "dedLicenseNumber": 1006219,
        "licenseExpireDate": "2025-03-04T04:00:00",
        "tradeName": {
            "valueEn": "03052024084001 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني 03052024084001",
            "id": 18001844
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002405,
        "dedLicenseNumber": 1006414,
        "licenseExpireDate": "2025-04-04T04:00:00",
        "tradeName": {
            "valueEn": "RDTFY GVYUHI HBJI FOR WEB-DESIGN",
            "valueAr": "ردتف جفيه لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 18002194
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002967,
        "dedLicenseNumber": 1006636,
        "licenseExpireDate": "2025-05-28T04:00:00",
        "tradeName": {
            "valueEn": "202405291510 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٥٢٩١٥١٠",
            "id": 18002783
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 90438180,
        "dedLicenseNumber": 929286,
        "licenseExpireDate": "2023-05-25T04:00:00",
        "tradeName": {
            "valueEn": "INTIAL APPROVAL IS FAILING FOR WEB-DESIGN",
            "valueAr": "إنتل بروفيل إس فالنج لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 9007907
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003066,
        "dedLicenseNumber": 1006680,
        "licenseExpireDate": "2025-06-04T04:00:00",
        "tradeName": {
            "valueEn": "INSTPAID23 FOR UNIFORMS TRADING EST.",
            "valueAr": "مؤسسة نستبعدئع لتجارة الملابس  والازياء الرسمية",
            "id": 18002866
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002162,
        "dedLicenseNumber": 1006272,
        "licenseExpireDate": "2025-03-07T04:00:00",
        "tradeName": {
            "valueEn": "202403081128 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٣٠٨١١٢٨",
            "id": 18001922
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003859,
        "dedLicenseNumber": 1005057,
        "licenseExpireDate": "2024-09-04T04:00:00",
        "tradeName": {
            "valueEn": "20230905160709 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني 20230905160709",
            "id": 18003704
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002035,
        "dedLicenseNumber": 1006211,
        "licenseExpireDate": "2025-03-03T04:00:00",
        "tradeName": {
            "valueEn": "202403041440 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٣٠٤١٤٤٠",
            "id": 18001834
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002378,
        "dedLicenseNumber": 1006394,
        "licenseExpireDate": "2025-03-28T04:00:00",
        "tradeName": {
            "valueEn": "29032024 FOR WEB-DESIGN",
            "valueAr": "٢٩٠٣٢٠٢٤ لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 18002171
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002963,
        "dedLicenseNumber": 1006633,
        "licenseExpireDate": "2025-05-28T04:00:00",
        "tradeName": {
            "valueEn": "202405291445 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٥٢٩١٤٤٥",
            "id": 18002780
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001590,
        "dedLicenseNumber": 1005971,
        "licenseExpireDate": "2025-02-12T04:00:00",
        "tradeName": {
            "valueEn": "202402131637 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢١٣١٦٣٧",
            "id": 18001490
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002972,
        "dedLicenseNumber": 1006641,
        "licenseExpireDate": "2025-05-28T04:00:00",
        "tradeName": {
            "valueEn": "202405291705 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٥٢٩١٧٠٥",
            "id": 18002793
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003858,
        "dedLicenseNumber": 1005634,
        "licenseExpireDate": "2024-12-06T04:00:00",
        "tradeName": {
            "valueEn": "HYPER MARKUP TEXT LANGUAGE FOR WEB-DESIGN",
            "valueAr": "هيبر مركب تكست لانجج لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 18003703
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001758,
        "dedLicenseNumber": 1006069,
        "licenseExpireDate": "2025-02-20T04:00:00",
        "tradeName": {
            "valueEn": "202402210916 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢٢١٠٩١٦",
            "id": 18001609
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001700,
        "dedLicenseNumber": 1006034,
        "licenseExpireDate": "2025-02-18T04:00:00",
        "tradeName": {
            "valueEn": "202402191020 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢١٩١٠٢٠",
            "id": 18001567
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003972,
        "dedLicenseNumber": 1006989,
        "licenseExpireDate": "2025-07-30T04:00:00",
        "tradeName": {
            "valueEn": "202407311151 EST.",
            "valueAr": "مؤسسة 202407311151",
            "id": 18003826
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001759,
        "dedLicenseNumber": 1006070,
        "licenseExpireDate": "2025-02-20T04:00:00",
        "tradeName": {
            "valueEn": "202402210920 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢٢١٠٩٢٠",
            "id": 18001610
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003118,
        "dedLicenseNumber": 1006699,
        "licenseExpireDate": "2025-06-18T04:00:00",
        "tradeName": {
            "valueEn": "180003118 FOR WEB-DESIGN EST.",
            "valueAr": "مؤسسة ١٨٠٠٠٣١١٨ لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 18002934
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002977,
        "dedLicenseNumber": 1006643,
        "licenseExpireDate": "2025-05-28T04:00:00",
        "tradeName": {
            "valueEn": "202405291728 PORTAL EST.",
            "valueAr": "مؤسسة مجمع للتعامل الإلكتروني ٢٠٢٤٠٥٢٩١٧٢٨",
            "id": 18002796
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002959,
        "dedLicenseNumber": 1006629,
        "licenseExpireDate": "2025-05-28T04:00:00",
        "tradeName": {
            "valueEn": "202405291335 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٥٢٩١٣٣٥",
            "id": 18002775
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002164,
        "dedLicenseNumber": 1006274,
        "licenseExpireDate": "2025-03-07T04:00:00",
        "tradeName": {
            "valueEn": "202403081137 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٣٠٨١١٣٧",
            "id": 18001924
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001630,
        "dedLicenseNumber": 1006001,
        "licenseExpireDate": "2025-02-13T04:00:00",
        "tradeName": {
            "valueEn": "202402141352 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢١٤١٣٥٢",
            "id": 18001526
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 90438254,
        "dedLicenseNumber": 929423,
        "licenseExpireDate": "2022-05-30T04:00:00",
        "tradeName": {
            "valueEn": "232--20 FOR AGRICULTURAL RESEARCH & CONSULTANCY EST.",
            "valueAr": "مؤسسة ???--?? للاستشارات والدراسات والأبحاث الزراعية",
            "id": 9008009
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002037,
        "dedLicenseNumber": 1006212,
        "licenseExpireDate": "2025-03-03T04:00:00",
        "tradeName": {
            "valueEn": "202403041501 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٣٠٤١٥٠١",
            "id": 18001836
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001566,
        "dedLicenseNumber": 1005958,
        "licenseExpireDate": "2025-02-12T04:00:00",
        "tradeName": {
            "valueEn": "202402131418 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢١٣١٤١٨",
            "id": 18001470
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001980,
        "dedLicenseNumber": 1006183,
        "licenseExpireDate": "2025-02-27T04:00:00",
        "tradeName": {
            "valueEn": "202402291401 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢٢٩١٤٠١",
            "id": 18001770
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001328,
        "dedLicenseNumber": 1005812,
        "licenseExpireDate": "2025-01-30T04:00:00",
        "tradeName": {
            "valueEn": "202401311149 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠١٣١١١٤٩",
            "id": 18001298
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001589,
        "dedLicenseNumber": 1005970,
        "licenseExpireDate": "2025-02-12T04:00:00",
        "tradeName": {
            "valueEn": "202402131627 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢١٣١٦٢٧",
            "id": 18001489
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003981,
        "dedLicenseNumber": 1006991,
        "licenseExpireDate": "2025-07-30T04:00:00",
        "tradeName": {
            "valueEn": "202407311246 EST.",
            "valueAr": "مؤسسة 202407311246",
            "id": 18003831
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002712,
        "dedLicenseNumber": 1006532,
        "licenseExpireDate": "2025-05-16T04:00:00",
        "tradeName": {
            "valueEn": "SIMKIMCHIM FOR WEB-DESIGN",
            "valueAr": "زعيمكمشم لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 18002623
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002404,
        "dedLicenseNumber": 1006413,
        "licenseExpireDate": "2025-04-04T04:00:00",
        "tradeName": {
            "valueEn": "FCTYGUCHBI UKNJ FOR WEB-DESIGN",
            "valueAr": "فستيجشب أكنج لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 18002193
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002801,
        "dedLicenseNumber": 1006572,
        "licenseExpireDate": "2025-05-22T04:00:00",
        "tradeName": {
            "valueEn": "202405231141 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٥٢٣١١٤١",
            "id": 18002696
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001627,
        "dedLicenseNumber": 1005998,
        "licenseExpireDate": "2025-02-13T04:00:00",
        "tradeName": {
            "valueEn": "202402141212 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢١٤١٢١٢",
            "id": 18001520
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002961,
        "dedLicenseNumber": 1006630,
        "licenseExpireDate": "2025-05-28T04:00:00",
        "tradeName": {
            "valueEn": "202405291347 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٥٢٩١٣٤٧",
            "id": 18002776
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003961,
        "dedLicenseNumber": 1006984,
        "licenseExpireDate": "2025-07-30T04:00:00",
        "tradeName": {
            "valueEn": "202407310954",
            "valueAr": "202407310954",
            "id": 18003816
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001569,
        "dedLicenseNumber": 1005960,
        "licenseExpireDate": "2025-02-12T04:00:00",
        "tradeName": {
            "valueEn": "202402131425 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢١٣١٤٢٥",
            "id": 18001472
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003116,
        "dedLicenseNumber": 1006698,
        "licenseExpireDate": "2025-06-18T04:00:00",
        "tradeName": {
            "valueEn": "180003116 FOR WEB-DESIGN EST.",
            "valueAr": "مؤسسة ١٨٠٠٠٣١١٦ لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 18002933
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001640,
        "dedLicenseNumber": 1006009,
        "licenseExpireDate": "2025-02-13T04:00:00",
        "tradeName": {
            "valueEn": "202402141442 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢١٤١٤٤٢",
            "id": 18001534
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004456,
        "dedLicenseNumber": 1007139,
        "licenseExpireDate": "2025-08-08T04:00:00",
        "tradeName": {
            "valueEn": "202408091802",
            "valueAr": "202408091802",
            "id": 18004311
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 90438133,
        "dedLicenseNumber": 929237,
        "licenseExpireDate": "2022-05-24T04:00:00",
        "tradeName": {
            "valueEn": "777777 FOR AVIATION CONSULTANCY EST.",
            "valueAr": "مؤسسة ?????? لاستشارات الطيران",
            "id": 9007855
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002878,
        "dedLicenseNumber": 1006586,
        "licenseExpireDate": "2025-05-27T04:00:00",
        "tradeName": {
            "valueEn": "202405280828 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٥٢٨٠٨٢٨",
            "id": 18002719
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001563,
        "dedLicenseNumber": 1005956,
        "licenseExpireDate": "2025-02-12T04:00:00",
        "tradeName": {
            "valueEn": "202402131405 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢١٣١٤٠٥",
            "id": 18001467
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001633,
        "dedLicenseNumber": 1006004,
        "licenseExpireDate": "2025-02-13T04:00:00",
        "tradeName": {
            "valueEn": "202402141418 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢١٤١٤١٨",
            "id": 18001529
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002937,
        "dedLicenseNumber": 1006617,
        "licenseExpireDate": "2025-05-28T04:00:00",
        "tradeName": {
            "valueEn": "202405291119 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٥٢٩١١١٩",
            "id": 18002763
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002163,
        "dedLicenseNumber": 1006273,
        "licenseExpireDate": "2025-03-07T04:00:00",
        "tradeName": {
            "valueEn": "202403081133 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٣٠٨١١٣٣",
            "id": 18001923
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003852,
        "dedLicenseNumber": 1002943,
        "licenseExpireDate": "2023-07-25T04:00:00",
        "tradeName": {
            "valueEn": "TRY KIYA NAHI FOR SHISHA SERVICES EST.",
            "valueAr": "مؤسسة تري كيا نهي لخدمات تقديم الشيشة",
            "id": 18003697
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 90438209,
        "dedLicenseNumber": 929314,
        "licenseExpireDate": "2022-05-26T04:00:00",
        "tradeName": {
            "valueEn": "100 FOR WEB-DESIGN",
            "valueAr": "??? لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 9007939
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001637,
        "dedLicenseNumber": 1006008,
        "licenseExpireDate": "2025-02-13T04:00:00",
        "tradeName": {
            "valueEn": "202402141436 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢١٤١٤٣٦",
            "id": 18001533
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003851,
        "dedLicenseNumber": 1005635,
        "licenseExpireDate": "2024-12-06T04:00:00",
        "tradeName": {
            "valueEn": "KARELA KI SABJI TECH FOR WEB-DESIGN",
            "valueAr": "كارلا كي سبج تش لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 18003696
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003985,
        "dedLicenseNumber": 1006992,
        "licenseExpireDate": "2025-07-30T04:00:00",
        "tradeName": {
            "valueEn": "202407311305 EST.",
            "valueAr": "مؤسسة 202407311305",
            "id": 18003832
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003058,
        "dedLicenseNumber": 1006678,
        "licenseExpireDate": "2025-06-04T04:00:00",
        "tradeName": {
            "valueEn": "ETRADEPAID99 FOR UNIFORMS TRADING",
            "valueAr": "تردبدص لتجارة الملابس  والازياء الرسمية",
            "id": 18002863
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003120,
        "dedLicenseNumber": 1006712,
        "licenseExpireDate": "2025-06-19T04:00:00",
        "tradeName": {
            "valueEn": "180003120 FOR WEB-DESIGN",
            "valueAr": "١٨٠٠٠٣١٢٠ لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 18002980
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001327,
        "dedLicenseNumber": 1005811,
        "licenseExpireDate": "2025-01-30T04:00:00",
        "tradeName": {
            "valueEn": "202401311145 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠١٣١١١٤٥",
            "id": 18001297
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002969,
        "dedLicenseNumber": 1006638,
        "licenseExpireDate": "2025-05-28T04:00:00",
        "tradeName": {
            "valueEn": "202405291530 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٥٢٩١٥٣٠",
            "id": 18002785
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003848,
        "dedLicenseNumber": 1005638,
        "licenseExpireDate": "2024-12-10T04:00:00",
        "tradeName": {
            "valueEn": "KERELA JUICE TECH FOR WEB-DESIGN",
            "valueAr": "كيرلا جويس تش لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 18003693
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002617,
        "dedLicenseNumber": 1006485,
        "licenseExpireDate": "2025-05-07T04:00:00",
        "tradeName": {
            "valueEn": "JUNOON 123 FOR WEB-DESIGN",
            "valueAr": "جنون ١٢٣ لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 18002424
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001965,
        "dedLicenseNumber": 1006172,
        "licenseExpireDate": "2025-02-27T04:00:00",
        "tradeName": {
            "valueEn": "REGRESSION FOR GRAINS PACKAGING EST.",
            "valueAr": "مؤسسة تراجع لتعبئة الحبوب والغلال",
            "id": 18001756
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002979,
        "dedLicenseNumber": 1006645,
        "licenseExpireDate": "2025-05-29T04:00:00",
        "tradeName": {
            "valueEn": "202405300826 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٥٣٠٠٨٢٦",
            "id": 18002799
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001624,
        "dedLicenseNumber": 1005996,
        "licenseExpireDate": "2025-02-13T04:00:00",
        "tradeName": {
            "valueEn": "202402141151 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢١٤١١٥١",
            "id": 18001518
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002039,
        "dedLicenseNumber": 1006214,
        "licenseExpireDate": "2025-03-03T04:00:00",
        "tradeName": {
            "valueEn": "202403041525 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٣٠٤١٥٢٥",
            "id": 18001838
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001975,
        "dedLicenseNumber": 1006178,
        "licenseExpireDate": "2025-02-27T04:00:00",
        "tradeName": {
            "valueEn": "202402291325 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢٢٩١٣٢٥",
            "id": 18001765
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004453,
        "dedLicenseNumber": 1007137,
        "licenseExpireDate": "2025-08-08T04:00:00",
        "tradeName": {
            "valueEn": "202408091706",
            "valueAr": "202408091706",
            "id": 18004309
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004274,
        "dedLicenseNumber": 1007076,
        "licenseExpireDate": "2024-08-06T04:00:00",
        "tradeName": {
            "valueEn": "TRXDYF67 VUYIG FOR WEB-DESIGN",
            "valueAr": "تركسديفطح فيج لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 18004116
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001609,
        "dedLicenseNumber": 1005988,
        "licenseExpireDate": "2025-02-13T04:00:00",
        "tradeName": {
            "valueEn": "202402140901 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢١٤٠٩٠١",
            "id": 18001509
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004076,
        "dedLicenseNumber": 1007019,
        "licenseExpireDate": "2025-07-31T04:00:00",
        "tradeName": {
            "valueEn": "202408011547 EST.",
            "valueAr": "مؤسسة 202408011547",
            "id": 18003906
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002112,
        "dedLicenseNumber": 1006246,
        "licenseExpireDate": "2025-03-05T04:00:00",
        "tradeName": {
            "valueEn": "202403061133 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٣٠٦١١٣٣",
            "id": 18001875
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002012,
        "dedLicenseNumber": 1006202,
        "licenseExpireDate": "2025-03-03T04:00:00",
        "tradeName": {
            "valueEn": "SHUBHAM PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني شعبهم",
            "id": 18001817
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002980,
        "dedLicenseNumber": 1006646,
        "licenseExpireDate": "2025-05-29T04:00:00",
        "tradeName": {
            "valueEn": "ZIGZAGZOOO PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني زغزغزه",
            "id": 18002800
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004395,
        "dedLicenseNumber": 1007105,
        "licenseExpireDate": "2025-08-07T04:00:00",
        "tradeName": {
            "valueEn": "202408081240",
            "valueAr": "202408081240",
            "id": 18004263
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002971,
        "dedLicenseNumber": 1006640,
        "licenseExpireDate": "2025-05-28T04:00:00",
        "tradeName": {
            "valueEn": "202405291649 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٥٢٩١٦٤٩",
            "id": 18002792
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001766,
        "dedLicenseNumber": 1006075,
        "licenseExpireDate": "2025-02-20T04:00:00",
        "tradeName": {
            "valueEn": "202402211733 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢٢١١٧٣٣",
            "id": 18001617
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002947,
        "dedLicenseNumber": 1006619,
        "licenseExpireDate": "2025-05-28T04:00:00",
        "tradeName": {
            "valueEn": "202405291205 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٥٢٩١٢٠٥",
            "id": 18002765
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002928,
        "dedLicenseNumber": 1006610,
        "licenseExpireDate": "2025-05-28T04:00:00",
        "tradeName": {
            "valueEn": "202405291031 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٥٢٩١٠٣١",
            "id": 18002758
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003075,
        "dedLicenseNumber": 1006681,
        "licenseExpireDate": "2025-06-04T04:00:00",
        "tradeName": {
            "valueEn": "NORMUNP FOR UNIFORMS TRADING EST.",
            "valueAr": "مؤسسة نورمنب لتجارة الملابس  والازياء الرسمية",
            "id": 18002870
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001331,
        "dedLicenseNumber": 1005814,
        "licenseExpireDate": "2025-01-30T04:00:00",
        "tradeName": {
            "valueEn": "202401311503 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠١٣١١٥٠٣",
            "id": 18001300
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001330,
        "dedLicenseNumber": 1005813,
        "licenseExpireDate": "2025-01-30T04:00:00",
        "tradeName": {
            "valueEn": "202401311154 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠١٣١١١٥٤",
            "id": 18001299
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001701,
        "dedLicenseNumber": 1006035,
        "licenseExpireDate": "2025-02-18T04:00:00",
        "tradeName": {
            "valueEn": "202402191026 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢١٩١٠٢٦",
            "id": 18001568
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004336,
        "dedLicenseNumber": 1007090,
        "licenseExpireDate": "2025-08-05T04:00:00",
        "tradeName": {
            "valueEn": "PEOPLE",
            "valueAr": "شعب",
            "id": 18004173
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002952,
        "dedLicenseNumber": 1006624,
        "licenseExpireDate": "2025-05-28T04:00:00",
        "tradeName": {
            "valueEn": "202405291244 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٥٢٩١٢٤٤",
            "id": 18002770
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 90438083,
        "dedLicenseNumber": 929209,
        "licenseExpireDate": "2022-05-24T04:00:00",
        "tradeName": {
            "valueEn": "MEINEY SOCHA NA THA FOR LIVE THEATRICAL SHOW PRODUCTION",
            "valueAr": "ميني سوسه نا ذا لتنفيذ العروض والمهرجانات الفنية",
            "id": 9007812
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001401,
        "dedLicenseNumber": 1005862,
        "licenseExpireDate": "2025-02-04T04:00:00",
        "tradeName": {
            "valueEn": "202402051514 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢٠٥١٥١٤",
            "id": 18001361
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001717,
        "dedLicenseNumber": 1006048,
        "licenseExpireDate": "2025-02-18T04:00:00",
        "tradeName": {
            "valueEn": "202402191551 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢١٩١٥٥١",
            "id": 18001584
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180004454,
        "dedLicenseNumber": 1007138,
        "licenseExpireDate": "2025-08-08T04:00:00",
        "tradeName": {
            "valueEn": "202408091756",
            "valueAr": "202408091756",
            "id": 18004310
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003840,
        "dedLicenseNumber": 1005646,
        "licenseExpireDate": "2024-12-10T04:00:00",
        "tradeName": {
            "valueEn": "FULL GOBHI TECH FOR WEB-DESIGN",
            "valueAr": "فول جبه تش لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 18003686
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003841,
        "dedLicenseNumber": 1005059,
        "licenseExpireDate": "2024-09-04T04:00:00",
        "tradeName": {
            "valueEn": "20230905172311 FOR GRAINS PACKAGING EST.",
            "valueAr": "مؤسسة 20230905172311 لتعبئة الحبوب والغلال",
            "id": 18003687
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001574,
        "dedLicenseNumber": 1005963,
        "licenseExpireDate": "2025-02-12T04:00:00",
        "tradeName": {
            "valueEn": "202402131503 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢١٣١٥٠٣",
            "id": 18001477
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001607,
        "dedLicenseNumber": 1005986,
        "licenseExpireDate": "2025-02-13T04:00:00",
        "tradeName": {
            "valueEn": "202402140851 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢١٤٠٨٥١",
            "id": 18001507
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003965,
        "dedLicenseNumber": 1006985,
        "licenseExpireDate": "2025-07-30T04:00:00",
        "tradeName": {
            "valueEn": "202407311120 EST.",
            "valueAr": "مؤسسة 202407311120",
            "id": 18003822
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003839,
        "dedLicenseNumber": 1002894,
        "licenseExpireDate": "2024-07-12T04:00:00",
        "tradeName": {
            "valueEn": "LUTELA CHATNI FOR WEB-DESIGN",
            "valueAr": "لعطلة شطن لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 18003685
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001746,
        "dedLicenseNumber": 1006061,
        "licenseExpireDate": "2025-02-19T04:00:00",
        "tradeName": {
            "valueEn": "202402201534 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢٢٠١٥٣٤",
            "id": 18001600
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001573,
        "dedLicenseNumber": 1005962,
        "licenseExpireDate": "2025-02-12T04:00:00",
        "tradeName": {
            "valueEn": "202402131457 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢١٣١٤٥٧",
            "id": 18001475
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003838,
        "dedLicenseNumber": 929231,
        "licenseExpireDate": "2022-05-24T04:00:00",
        "tradeName": {
            "valueEn": "3454HG00 FOR WEB-DESIGN",
            "valueAr": "????هج?? لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 9007849
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "Dep. of Economic Development",
            "valueAr": "دائرة التنمية الاقتصادية",
            "id": 83
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003057,
        "dedLicenseNumber": 1006677,
        "licenseExpireDate": "2025-06-04T04:00:00",
        "tradeName": {
            "valueEn": "ETRADEUNPAID FOR UNIFORMS TRADING",
            "valueAr": "اطردونبد لتجارة الملابس  والازياء الرسمية",
            "id": 18002862
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002954,
        "dedLicenseNumber": 1006626,
        "licenseExpireDate": "2025-05-28T04:00:00",
        "tradeName": {
            "valueEn": "202405291316 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٥٢٩١٣١٦",
            "id": 18002772
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180003837,
        "dedLicenseNumber": 1002895,
        "licenseExpireDate": "2024-07-12T04:00:00",
        "tradeName": {
            "valueEn": "CHERAPUNJI MULAAAPA FOR WEB-DESIGN",
            "valueAr": "شربنج ملاعبة لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 18003684
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001605,
        "dedLicenseNumber": 1005984,
        "licenseExpireDate": "2025-02-13T04:00:00",
        "tradeName": {
            "valueEn": "202402140838 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢١٤٠٨٣٨",
            "id": 18001505
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180001978,
        "dedLicenseNumber": 1006180,
        "licenseExpireDate": "2025-02-27T04:00:00",
        "tradeName": {
            "valueEn": "202402291340 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٢٢٩١٣٤٠",
            "id": 18001768
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002926,
        "dedLicenseNumber": 1006609,
        "licenseExpireDate": "2025-05-28T04:00:00",
        "tradeName": {
            "valueEn": "WOODEN BRICK PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني وود بر",
            "id": 18002757
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002356,
        "dedLicenseNumber": 1006379,
        "licenseExpireDate": "2025-03-25T04:00:00",
        "tradeName": {
            "valueEn": "NOMIEE FOR WEB-DESIGN",
            "valueAr": "نومي لتصميم مواقع الشبكة المعلوماتية ( الانترنت)",
            "id": 18002126
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    },
    {
        "licenseId": 180002038,
        "dedLicenseNumber": 1006213,
        "licenseExpireDate": "2025-03-03T04:00:00",
        "tradeName": {
            "valueEn": "202403041512 PORTAL",
            "valueAr": "مجمع للتعامل الإلكتروني ٢٠٢٤٠٣٠٤١٥١٢",
            "id": 18001837
        },
        "legalType": {
            "valueEn": "Sole Establishment",
            "valueAr": "مؤسسة فردية",
            "id": 0
        },
        "licenseCategory": {
            "valueEn": "DED Traders",
            "valueAr": "رخصة التاجر",
            "id": 91
        },
        "functionIds": [
            1005,
            1006,
            1009,
            1014,
            1015,
            1018,
            1019,
            1020
        ]
    }
]
