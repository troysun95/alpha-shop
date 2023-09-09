import styles from "./Main.module.css"
import RegisterProgress from "./RegisterProgress/RegisterProgress.js"
import StepForm from "./StepForm/StepForm.js"
import Cart from "./Cart/Cart"
import ProgressControl from "./ProgressControl/ProgressControl.js"



export default function  Main(){
    return(
        <>
            <main className={styles.mainSite}>
                <section className={styles.contentContainer}>
                    <h2 >結帳</h2>
                    <RegisterProgress />
                    <div className={styles.contentWrapper}>
                        <div className={styles.ContentLeft}>
                            <StepForm />
                            <hr className={styles.divider}></hr>
                            <ProgressControl />
                        </div>
                    <div className={styles.contentRight}>
                        <Cart /> 
                    </div>  
                    </div>
                </section>
            </main>
        </>
    )
}