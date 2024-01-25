"use client"

import Image from "next/image";
import styles from "./about.module.css"
import { useEffect, useState } from "react";

const AboutPage = () => {

  const [expNumber, setExpNumber] = useState(0)
  const [reached, setReached] = useState(0)
  const [plugins, setPlugins] = useState(0)
  const [isBright, setBright] = useState(false)

  useEffect(() => {

    const interval = setInterval(() => {
      setExpNumber((prev) => {
        if(prev < 20){
          prev += 1
        } else{
          prev += 0
          clearInterval(interval)
        }
        return prev
      })
      const interval2 = setInterval(() => {
        setReached((prev) => {
            if(prev < 1000){
              prev += 1
            } else{
              prev += 0
              clearInterval(interval2)
              setBright((prev) => true)
            }
            return prev
          })
      }, 10);
      const interval3 = setInterval(() => {
        setPlugins((prev) => {
            if(prev < 200){
              prev += 1
            }
             else{
              prev += 0
              clearInterval(interval3)
            }
            return prev
          })
      }, 40);
    }, 75);
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2>About company</h2>
        <h1>We create solutions for all types of problems</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quidem cumque in iure reiciendis dolorum recusandae voluptas
          necessitatibus facilis sed, harum reprehenderit.</p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>{expNumber}+</h1>
            <p className={isBright ? styles.bright : undefined}>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>{reached}+</h1>
            <p className={isBright ? styles.bright : undefined}>Companies reached</p>
          </div>
          <div className={styles.box}>
            <h1>{plugins}+</h1>
            <p className={isBright ? styles.bright : undefined}>Services and plugins</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src={"/coding.png"} alt="man coding" fill priority/>
      </div>
    </div>
  );
};

export default AboutPage;
