import { useRouter } from "next/router";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import setLanguage from 'next-translate/setLanguage';
import{useState} from 'react';

function BackButton() {
  const {t, lang} = useTranslation('common');
  const router = useRouter();

  return (
    <div className="flex items-center">
      <button
        onClick={() => router.back()}
        className="mr-2 p-1 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-500" />
      </button>
      <button         onClick={() => router.back()}
>
        <span className="text-gray-500 hover:text-gray-700">{t("indietro")} </span>
      </button>
    </div>
  );
}

export default BackButton;