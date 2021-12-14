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
                <img src="https://ccc-x.jd.com/dsp/nc?ext=aHR0cHM6Ly9jaGFubmVsLW0uamQuY29tL3BjL3BzcC8zMzg0ODcwMDY1MD9pbXVwPUNnWUtBQklBR0FBU0VRanEzYWlNZmhDQzB6TWFBQ0NuVENnQkdOb2hJQUFxSDJsaUxIVmxMSGhuWkN4bmFXRXNZMmxpTEdaZlltRmZabXhmYkRRNU16Z3lBbWxpU3MwQlNYeFRTRlZPVkY5SlFpeEpYMEZmUmt4ZlFpeEpYMEZmVWtWZlFpeEpYMEZmVUV4ZlFpeEpYMEZmVTB4ZlFpeEpYMEZmUTFOZlFpeEpYMVZmUmt4ZlFpeEpYMU5mUmt4ZlFpeEpYMUpmUmt4ZlFpeEpYMUJmUmt4ZlFpeEpYMGRmVWt4ZlFpeEpYMGRmV0VkZlVpeEpYMEpmUmt4ZlRFTXNSMGxCTEZoSFJDeFZSWHhIS2tsZlFWOUdURjlWTVRNMU9EQXNSeXBKWDFKZlJreGZWVEV6TlRnd0xFY3FTVjlTWDBaTVgwd3hOVGM0TkR0R2ZFMUpXRlJCUjE5R1VpeEdYMEpCWDBaTVgwdzBPVE00ZkE&log=fhFQqkmFUXay9Z91ChuEgwOOURzgT6-0TPC2iX2EozxXVPRKa3DDxmndM51lVjnTkrlxiWybyzQf2ZyrEMfthu4WY_nikiL-O51KEgSYRjC-Rmh3NpzSTg1qYYCRDfo5COpCTgFiErOQ7rnhunJf1zVQ7Fn7-CL1QhS0xZyfFV5aMgTBSTy95vCw-7zy-d6TXmWqfhWXfwqixdThua78x5MSwU_0W7zDW12EnfHLml0KpPJPA7wyaWkX7KhSb9JyBDRQmdhI6SMARZCdc3bvhYlOdjWH63WXxYkkpQi5J5ubTlw1A_y7p4Xt9ZXUmUkhYqiWySsQKE-lgI3HfT92ikTKzxw3iMNG0Woqnt4Z1bF7h1-v3CZjQgx03uLaLsfAFbLuEM_sVPhNpohnE0uaJKmUkSKCvkeYAZuUxxztb3tspi0gCAqW75xdvN1L8p3HyIOP47Jj4_ZCGSlnBtFiBam-8DYNOTyGcbqSkz41iT8lN5lkNGL0sUHSyrGKWXQ60R2nRwTxOLgH4054msz4XXLJRP2rZzGD4dYGt75h-HZ7-k9Zx2hDpP4QveCrDkJKvO3-RsV4xa31QhGxASKnjA4C0FZvrXldg10CvF-FRbs-yHw-6zqyglzB2jkyk9vL5uC3xzD0XFqiX-BfX_j0mu0aeCfbgtfXGvwKz6FpwxPB-EWna061xcepFPWhl2Xf5fgX5WSsi_ONG1GSmRiMzL9RqMFd6xqYVitEvQAg6UsrQURbAr_WiDuK7XFgaKCCYzO4P67AXC84fI8EsOvzgRMmN1gjCXVR60-sn2rzup3WR8BUBWGb3ZorooVR9B6_0FbjXH6F_lyMziOz2Z8OV89KJ1EZHXc4W6S0YryV4pNAEQoVtYIQ37_0b5HwNgDTSmdTkmA7HWxU0af6tke_ZOcXgNehchAoTFYZVEWgubtBa0GSzoD1guqw4pcjQuaYWN7wrNQbqaqTsKXe99TEvXOKxou70QlNY3LwXOAPcNWqndNCr-S4c1V9DpjChrF0pdqybKnaOybtNy_mTSAgKQfuC6oz3rC9WPgoDQC9FJk4RunBEX6zXOHFSNeGS8Z3fobkZg5VNqS4DGjtiKW7rcaqZpzCC9_M7lFgN8EKKoXPQH4nivvSFn7hgJQspJae&v=404" alt="" />
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