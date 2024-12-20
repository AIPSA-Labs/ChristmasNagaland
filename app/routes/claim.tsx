import { useSearchParams } from "@remix-run/react";

function Claim() {

    const [searchParams] = useSearchParams();
    const gift = searchParams.get("g");

    return ( 
        <div>
            
        </div>
     );
}

export default Claim;