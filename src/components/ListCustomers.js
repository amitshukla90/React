import React, {PureComponent} from 'react'
import { Customer } from '../model/Customer';
import './ListCustomers.css';
import CustomerForm from './CustomerForm';
import axios from 'axios';


class ListCustomer extends PureComponent {

    state = {
        customers: [],
        addMode: false,
        selectedCustomer: null
    }

    constructor(props){
        
        super(props);
        
        this.url = "https://calm-beach-18228.herokuapp.com/Customers";
        // this.state.customers.push(new Customer(1, "Facebook", "Bangalore"));
        // this.state.customers.push(new Customer(2, "Apple", "Hyderabad"));
        // this.state.customers.push(new Customer(3, "Google", "Bangalore"));
        // this.state.customers.push(new Customer(4, "Reliance", "Mumbai"));

        // this.initCustomers = [...this.state.customers];
        console.log("[ListCustomers constructor]");
    }

    componentWillMount(){
        console.log("[ListCustomers componentWillMount]");
    }
    componentDidMount(){
        console.log("[ListCustomers componentDidMount]");

        axios
            .get(this.url)
            .then((resp) => {
                
                console.log("success: ", resp);
                this.setState({
                    customers: resp.data
                });
                this.initCustomers = [...this.state.customers];

            }, (resp) => {
                console.log("error: ", resp);
            });

    }

    componentWillReceiveProps(nextProps){
        console.log("[ListCustomers componentWillReceiveProps]");
    }
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log("[ListCustomers shouldComponentUpdate]");
    //     return true;
    // }
    componentWillUpdate(nextProps, nextState){
        console.log("[ListCustomers componentWillUpdate]");
    }
    componentDidUpdate(){
        console.log("[ListCustomers componentDidUpdate]");
    }
    componentWillUnmount(){
        console.log("[ListCustomers componentWillUnmount]");
    }




    add = (customer) => {

        axios
            .post(this.url, customer)
            .then(()=> {

                const updatedCustomers = [...this.state.customers];
                updatedCustomers.push(customer);

                this.setState({
                    customers: updatedCustomers
                });
                

            }, () => {
                alert("Save Failed");
            });

        
    }

    delete = (id) => {

        axios
            .delete(this.url + "/" + id)
            .then(() => {
                const updatedCustomers = [...this.state.customers];
                const index = updatedCustomers.findIndex((cust) => cust.id === id );
                updatedCustomers.splice(index, 1);
                this.setState({
                    customers: updatedCustomers
                });
                alert("Deleted");
            }, () => {
                alert("Delete Failed: Not Found");
            })

        
        //this.initCustomers.splice(index, 1);
    }

    search = (evt) => {

        const searchText = evt.target.value;
        if(searchText){

            const customers = [...this.state.customers];
            const filteredCustomers =  customers.filter((cust) => {
                                            return cust.id.toString().includes(searchText) 
                                                        || cust.name.toLowerCase().includes(searchText.toLowerCase())
                                                        || cust.location.toLowerCase().includes(searchText.toLowerCase());
                                        });
            this.setState({customers: filteredCustomers});                            
        }
        else{
            this.setState({customers: this.initCustomers});  
        }

    }
    edit = (customer)=> {

        this.setState({
            selectedCustomer: customer
        });
    }

     render(){

        console.log("[ListCustomers render]");
        const customersJSX = this.state.customers.map((cust, index) => {
            return (
                <div key={index} className="customer">
                    <p>Id: {cust.id}</p>
                    <p>Name: {cust.name}</p>
                    <p>Location: {cust.location}</p>
                    <div>
                        <button onClick={() => {this.delete(cust.id)}}>Delete</button>
                        <button onClick={() => {this.edit(cust)}}>Edit</button>
                    </div>
                </div>
            );
        });

         return (
             <div>
                 <h3>Customers</h3>
                 <div>
                     <input type="search" placeholder="Search" onChange={this.search}/>
                 </div>
                 <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                     {this.state.customers.length === 0? <p>No Records Found</p>: customersJSX}
                 </div>
                 <div>
                     <button onClick={() => {this.setState({addMode: true})}}>Add New</button>
                 </div>   
                 <div>
                    {this.state.addMode? <CustomerForm saved={this.add} 
                                            cancelled={() => {this.setState({addMode: false})}}/> : null} 
                 </div> 
                 <div>

                    {this.state.selectedCustomer ? 
                            <CustomerForm 
                                key={this.state.selectedCustomer.id} 
                                customer={this.state.selectedCustomer}/> : null}

                 </div>
             </div>
         );
     }

}

export default ListCustomer;

