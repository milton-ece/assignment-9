const fakeData = [
    {
        id: '970901',
        img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
        name: 'Dr.Sohel Mahmud Sher',
        Spl: 'Family Medicine',
        edu: 'MBBS, MCPS, FCPS, Diploma in Child Health, MPH, CCD, CCCD(NHF), FCGP, MPH, MCPS, Diploma in Asthma(iccddrb), Trained in infertility & laproscopic surgery, MRCP(UK)',
        exp: '17 Years of experience'
    },
    {
        id: '970902',
        img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80',
        name: 'Dr.Abu Sayeed Tipu',
        Spl: 'Cardiology',
        edu: 'MBBS, MCPS, FCPS, MPH, CCD, CCCD(NHF), FCGP, MPH, MCPS, Diploma in Asthma(iccddrb), MRCP(UK)',
        exp: '21 Years of experience'
    },
    {
        id: '970903',
        img: 'https://images.unsplash.com/photo-1549068106-b024baf5062d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
        name: 'Dr.Tareq Hasan',
        Spl: 'Obstectrics and Gynecology',
        edu: 'MBBS, MCPS, FCPS, Diploma in Child Health, MPH, CCD, CCCD(NHF), FCGP, MPH, MCPS, Diploma in Asthma(iccddrb), Trained in infertility & laproscopic surgery, MRCP(UK)',
        exp: '17 Years of experience'
    },
    {
        id: '970904',
        img: 'https://images.unsplash.com/photo-1549068106-b024baf5062d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
        name: 'Dr.Mohammad Nurul Amin',
        Spl: 'Family Medicine',
        edu: 'MBBS, MCPS, FCPS, Diploma in Child Health, MPH, CCD, CCCD(NHF), FCGP, MPH, MCPS, Diploma in Asthma(iccddrb), Trained in infertility & laproscopic surgery, MRCP(UK)',
        exp: '20 Years of experience'
    },
    {
        id: '970906',
        img: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=399&q=80',
        name: 'Dr.Wahiduzzaman',
        Spl: 'Medicine',
        edu: 'MBBS, MCPS, FCPS, Diploma in Child Health, MPH, CCD, CCCD(NHF), FCGP, MPH, MCPS, Diploma in Asthma(iccddrb), Trained in infertility & laproscopic surgery, MRCP(UK)',
        exp: '15 Years of experience'
    },
    {
        id: '970907',
        img: 'https://images.unsplash.com/photo-1575779266306-a31239c3708f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        name: 'Dr.Kayes Majumder',
        Spl: 'Aurthopedic Surgeon',
        edu: 'MBBS, MCPS, FCPS, Diploma in Child Health, MPH, CCD, CCCD(NHF), FCGP, MPH, MCPS, Diploma in Asthma(iccddrb), Trained in infertility & laproscopic surgery, MRCP(UK)',
        exp: '17 Years of experience'
    },
    {
        id: '970908',
        img: 'https://images.unsplash.com/photo-1584361853901-dd1904bb7987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        name: 'Dr.Sherish Khan',
        Spl: 'Family Medicine',
        edu: 'MBBS, MCPS, FCPS, Diploma in Child Health, MPH, CCD, CCCD(NHF), FCGP, MPH, MCPS, Diploma in Asthma(iccddrb), Trained in infertility & laproscopic surgery, MRCP(UK)',
        exp: '19 Years of experience'
    },
    {
        id: '970909',
        img: 'https://images.unsplash.com/photo-1553291413-e5f0e2932694?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        name: 'Dr.Mustfizur Rahman Syed',
        Spl: 'Eye Specialist',
        edu: 'MBBS, MCPS, FCPS, Diploma in Child Health, MPH, CCD, CCCD(NHF), FCGP, MPH, MCPS, Diploma in Asthma(iccddrb), Trained in infertility & laproscopic surgery, MRCP(UK)',
        exp: '22 Years of experience'
    },
    {
        id: '970910',
        img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        name: 'Dr.Abid Khan',
        Spl: 'Family Medicine',
        edu: 'MBBS, MCPS, FCPS, Diploma in Child Health, MPH, CCD, CCCD(NHF), FCGP, MPH, MCPS, Diploma in Asthma(iccddrb), Trained in infertility & laproscopic surgery, MRCP(UK)',
        exp: '16 Years of experience'
    },
    {
        id: '970911',
        img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        name: 'Dr.Abdullah Al Mamun',
        Spl: 'Family Medicine',
        edu: 'MBBS, MCPS, FCPS, Diploma in Child Health, MPH, CCD, CCCD(NHF), FCGP, MPH, MCPS, Diploma in Asthma(iccddrb), Trained in infertility & laproscopic surgery, MRCP(UK)',
        exp: '18 Years of experience'
    },
    {
        id: '970912',
        img: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        name: 'Dr.A B M Nurunnabi Talukder',
        Spl: 'Family Medicine',
        edu: 'MBBS, MCPS, FCPS, Diploma in Child Health, MPH, CCD, CCCD(NHF), FCGP, MPH, MCPS, Diploma in Asthma(iccddrb), Diploma in Family Medicine, MRCP(UK)',
        exp: '21 Years of experience'
    },
    {
        id: '970914',
        img: 'https://images.unsplash.com/photo-1534491089148-7a0f3dc3c20e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80',
        name: 'Dr.Zakaria Khan',
        Spl: 'Hematology',
        edu: 'MBBS, MCPS, FCPS, Diploma in Child Health, MPH, CCD, CCCD(NHF), FCGP, MPH, MCPS, Diploma in Asthma(iccddrb), Trained in infertility & laproscopic surgery, MRCP(UK)',
        exp: '25 Years of experience'
    },
    {
        id: '970915',
        img: 'https://images.unsplash.com/photo-1517865288-978fcb780652?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
        name: 'Dr.Bivash Mandal',
        Spl: 'Family Medicine',
        edu: 'MBBS, MCPS, FCPS, Diploma in Child Health, MPH, CCD, CCCD(NHF), FCGP, MPH, MCPS, Diploma in Asthma(iccddrb), Trained in infertility & laproscopic surgery, MRCP(UK)',
        exp: '25 Years of experience'
    },
    {
        id: '970916',
        img: 'https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        name: 'Dr.Mostafa Kamal',
        Spl: 'Family Medicine',
        edu: 'MBBS, MCPS, FCPS, Diploma in Child Health, MPH, CCD, CCCD(NHF), FCGP, MPH, MCPS, Diploma in Asthma(iccddrb), Trained in infertility & laproscopic surgery, MRCP(UK)',
        exp: '19 Years of experience'
    },
    {
        id: '970917',
        img: 'https://images.unsplash.com/photo-1584467735815-f778f274e296?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
        name: 'Dr.Abdullah Faruk',
        Spl: 'Family Medicine',
        edu: 'MBBS, MCPS, FCPS, Diploma in Child Health, MPH, CCD, CCCD(NHF), FCGP, MPH, MCPS, Diploma in Asthma(iccddrb), Trained in infertility & laproscopic surgery, MRCP(UK)',
        exp: '27 Years of experience'
    },
    {
        id: '970201',
        srvlogo: 'https://image.freepik.com/free-photo/asian-young-main-group-hospital-professional_1291-37.jpg',
        srvname: 'Our Doctors',
        srvtitle: 'Sparta Doctors Listen',
        srvdescription: 'At Sparta you will be treated by caring, internationally trained doctors. They take the time to listen to you and understand your healthcare needs.'
    },
    {
        id: '970202',
        srvlogo: 'https://images.unsplash.com/photo-1582719471327-5bd41fcf7f7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=686&q=80',
        srvname: 'Our Lab',
        srvtitle: 'Diagnostics you can trust',
        srvdescription: 'Our lab participates in the world???s largest external quality assessment scheme. Our average accuracy score is 99.9% and rated one of the best in Bangladesh.'
    },
    {
        id: '970203',
        srvlogo: 'https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
        srvname: 'Vaccination',
        srvtitle: 'Reliefe tension',
        srvdescription: 'We are trusted by the government of Bangladesh to carry out COVID-19 tests. If you or any of your loved ones think you are infected by the coronavirus and want to get tested, you can book an appointment for a home sample collection and we will come to you.'
    },
    {
        id: '970204',
        srvlogo: 'https://images.unsplash.com/photo-1606318313647-137d1f3b4d3c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=877&q=80',
        srvname: 'Health Checks',
        srvtitle: 'Regular Health Checkup',
        srvdescription: 'We believe in prevention rather than treatment. Our health checks help you stay on top of your health. Choose the one that is right for you.'
    },
    {
        id: '970205',
        srvlogo: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        srvname: 'Home Service',
        srvtitle: 'Sample Collection',
        srvdescription: 'Know if you may be suffering from Dengue fever and have Praava doctors help you recover'
    },
    {
        id: '970206',
        srvlogo: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
        srvname: 'Inclinic Services',
        srvtitle: 'Sparta Family Health Center',
        srvdescription: 'We take care of all your outpatient needs under one roof'
    },
]

