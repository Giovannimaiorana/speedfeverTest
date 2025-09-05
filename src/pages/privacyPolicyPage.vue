<script>
export default {
    name: "sectionPrivacy"
}
</script>

<template>
    <div class="containerGenPrivacy">
        <div class="containerLogo">
            <router-link to="/"><img class="logo" src="/img/biancoSuRosso.webp" alt=""></router-link>
            <!--  <router-link to="/" class="text-white text-4xl poppins-semibold cursor-pointer hov">HOME</router-link>-->
        </div>
        <div class="wrapperPrivacy">
            <div class="rectangleInfoPrivacy">
                <p class="font-bold text-white poppins-light text-center">Privacy Policy – Speed Fever
                    Who We Are <br />
                    Speed Fever is provided by OVERFAM s.r.l.s<br />
                    Registered office: VIA COLLE FICORONE 11 - 00020 - AGOSTA (RM), Italy<br />
                    Email: support@speedfever.appv

                    Data We Collect<br />
                    Email and password (only if you register directly with us)

                    Email only (if you use external providers like Google, Discord, Twitch, Facebook)

                    Local technical data (active game processes and UDP ports) used solely to run the overlay

                    Payment data managed by Stripe (not stored by us)

                    Why We Collect Your Data
                    To manage your access and authentication

                    To monitor and improve the service

                    To handle subscriptions and payments via secure platforms

                    We do not use your data for marketing or advertising.

                    How We Protect Your Data
                    We use advanced security measures

                    Passwords are encrypted and not visible to us

                    Your Rights
                    You can at any time:

                    Access, correct, or delete your data

                    Restrict or object to processing

                    Withdraw consent (if applicable)

                    Request data portability

                    File a complaint with the Data Protection Authority

                    Data Retention
                    We keep your data only as long as necessary to provide the service and comply with legal
                    obligations.

                    Other Information
                    We do not sell or share your data with third parties

                    Payments are handled through Stripe, compliant with security standards

                    The app may use technical cookies necessary for operation

                    Updates to This Privacy Policy
                    We may update this Privacy Policy; we will inform you via the app or email.</p>

                <router-link to="/">
                    <p class="text-white text-center mt-5">BACK</p>
                </router-link>
            </div>
        </div>

    </div>
</template>

<style scoped>
.containerGenPrivacy {
    width: 100%;
    height: 100vh;
    background-color: black;
    background-image: url(/img/backgroundimage8.png);
    /**t4 figa */
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
}

.wrapperPrivacy {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;

}

.rectangleInfoPrivacy {
    width: 90%;
    height: 70vh;
    overflow-y: scroll;
    background-color: rgba(0, 0, 0, 0.68);
    border-radius: 10px;
    padding: 20px;
}

.textcolor {
    color: #9d191d;
}

.containerLogo {
    width: 100%;
    display: flex;
    align-items: center;
}

.containerLogo img {
    height: 100px;
}

.hov:hover {
    color: #9d191d;
}

.personalizedtraf {
    font-size: 10px;
    font-weight: bold;
}

.personalizedtraf1 {
    font-size: 10px;
}

.personalizedtraf2 {
    font-weight: bold;
}
</style>