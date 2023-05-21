import { useParams } from "react-router-dom";

export default function UseParamsEx()
{

        let parameters = useParams()

        return <div>
            Welcome {parameters.name}
        </div>



}