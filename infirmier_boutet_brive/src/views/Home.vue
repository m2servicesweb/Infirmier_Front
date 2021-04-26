<template>
  <main class="main-container">
    <div class="hello font-sans pt-20 pb-20 text-xl bg-gray-200">


    <div class="lg:m-20 pb-10 bg-white m-4">
      <h1 class="font-serif shadow-2xl pb-10 pt-10 text-center text-5xl text-blue-900">Cabinet infirmier à Brive-la-Gaillarde</h1>
      <div class="lg:grid lg:grid-cols-2 lg:gap-1 m-4 place-content-around text-justify lg:m-20 block">
        <div class="lg:pr-10 pt-5 ">
          <p class="text-3xl mt-0 text-blue-900">
            Soins au cabinet sur rendez-vous /
            Domicile 7/7
          </p><br><br>
          <p>
            Le cabinet infirmier est situé sur la commune de Brive-la-Gaillarde (19100).
            En exercice depuis 2014, il propose des soins à domicile sur tout le bassin de Brive.<br><br>
            Accès handicapé (cabinet normes handicapés). <br><br>
            Tous les soins sont réalisables à domicile,
            disposant de tout le matériel nécessaire à la prise en charge des
            patients.
            Si votre médecin a mentionné sur l’ordonnance « À domicile », les infirmiers se déplacent de 8h à 19h30 (horaires adaptables),
            7j/7.
            N’hésitez pas à contacter le cabinet pour demande d’information pour
            prendre rendez-vous ou pour toute autre demande.
          </p>
          <p class="border-b-2 border-blue-900 border-solid pb-8">
            Pour prendre rendez-vous, vous pouvez me contacter par téléphone ou sms : <br><br>

            <a class="text-m font-bold-400 " href="tel:+33663545946">
              <ion-icon class="mr-4" name="call-outline"></ion-icon>06 63 54 59 46
            </a>
            <br>
          </p>
          <div class="lg:pr-10 pt-10 ">
            <p class="text-base">
              Le but de ce site internet est d’informer les patients sur les soins pratiqués par le cabinet infirmier.
              Il n’a pas pour but de promouvoir son activité.</p>
            <p class="italic">
              Ce site prend en compte l’article R.4312-37 du Code de la Santé
              Publique: <br><br>
              « La profession d’infirmier / infirmière ne doit pas être pratiquée
              comme un commerce.
              Tous les procédés directs ou indirects de réclame ou de publicité sont
              interdits aux infirmiers […] ».
              <a class="text-blue-900" href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006913942/2007-11-28#:~:text=La%20profession%20d'infirmier%20ou,interdits%20aux%20infirmiers%20ou%20infirmi%C3%A8res.">
                En savoir plus</a>
            </p>
          </div>
        </div>
        <div class="lg:ml-10 self-center p-12 shadow-2xl sm:w-auto  px-4 ">
          GET
https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews
        </div>
      </div>
    </div>


  <div class="lg:m-20 pb-10 bg-white m-4">
    <h1 class=" font-serif shadow-2xl pt-10 pb-10 text-center text-5xl text-blue-900 ">Soins à domicile et au cabinet</h1>
    <div class="lg:grid lg:grid-cols-2 lg:gap-1 m-4 place-content-around text-justify lg:m-20 block">
      <div class="lg:pr-10 pt-10 ">
        <img class="p-2" src="<?= get_theme_file_uri('src/1226647.jpg'); ?>" alt="map">


      </div>
      <div class="lg:pl-10 pt-10 pb-10 self-center ">
        <p>
          Tous les soins sont réalisables au domicile, celui-ci disposant de tout le matériel nécessaire à la prise en charge des patients. Si votre médecin a mentionné sur l’ordonnance « À domicile » et/ou si votre mobilité est réduite, les infirmières se déplacent de 8h à 20h, 7j/7.
        </p>
        <p>
          En cas d’urgence ou de situation de santé ne pas hésiter à contacter le 15 (le nécessitant le cabinet infirmier est disponible ). N’hésitez à contacter le cabinet pour demande d’information pour prendre rendez-vous ou pour toute autre demande .
        </p>
      </div>
    </div>
  </div>

  <div class="lg:m-20 pb-10 bg-white m-4">
    <h1 class="shadow-2xl font-serif pt-10 pb-10 text-center text-5xl text-blue-900">Visites et soins à domicile</h1>
    <div class="lg:grid lg:grid-cols-2 lg:gap-1 m-4 place-content-around text-justify lg:m-20 block">
      <div class="lg:pr-10 pt-10 self-center ">
        <p>
          Dans le cadre d’une demande de soins ponctuels ou des soins de long terme, Sylvain Boutet ou Laurent Valentin, infirmier libéral, se déplacent sur la commune de :
        </p>
        <ul class="list-disc pl-5 text-blue-900 pt-10 ">
          <li>Brive-la-Gaillarde</li>
          <li>Proximité</li>
        </ul>
      </div>
      <div class="lg:pl-10 pt-10 ">
        <iframe src="https://www.google.com/maps/d/u/1/embed?mid=1UZ1NAFRGnb6U5v_vbv6dH2RCoWmmzXrA" class="w-full h-96"></iframe>
      </div>
    </div>
  </div>

</div>
  </main>
</template>

<script>

export default {
  name: "Home",
  components: {
  }
};
</script>
