import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Summary } from './Summary';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { useShopContext } from '../context/shopContext';
import { NoProducts } from './NoProducts';

export const Payment = () => {
    const [paymentOption, setPaymentOption] = useState(null);
    const navigate = useNavigate();
    const cbuRef = useRef();

    const { cartItems } = useShopContext();

    const handlePaymentOptionChange = (event) => {
        setPaymentOption(event.target.id);
    };

    const copyCBUToClipboard = (cbu) => {
        navigator.clipboard.writeText(cbu)
            .then(() => {
                console.log('CBU copied to clipboard:', cbu);
                // Puedes agregar aquí cualquier lógica adicional, como mostrar un mensaje de éxito
                toast.success('CBU copiado al portapapeles');
            })
            .catch((error) => {
                console.error('Failed to copy CBU to clipboard:', error);
                // Si ocurre un error, puedes mostrar un mensaje de error al 
                toast.error('Error al copiar el CBU al portapapeles');
            });
    };

    return (

        cartItems.length === 0 ? (
            <NoProducts text='tu carrito'/>
        ) : ( 
        <section className='payment'>
            <div className='title'>
                <h2> Informacion de Pago </h2>
            </div>

            <div className="payment-options">
                <div className={`payment-method ${paymentOption === 'credit' ? 'active' : ''}`}>
                    <input type="radio" name="payment" id="credit" onChange={handlePaymentOptionChange} />
                    <label htmlFor="credit">Tarjeta de Credito/Debito</label>
                </div>
                <div className={`payment-method ${paymentOption === 'transfer' ? 'active' : ''}`}>
                    <input type="radio" name="payment" id="transfer" onChange={handlePaymentOptionChange} />
                    <label htmlFor="transfer">Transferencia Bancaria (15%OFF)</label>
                </div>
            </div>

            <div className={`credit-card ${paymentOption === 'credit' ? 'active' : ''}`}>
            <div className="form-group">
                <label htmlFor="card">Numero de Tarjeta</label>
                <input type="text" id="card" name="card" required />
            </div>
            <div className="form-group">
                <label htmlFor="date">Fecha de Vencimiento</label>
                <input type="text" id="date" name="date" required />
            </div>
            <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" required />
            </div>
            <button className="credit-btn">Completar Orden</button>
            <button className="cancel-btn" onClick={() => navigate('/shipping')}>Ir a Envios</button>
            </div>

            <div className={`transfer ${paymentOption === 'transfer' ? 'active' : ''}`}>
            <ion-icon name="information-circle-outline" aria-hidden="true" style={{
                    position: 'absolute',
                    top: "10px",
                    left: "10px",
                    cursor: 'pointer'
                }} onClick={() => {
                    Swal.fire({
                        title: 'Transferencia Bancaria',
                        text: 'Luego de realizar la transferencia envianos tu comprobante por instagram o por email. Estaremos procesando tu orden una vez que lo recibamos!',
                        icon: 'info',
                        confirmButtonText: 'Entendido'
                    });
                }}></ion-icon>
            <ion-icon name="copy-outline" aria-hidden="true" style={{
                    position: 'absolute',
                    top: "10px",
                    right: "10px",
                    cursor: 'pointer'
                }} onClick={() => copyCBUToClipboard('0000076500000022615033')}></ion-icon>
            <ul className='transfer-list'>
                <li className='item'>CUENTA:  Dario Jonathan Guevara</li>
                <li className='item' ref={cbuRef}>CBU: 0000076500000022615033</li>
                <li className='item'>ALIAS: dguevara59.ppay</li>
                <li className='item'>CUIT: 20-38867289-8</li>
                <li className='item'>
                    <button className="transfer-btn" onClick={() => {
                        Swal.fire({
                            title: 'Comprobante de Transferencia',
                            text: 'Envianos tu comprobante por instagram o por email. Estaremos procesando tu orden una vez que lo recibamos!',
                            icon: 'info',
                            confirmButtonText: 'Enviar por Instagram',
                            showDenyButton: true,
                            denyButtonText: 'Enviar por Email',
                            confirmButtonColor: '#e1306c',
                            denyButtonColor: '#3085d6',
                            confirmButtonAriaLabel: 'Enviar por Instagram',
                            denyButtonAriaLabel: 'Enviar por Email',
                        }).then((result) => {
                            if (result.isConfirmed) {
                                window.open('https://www.instagram.com/iphonesbsas_/', '_blank');
                                Swal.fire('Redirigido a Instagram', '', 'info');
                            } else if (result.isDenied) {
                                window.open('mailto: iphonesbsas0@gmail.com', '_blank');
                                Swal.fire('Redirigido a Email', '', 'info');
                            }
                        });
                    }}>Enviar Comprobante</button>
                </li>
            </ul>
            </div>

            <Summary />
        </section>
    ));
};