import styles from "@/components/home/IntroductionSection.module.scss";

const IntroductionSection = () => {

   return (
       <section className={ styles['introduction_section'] }>
           <div className={ styles['introduction_section_main_content'] }>
               <h1 className={ styles['introduction_section_title'] }>Expert <span>Web-Development Services</span><br/> For Your Business</h1>
               <p className={ styles['introduction_section_desc'] }>Create your personal website and <strong>10x your monthly</strong> revenue using the <span><strong>unlimited opportunities</strong></span> of the digital realm.</p>
               
           </div>
           
       </section>
   );
};

export default IntroductionSection;