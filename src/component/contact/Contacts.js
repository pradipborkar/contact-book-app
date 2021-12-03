import React from 'react'
import { useSelector } from 'react-redux'
import ContactDyamic from './ContactDynamic'

const Contacts = () => {
    const contact = useSelector(state => state.contact);
    return (
        <div className="shadow">
            <table class="table">
                <thead className="bg-danger text-white">
                    <tr>
                        <th>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" />
                                <label className="custom-control-label"></label>
                            </div>
                        </th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contact.contact.map(cont => (
                           <ContactDyamic cont={cont} key={cont.id} />
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Contacts
