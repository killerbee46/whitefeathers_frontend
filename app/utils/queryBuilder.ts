type QueryTypes = {
    data:QueryDataTypes[]
}
type QueryDataTypes = {
    name:string;
    value:string;
}

export const queryBuilder = ({data}:QueryTypes) => {
const queries = data && data.length !== 0 ? "?"+data?.map((q:any)=>{
            if (q?.name === "price") {
                return "minPrice="+q?.value[0]+"&maxPrice="+q?.value[1]
            }
            else if (q?.name === "weight") {
                return "minWeight="+q?.value[0]+"&maxWeight="+q?.value[1]
            }
            else if (q?.name === "metal") {
                return q?.value?.map((met:any)=> "metal[]="+met).join("&")
            }
            else{
                return q?.name + "=" +q?.value
            }
        }).join("&"):""

        return queries
}