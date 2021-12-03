import React from 'react'
import Avatar from 'react-avatar';

const ContactDynamic = ({cont}) => {
    const {name,phone,email} = cont;
    return (
            <tr>
                <th>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" />
                        <label className="custom-control-label"></label>
                    </div>
                </th>
                <td><Avatar name={name} size="40" round={true} className="mr-3" />{name}</td>
                <td>{phone}</td>
                <td>{email}</td>
                <td className="action">
                    <a href="#">
                        <span className="material-icons mr-2">edit</span>
                    </a>
                    <a href="#">
                        <span className="material-icons text-danger">remove_circle</span>
                    </a>
                </td>
            </tr>
       
    )
}

export default ContactDynamic
