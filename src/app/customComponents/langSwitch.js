import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import {userLanguage} from "@/app/(main)/utils/language";
import Cookies from 'js-cookie';
import  { useState } from 'react'

function LangSwitch() {
    const langList = [
        { code: "fr", name: "(FR) French" },
        { code: "it", name: "(IT) Italian" },
        { code: "ge", name: "(GE) German" },
        { code: "en", name: "(EN) English" }
    ]
    const [cookieValue, setCookieValue] = useState(langList.filter(lang => lang.code === (Cookies.get('language') || 'fr')).map((l)=>l.name));
    

    const setLanguage=  (value) => {
        setCookieValue(langList.filter(lang => lang.code === value ).map((l)=>l.name));
        userLanguage(value);
        // Simulate a short delay for better UX before reloading the page
        window.location.reload();
            // Simulate a short delay for better UX before reloading the page
        setTimeout(() => {
            // Reload the page to apply changes
            window.location.reload();
        }, 1000);
    }
  return (
    <Select onValueChange= {(value)=> {setLanguage(value)}}>
    <SelectTrigger className="border border-[#DFEAF2] rounded-8 text-[#909090]">
        {cookieValue}
    </SelectTrigger>
    <SelectContent>
        {langList.map((lang,index)=> {
            return (
                <SelectItem 
                    key={index} 
                    value={lang.code}
                    className="text-heading text-left p-0 px-[27px] text-base leading-[50px] w-[200px] checked:text-red-700"
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