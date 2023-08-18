
import { Header_top } from "./components/Header_top";
import { Display_task } from "./components/Display_task";
import { Add_task } from "./components/Add_task";



export default function App() {

  // to update for every 30 seconds





  return (
    <div className="h-screen w-full bg-slate-100">
      <Header_top />
      {/* header ends here */}


      {/* body to display taks */}
      <div className=" h-2/3 overflow-y-scroll mb-10 w-full">
        {/* Call display components */}
        <Display_task data={{
          taskId: "",
          done: false,
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore at natus voluptas vero recusandae? Quam dignissimos consequatur inventore quis sint perferendis tenetur dolores eaque illum distinctio alias, voluptas ipsam dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aperiam vel, repudiandae, quae maiores ad dolores impedit hic quod quidem nemo, officiis deleniti nesciunt excepturi totam pariatur quas! Harum, optio?"
        }} />


        <Display_task data={{
          taskId: "",
          done: false,
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore at natus voluptas vero recusandae? Quam dignissimos consequatur inventore quis sint perferendis tenetur dolores eaque illum distinctio alias, voluptas ipsam dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aperiam vel, repudiandae, quae maiores ad dolores impedit hic quod quidem nemo, officiis deleniti nesciunt excepturi totam pariatur quas! Harum, optio?"
        }} />


        <Display_task data={{
          taskId: "",
          done: false,
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore at natus voluptas vero recusandae? Quam dignissimos consequatur inventore quis sint perferendis tenetur dolores eaque illum distinctio alias, voluptas ipsam dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aperiam vel, repudiandae, quae maiores ad dolores impedit hic quod quidem nemo, officiis deleniti nesciunt excepturi totam pariatur quas! Harum, optio?"
        }} />


        <Display_task data={{
          taskId: "",
          done: false,
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore at natus voluptas vero recusandae? Quam dignissimos consequatur inventore quis sint perferendis tenetur dolores eaque illum distinctio alias, voluptas ipsam dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aperiam vel, repudiandae, quae maiores ad dolores impedit hic quod quidem nemo, officiis deleniti nesciunt excepturi totam pariatur quas! Harum, optio?"
        }} />


        <Display_task data={{
          taskId: "",
          done: true,
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore at natus voluptas vero recusandae? Quam dignissimos consequatur inventore quis sint perferendis tenetur dolores eaque illum distinctio alias, voluptas ipsam dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aperiam vel, repudiandae, quae maiores ad dolores impedit hic quod quidem nemo, officiis deleniti nesciunt excepturi totam pariatur quas! Harum, optio?"
        }} />
      </div>

      {/* fotter to add tasks */}

      <Add_task />



    </div >

  )
}