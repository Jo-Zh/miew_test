import 'miew/dist/miew.min.css';
import(/* webpackChunkName: "Miew" */ 'miew/dist/miew.module').then(({ default: Miew }) => {
  onMiewLoaded(Miew);
});

function onMiewLoaded(Miew) {
  var viewer = new Miew({
    container: document.getElementsByClassName("miew-container")[0],
    load: "6DE9",
  });

  if (viewer.init()) {
    viewer.run();
  }
}
