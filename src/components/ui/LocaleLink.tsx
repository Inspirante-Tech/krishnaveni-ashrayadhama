"use client"
import Link from "next/link";
import { useLocale } from "next-intl";

export default function LocaleLink ({ href, ...props}:  React.ComponentProps<typeof Link>){
    const locale = useLocale();
    return (
        <Link href={`/${locale}${href}`} {...props} >
        </Link>
    )
}