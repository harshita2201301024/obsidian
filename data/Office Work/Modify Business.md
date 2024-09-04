https://www.figma.com/proto/41EM6OZwm46IO3V5q184vk/IID-Enhancement%2fRequirements?page-id=10836:157779&node-id=10839-157811&viewport=229%2c550%2c0.18&t=sbZ1V1U2jpOkHSeb-1&scaling=min-zoom&starting-point-node-id=10839:157811



if (response.data?.error || response.code === 500) {  
  if (response.errors?.length) {  
    this.businessErrors = response.errors  
  }  
  this.globalErrorMessage = attachTraceID(response.desc, response[IID.TRACEID])  
} else if (response.data?.res?.error && response.data?.res?.message) {  
  this.errorMessage = attachTraceID(  
    response.data.res.message,  
    response[IID.TRACEID]  
  )  
  return response  
} else if (response.code === RESPONSE.SUCCESS && response.data) {  
  this.errorMessage = null  
  this.identifier = response.data?.identifier  
  this.currentStepActions =  
    response.data?.to?.reduce((acc, actionObj) => {  
      acc[actionObj.action] = actionObj.id  
      return acc  
    }, {}) || {}  
  const res = response.data?.res  
  if (res?.bean) {  
    this.bean = res.bean  
    this.applicationDraftId = res.bean?.applicationDraftId || ''  
    this.referenceNumber = res.bean?.referenceNumber || ''  
  }  
  
  switch (response.data.from?.action) {  
    case REGISTERED_BUSINESS_NAME_ACTIONS.PRIMARY_ACTIVITY:  
    case REGISTERED_BUSINESS_NAME_ACTIONS.SECONDARY_ACTIVITY:  
      this.secondaryActivities = res?.secondaryActivities  
      break  
  
    case REGISTERED_BUSINESS_NAME_ACTIONS.FETCH_PREFIX_SUFFIX:  
      if (res?.suffixPrefix?.length > 0) {  
        this.prefixSuffix = [...res.suffixPrefix].sort((a, b) => a.id - b.id)  
      }  
      break  
  
    case REGISTERED_BUSINESS_NAME_ACTIONS.CHECK_AVAILABILITY:  
      this.tradeNameMetaData = res || null  
      break  
    case REGISTERED_BUSINESS_NAME_ACTIONS.PREMIUM_FEE:  
      this.premium = res?.premium  
      break  
  
    default:  
  }  
  
  // SHOW FEES  
  if (  
    res?.currentStep === 'DISPLAY_FEE' &&  
    res?.paymentDetail &&  
    res?.feeItems  
  ) {  
    this.updateFees(attachTraceID(res, response[IID.TRACEID]))  
  }  
  
  // PAYMENT PAGE  
  if (  
    payload?.paymentMode &&  
    payload.paymentMode === SELECTED_PAYMENT.PAY_NOW  
  ) {  
    const redirectUrl = res?.paymentDetail?.redirectUrl || ''  
    if (journeyType === BUSINESS_NAME_JOURNEY_TYPE.SPECIAL_CASE_REQUESTS) {  
      setCookie(  
        SessionKeys.PaymentType,  
        PAYMENT_TYPES.SPECIAL_CASE_BUSINESS_NAME  
      )  
    } else {  
      setCookie(  
        SessionKeys.PaymentType,  
        isRenew  
          ? PAYMENT_TYPES.RENEW_REGISTERED_BUSINESS_NAME  
          : PAYMENT_TYPES.REGISTERED_BUSINESS_NAME  
      )  
    }  
  
    if (redirectUrl) {  
      window.location.href = redirectUrl  
    } else {  
      this.errorMessage = attachTraceID(  
        {  
          en: this.$t('errors.payment.invalid'),  
          ar: this.$t('errors.payment.invalid')  
        },  
        response[IID.TRACEID]  
      )  
    }  
  } else if (  
    payload?.paymentMode &&  
    payload.paymentMode === SELECTED_PAYMENT.GENERATE_VOUCHER &&  
    res?.paymentDetail  
  ) {  
    this.updateFees(attachTraceID(res, response[IID.TRACEID]))  
  }  
} else {  
  this.globalErrorMessage = attachTraceID(response.desc, response[IID.TRACEID])  
}  
return response
