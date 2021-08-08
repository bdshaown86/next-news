import { Toolbar } from '../components/toolbar'
import styles from '../styles/EOM.module.css'

const EOM = ({employee}) => {
    console.log("Emp:",employee)
    return (
        <div className="page-container">
          <Toolbar />
         <div className={styles.main}>
             <h1>Employee of the Month</h1>

             <div  className={styles.employeeOfTheMonth}>
                 <h3>{employee.name}</h3>
                 <h6>{employee.position}</h6>
                 <img src={employee.image} />
                 <p>{employee.description}</p>
             </div>
         </div>
            
        </div>
    )
}

export default EOM

export async function getServerSideProps(context) {
    const apiResponse = await fetch('https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth');
  
    const employee = await apiResponse.json();
  
    if (!employee) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {
        employee:employee
      }, // will be passed to the page component as props
    }
  }
