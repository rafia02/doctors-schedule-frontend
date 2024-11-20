import Caring from "@/components/home/caring"
import DepartmentTypes from "@/components/home/depertmentTypes"
import Hero from "@/components/home/hero"
import OnlineServiceSection from "@/components/home/onlineServiceSection"
import PatientCareServices from "@/components/home/patientCareServices"
import SearchBar from "@/components/home/searchbar"
import WhyBetter from "@/components/home/whyBetter"



const HomePage = () => {
  return (
    <div>
      <Hero></Hero>
      <SearchBar></SearchBar>
      <DepartmentTypes></DepartmentTypes>
      <PatientCareServices></PatientCareServices>
      <OnlineServiceSection></OnlineServiceSection>
      <Caring></Caring>
      <WhyBetter></WhyBetter>
    </div>
  )
}

export default HomePage