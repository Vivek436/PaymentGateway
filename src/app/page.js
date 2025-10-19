"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { checkout } from "./checkout";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Image alt="illuminati" src="/payment.png" width={500} height={270}/>
      </div>
      <button className={styles.button}
      onClick={(()=>{
        checkout({
          lineItems:[{price:"price_1RpmXQ4rv3nB2eYtBTV8i1zR",quantity:1}]
        })
      })}
      >Buy Now</button>
    </main>
  )
}
