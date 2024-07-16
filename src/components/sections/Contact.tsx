
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc"; 
import { slideIn } from "../../utils/motion"; 
import { EarthCanvas } from "../canvas"; 

const Achievements = () => {
  return (
    <div className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <h2 className="text-4xl font-bold text-white mb-8">Achievements</h2>

        <div className="grid grid-cols-1 gap-6">
          {/* Academic Achievements */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Academic Achievements (relevant subjects)
            </h3>

            {/* High Distinction */}
            <h4 className="text-xl font-semibold text-white">
              High Distinction:
            </h4>
            <ul className="list-disc list-inside text-lg text-gray-300 ml-6"> 
              <li>Agile Software Development Practices</li> 
            </ul>

            {/* Distinction */}
            <h4 className="text-xl font-semibold text-white mt-4">
              Distinction:
            </h4>
            <ul className="list-disc list-inside text-lg text-gray-300 ml-6"> 
              <li>Software Construction and Design 1</li>
              <li>Software Construction and Design 2</li>
              <li>Computational Modelling</li>
              <li>Human-Computer Interaction</li>
              <li>Object-Oriented Programming</li>
              <li>Foundations of Data Science</li>
            </ul>
          </div>

          {/* Awards */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Awards</h3>
            <ul className="list-disc list-inside text-lg text-gray-300">
              <li>
                "Customer Whisperer": Award for the staff member whose customer
                service skills go above and beyond. 
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* EarthCanvas Section */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Achievements, "achievements"); 