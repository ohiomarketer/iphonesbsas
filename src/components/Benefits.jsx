import React from 'react'
import service1 from '../assets/static/service-1.png'
import service2 from '../assets/static/service-2.png'
import service3 from '../assets/static/service-3.png'
import service4 from '../assets/static/service-4.png'

export const Benefits = () => {
  return (
    <section className="section service" style={{
        border: '1px solid #e5e5e5',
    }}>
    <div className="container">

      <ul className="service-list" data-aos='fade'>

        <li className="service-item">
          <div className="service-card">

            <div className="card-icon">
              <img src={service1} width="53" height="28" loading="lazy" alt="Service icon" />
            </div>

            <div>
              <h3 className="h4 card-title">Envio Gratis</h3>

              <p className="card-text">
                Con todas tus ordenes por mas de <span>$20000</span>
              </p>
            </div>

          </div>
        </li>

        <li className="service-item" data-aos='fade'>
          <div className="service-card">

            <div className="card-icon">
              <img src={service2} width="43" height="35" loading="lazy" alt="Service icon" />
            </div>

            <div>
              <h3 className="h4 card-title">Pago Seguro</h3>

              <p className="card-text">
                100% Seguro y Protegido
              </p>
            </div>

          </div>
        </li>

        <li className="service-item" data-aos='fade'>
          <div className="service-card">

            <div className="card-icon">
              <img src={service3} width="40" height="40" loading="lazy" alt="Service icon" />
            </div>

            <div>
              <h3 className="h4 card-title">Devoluciones</h3>

              <p className="card-text">
                En caso de que no cumpla con tus expectativas
              </p>
            </div>

          </div>
        </li>

        <li className="service-item" data-aos='fade'>
          <div className="service-card">

            <div className="card-icon">
              <img src={service4} width="40" height="40" loading="lazy" alt="Service icon" />
            </div>

            <div>
              <h3 className="h4 card-title">Soporte</h3>

              <p className="card-text">
                Atencion a toda hora del dia 24/7
              </p>
            </div>

          </div>
        </li>

      </ul>

    </div>
  </section>
  )
}
