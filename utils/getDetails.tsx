export const fetchDetails=async(queryArg:string)=>{
    let query=encodeURIComponent(queryArg);
    let Url=`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${process.env.NEXT_PUBLIC_SANITY_DATASET}?query=${query}`
   try{ 
    const res=await fetch(Url,{
        next:{
            revalidate:10,
        }
    });
    const Data=await res.json();
    return Data.result;
    }
    catch(err){
        return {};
    }
}