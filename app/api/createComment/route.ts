import { NextResponse,NextRequest} from "next/server";
import { sanityClient } from '../../../sanity';
export async function GET(req:Request)
{
    return NextResponse.json({msg:"hellworldl"})
}
export async function POST(req:NextRequest)
{
    const {_id,name,email,comment}=await req.json();
    try{
        await sanityClient.create({
            _type:"comment",
            post:{
                _type:"reference",
                _ref:_id,
            },
            name,
            email,
            comment,
        })
        return NextResponse.json({message:"Document is created"})
    }
    catch(err)
    {
        console.log(err);
        return NextResponse.json({message:"found some error"},{status:500})
    }
    // return NextResponse.json({_id,name,email,comment});
}