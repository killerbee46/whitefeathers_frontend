export const myCurrency = 
// localStorage.getItem('currency') || 
"npr"

export const setCurrency = (value:string) => {
    // localStorage?.setItem('currency',value)
    window.location.reload()
}

const tempValues = undefined
// localStorage.getItem('currencyValues')

export const currencyValues = tempValues && tempValues !== undefined ? JSON.parse(tempValues) : {
    usd:139,
    aud:91,
    eur:160,
    npr:1
}