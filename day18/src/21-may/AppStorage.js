import { Provider } from "react-redux";
import store from "./mystore";
import C1s from "./C1";
import C2 from "./C2";
import Counter from "./RC1";

export default function AppStorage()
{
    return(
        <>
        <Provider store={store}>
        <C1s></C1s>
        <C2></C2>
        <Counter></Counter>
        </Provider>
        </>
    )
    
}