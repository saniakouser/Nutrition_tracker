import img1 from "../Images/log.jpg";
export default function About(){
    return(
        <div className="aboutPage">
        <h2>Welcome to InnerGlow Health - Your Personalized Wellness Partner!</h2>
        <div className="topAbout">
        <p>
            At InnerGlow, we understand that each individual is unique, and so are their health needs. 
            Our mission is to empower you on your journey to optimal health by providing personalized 
            nutrition details and exercise routines tailored to your specific requirements. Whether 
            you're managing a chronic condition, working towards a fitness goal, or simply aiming for
            a healthier lifestyle, WellNest is here to guide you every step of the way.
        </p>
        <img src={img1}/>
        </div>
        <div className="midAbout">
        <h3>Our Approach: Personalized and Holistic Wellness</h3>
        <p>
          At the heart of WellNest is a commitment to personalized and holistic wellness. We recognize that
          health is not a one-size-fits-all concept, and that's why our team of experienced nutritionists and
          fitness experts work together to create plans that suit your individual needs. Through cutting-edge
          technology and a deep understanding of nutrition and exercise science, we bring you a comprehensive 
          solution that considers your health goals, dietary preferences, and any existing medical conditions.
        </p>
        </div>
        <div className="downAbout">
        <p>
            <h3>Key Features:</h3>
            <h4>Personalized Nutrition Plans:</h4><p id="p">Receive detailed nutrition plans crafted to address your unique requirements,
            taking into account your dietary preferences, allergies, and health conditions. Our goal is to make healthy 
            eating enjoyable and sustainable.</p>
            <h4>Customized Exercise Routines:</h4><p id="p">Access exercise routines designed specifically for you by certified fitness 
            professionals. Whether you're a beginner or an experienced fitness enthusiast, our workouts are tailored to 
            help you achieve your goals safely and effectively.</p>
            <h4>Disease-Specific Guidance:</h4><p id="p">For individuals managing specific health conditions, WellNest provides specialized 
            guidance. From diabetes and heart health to weight management and more, our experts create plans that 
            complement your treatment and support your overall well-being.</p>
            <h4>Progress Tracking:</h4><p id="p">Stay motivated and informed with our intuitive progress tracking features. View your
            achievements, monitor your nutrition intake, and track your fitness milestones, all in one place. Our 
            user-friendly dashboard provides a visual representation of your journey, helping you stay on track and 
            celebrate your successes.</p>
            <h4>Community Support:</h4><p id="p">Connect with like-minded individuals on the WellNest platform. Share experiences, 
            gain insights, and motivate each other on your wellness journey. Our community is a supportive space 
            where you can learn, grow, and celebrate your successes together.</p>
        </p>
        <h3 id="z">Your Wellness, Your Way</h3>
        <p>At WellNest, we believe that wellness is a personal journey, and we're here to guide you every step of the way.
         Embrace a healthier, happier you with personalized nutrition, targeted exercise, and the support of a community 
         that understands your unique needs. Welcome to WellNest - where your well-being takes center stage.</p>
        </div>
        </div>
    )
}