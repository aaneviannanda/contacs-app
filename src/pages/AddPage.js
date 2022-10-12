import React from 'react';
import { addContact } from '../utils/api';
import ContactInput from '../components/ContactInput';
import { useNavigate } from 'react-router-dom';

export default function AddPage() {
    const navigate = useNavigate();

    const  onAddContactHandler = async(contact) => {
        addContact(contact);
        navigate('/');
    }
        
    return (
        <section>
            <h2>Tambah kontak</h2>
            <ContactInput addContact={onAddContactHandler} />
        </section>
    )
}
