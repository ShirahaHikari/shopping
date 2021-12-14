import React from 'react'
import { connect } from 'dva'
import { Carousel } from 'antd';
import { Dispatch } from 'redux'

const PageHeader = () => {
    return (
        <Carousel autoplay>
            <div>
                <img src="https://imgcps.jd.com/ling4/100014348492/6auY5oCn6IO95omL5py657K-6YCJ/54iG5qy-55u06ZmN/p-5bd8253082acdd181d02fa64/2db37109/cr/s/q.jpg" alt="" />
            </div>
            <div>
                <img src="https://imgcps.jd.com/ling4/8321142/5b-D5b-D5b-15b-155qE6Zu26aOf/54iG5qy-55u06ZmN/p-5bd8253082acdd181d02fa5d/121e7088/cr/s/q.jpg" alt="" />
            </div>
            <div>
                <img src="https://ccc-x.jd.com/dsp/nc?ext=aHR0cHM6Ly9jaGFubmVsLW0uamQuY29tL3BjL3BzcC83NTYxOTUzP2ltdXA9Q2dZS0FCSUFHQUFTR0FqaHhjMERFUFdlOGR3REdnVnZiSGw2YUNETWd3RW9BUml2R3lBQUtoOXBZaXgxWVN4NFoyUXNaMmxrTEdOcFpTeG1YMkpoWDJac1gydzBPVE00TWdKcFlrck5BVWw4VTBoVlRsUmZTVUlzU1Y5QlgwWk1YMElzU1Y5QlgxSkZYMElzU1Y5QlgxQk1YMElzU1Y5QlgxTk1YMElzU1Y5QlgwTlRYMElzU1Y5VlgwWk1YMElzU1Y5VFgwWk1YMElzU1Y5U1gwWk1YMElzU1Y5UVgwWk1YMElzU1Y5SFgxSk1YMElzU1Y5SFgxaEhYMUlzU1Y5Q1gwWk1YMHhETEVkSlJDeFlSMFFzVlVGOFJ5cEpYMEZmUmt4ZlZURXpOVGd3TEVjcVNWOVNYMFpNWDFVeE16VTRNQ3hIS2tsZlVsOUdURjlNTVRVM09EUTdSbnhOU1ZoVVFVZGZSbElzUmw5Q1FWOUdURjlNTkRrek9Idw&log=-2g0Dg43LMkG7ZgOTl0U2dSwT6Yx6jr285qiqfNnmGnPeQR9r-nraJLrppLP7KVc1d3lSeTpVNfWC9xkgKwFrRKsISfgvMCG21W-bvEWsrUqxD5LlEKdtRpPJAq6XZAZip6DeHixKXBkK8ALx4s9SWDZgaKkqkkzlbww4siW7Ejr_obPMVauO3YuHrkJYmweCbiUx4KzcJqDeX44uTp2GGfzLXoGbOuDUaKytJFJiEG3QfPyyfcPXITxQ3Ou7TUp0T0OqzXKH7Oq7BCbHDsdG7eQICeOxKT0YKS8SAflSDzMiFwEcF-sLW2h2m80vo4E-dlNkQkvmcIsn8YZcMQhooSJhL1yQmbaP5E7GwHnEI7mil7pM_UA6FH-sEnDo9vpKeuu8NWCikMvwFAyxo1_u6StqgMlr5088O-gJLnukJmBeQE90N2LL1VClevTC4g0ooAdZPsv-nMFp-_WBDV1XOT2aTGx89fkABx2FKe-o6s7-R95rG-q89okm_9nMA4ZugaGDml5oIFeeJXKurPf5Z5sAMgwbXk7DGIb2tXnGovH1G9I1xq22CEvf5_5Mv7J00GjnakD3yYp_yr9ZdqzxKqiYP4buoX1FTvKXEGdPGEFHviLPlpSLGRhfWMMnecu_GkeP6Hh8OYmiLTgwju7X-jNgC-KgqwsdzYIUwxffU7o5Tk3NrhnPlObldMpW5aXDxt971ILOcykEP3bH_94g0H4N4VRHX2EPt1ECrbfFtuHA6QBiycl0Uax-lXQrs91F9NdrN1madCNVAXLgvxPMpqIO7phJEnyr0XAc4HDyzUVYhAu5eF3BCgfcXFD9LiGcEep-Y6p2JGywR2hzJ2rgNc2G0ETuIWoLjapNLJvn0IGALSV-QaMFDhDlIuqzJ0OkOONM4i_cqMqR1GNJcu4B6zZJJYsidQqdie16bLTfMZVHwvWHmCK2xkUmM8l_Sn43_jto7jCObHK-l9ItRzDKBBpJ4wSEU5dDfopoheCtgX7y9DmVv-01gy2a6RzrCDx_AN46brkjmHEA1FIqGNJqz74HhhqTB_oEBYk_Eju6WZx6f8p_QvWXKErlreB0f3PXsjiC8CsM_nH8poZjDolTw&v=404" alt="" />
            </div>
            <div>
                <img src="https://pro.jd.com/mall/active/2VyRHGE7jM1igBJcrjoB6ak1JJWV/index.html" alt="" />
            </div>
        </Carousel>
    )
}
const mapStateToProps = (homePageHeader: any) => { homePageHeader }
const mapDispatchToProps = (dispatch: Dispatch) => { }

export default connect(mapStateToProps, mapDispatchToProps)(PageHeader)