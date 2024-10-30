import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import {userLanguage} from "@/app/(main)/utils/language";
import Cookies from 'js-cookie';
import  { useState, useContext } from 'react'
import { LayoutContext } from '../layout';
import { addLanguage } from "../slices/authSlice";
import { useDispatch } from 'react-redux';

function LangSwitch() {
    const dispatch = useDispatch();
    const {handleLocale} = useContext(LayoutContext);
    const [selectedValue, setSelectedValue] = useState(Cookies.get('language') || 'fr');
    const langList = [
        { code: "fr", name: "(FR) French" },
        { code: "it", name: "(IT) Italian" },
        { code: "de", name: "(DE) German" },
        { code: "en", name: "(EN) English" }
    ]
    const [cookieValue, setCookieValue] = useState(langList.filter(lang => lang.code === (Cookies.get('language') || 'fr')).map((l)=>l.name));
    const setLanguage=  (value) => {
        setCookieValue(langList.filter(lang => lang.code === value ).map((l)=>l.name));
        userLanguage(value);
        handleLocale(value);
        setSelectedValue(value);
        dispatch(addLanguage(value));
    }
    console.log(selectedValue)
  return (
    <Select onValueChange= {(value)=> {setLanguage(value)}} value={selectedValue}>
    <SelectTrigger className="border border-[#DFEAF2] rounded-8 text-[#909090] focus:shadow-none focus:ring-0">
        {cookieValue}
    </SelectTrigger>
    <SelectContent>
        {langList.map((lang,index)=> {
            return (
                <SelectItem 
                    key={index} 
                    value={lang.code}
                    className="text-heading text-left p-0 px-[27px] text-base leading-[50px] w-[200px] data-[state=checked]:bg-[#E8F1FF] data-[state=checked]:text-heading"
                >
                    {lang.name}
                </SelectItem>
            )
        })}
    </SelectContent>
</Select>
  )
}

export default LangSwitch