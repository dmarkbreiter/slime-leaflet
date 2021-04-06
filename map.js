// Stamen layers
var s_stamen_copyright =
  'Map tiles by <a href="https://stamen.com">Stamen Design</a>, under <a href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="https://openstreetmap.org">OpenStreetMap</a>, under <a href="https://www.openstreetmap.org/copyright">ODbL</a>.'; // used for all sets except Watercolor
var s_stamen_urlbase = "https://stamen-tiles-{s}.a.ssl.fastly.net/";
var l_stamen_watercolor = L.tileLayer(
  s_stamen_urlbase + "watercolor/{z}/{x}/{y}.jpg",
  {
    maxZoom: 20,
    attribution:
      'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="https://openstreetmap.org">OpenStreetMap</a>, under <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.',
  }
);
var l_stamen_terrain = L.tileLayer(
  s_stamen_urlbase + "terrain/{z}/{x}/{y}.jpg",
  { maxNativeZoom: 16, attribution: s_stamen_copyright }
);
var l_stamen_terrainbg = L.tileLayer(
  s_stamen_urlbase + "terrain-background/{z}/{x}/{y}.jpg",
  { maxNativeZoom: 16, attribution: s_stamen_copyright }
);
var l_stamen_terrainlines = L.tileLayer(
  s_stamen_urlbase + "terrain-lines/{z}/{x}/{y}.jpg",
  { maxNativeZoom: 16, attribution: s_stamen_copyright }
);
var l_stamen_terrainlabels = L.tileLayer(
  s_stamen_urlbase + "terrain-labels/{z}/{x}/{y}.jpg",
  { maxNativeZoom: 16, attribution: s_stamen_copyright }
);
var l_stamen_toner = L.tileLayer(s_stamen_urlbase + "toner/{z}/{x}/{y}.png", {
  maxZoom: 20,
  attribution: s_stamen_copyright,
});
var l_stamen_tonerlite = L.tileLayer(
  s_stamen_urlbase + "toner-lite/{z}/{x}/{y}.png",
  { maxZoom: 20, attribution: s_stamen_copyright }
);
var l_stamen_tonerbg = L.tileLayer(
  s_stamen_urlbase + "toner-background/{z}/{x}/{y}.png",
  { maxZoom: 20, attribution: s_stamen_copyright }
);
var l_stamen_tonerhybrid = L.tileLayer(
  s_stamen_urlbase + "toner-hybrid/{z}/{x}/{y}.png",
  { maxZoom: 20, attribution: s_stamen_copyright }
);
var l_stamen_tonerlines = L.tileLayer(
  s_stamen_urlbase + "toner-lines/{z}/{x}/{y}.png",
  { maxZoom: 20, attribution: s_stamen_copyright }
);
var l_stamen_tonerlabels = L.tileLayer(
  s_stamen_urlbase + "toner-labels/{z}/{x}/{y}.png",
  { maxZoom: 20, attribution: s_stamen_copyright }
);

// Carto layers (also designed by Stamen for Carto)
var s_carto_copyright =
  'Map tiles by <a href="https://carto.com">Carto</a>, under <a href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="https://openstreetmap.org">OpenStreetMap</a>, under ODbL.';
var s_carto_urlbase = "https://cartodb-basemaps-{s}.global.ssl.fastly.net/";
var l_carto_light = L.tileLayer(s_carto_urlbase + "light_all/{z}/{x}/{y}.png", {
  maxZoom: 20,
  attribution: s_carto_copyright,
});
var l_carto_lightbg = L.tileLayer(
  s_carto_urlbase + "light_nolabels/{z}/{x}/{y}.png",
  { maxZoom: 20, attribution: s_carto_copyright }
);
var l_carto_lightlabels = L.tileLayer(
  s_carto_urlbase + "light_only_labels/{z}/{x}/{y}.png",
  { maxZoom: 20, attribution: s_carto_copyright }
);
var l_carto_dark = L.tileLayer(s_carto_urlbase + "dark_all/{z}/{x}/{y}.png", {
  maxZoom: 20,
  attribution: s_carto_copyright,
});
var l_carto_darkbg = L.tileLayer(
  s_carto_urlbase + "dark_nolabels/{z}/{x}/{y}.png",
  { maxZoom: 20, attribution: s_carto_copyright }
);
var l_carto_darklabels = L.tileLayer(
  s_carto_urlbase + "dark_only_labels/{z}/{x}/{y}.png",
  { maxZoom: 20, attribution: s_carto_copyright }
);
var l_carto_voyager = L.tileLayer(
  s_carto_urlbase + "rastertiles/voyager/{z}/{x}/{y}.png",
  { maxZoom: 20, attribution: s_carto_copyright }
);
var l_carto_voyagerbg = L.tileLayer(
  s_carto_urlbase + "rastertiles/voyager_nolabels/{z}/{x}/{y}.png",
  { maxZoom: 20, attribution: s_carto_copyright }
);
var l_carto_voyagerlabels = L.tileLayer(
  s_carto_urlbase + "rastertiles/voyager_only_labels/{z}/{x}/{y}.png",
  { maxZoom: 20, attribution: s_carto_copyright }
);
var l_carto_voyagerunder = L.tileLayer(
  s_carto_urlbase + "rastertiles/voyager_labels_under/{z}/{x}/{y}.png",
  { maxZoom: 20, attribution: s_carto_copyright }
);

// USGS maps (US only)
var s_usgs_urlbase = "https://basemap.nationalmap.gov/arcgis/rest/services/";
var l_usgs_topo = L.tileLayer(
  s_usgs_urlbase + "USGSTopo/MapServer/tile/{z}/{y}/{x}",
  {
    maxNativeZoom: 16,
    attribution:
      '<a href="' +
      s_usgs_urlbase +
      'USGSTopo/MapServer">USGS The National Map</a>: National Boundaries Dataset, 3DEP Elevation Program, Geographic Names Information System, National Hydrography Dataset, National Land Cover Database, National Structures Dataset, and National Transportation Dataset; USGS Global Ecosystems; U.S. Census Bureau TIGER/Line data; USFS Road Data; Natural Earth Data; U.S. Department of State Humanitarian Information Unit; and NOAA National Centers for Environmental Information, U.S. Coastal Relief Model',
  }
);
var l_usgs_img = L.tileLayer(
  s_usgs_urlbase + "USGSImageryOnly/MapServer/tile/{z}/{y}/{x}",
  {
    maxNativeZoom: 16,
    attribution:
      '<a href="' +
      s_usgs_urlbase +
      'USGSImageryOnly/MapServer">USGS The National Map</a>: Orthoimagery',
  }
);
var l_usgs_imgtopo = L.tileLayer(
  s_usgs_urlbase + "USGSImageryTopo/MapServer/tile/{z}/{y}/{x}",
  {
    maxNativeZoom: 16,
    attribution:
      '<a href="' +
      s_usgs_urlbase +
      'USGSImageryTopo/MapServer">USGS The National Map</a>: Orthoimagery and US Topo',
  }
);
var l_usgs_relief = L.tileLayer(
  s_usgs_urlbase + "USGSShadedReliefOnly/MapServer/tile/{z}/{y}/{x}",
  {
    maxNativeZoom: 16,
    attribution:
      '<a href="' +
      s_usgs_urlbase +
      'USGSShadedReliefOnly/MapServer">USGS The National Map</a>: 3D Elevation Program',
  }
);
var l_usgs_hydro = L.tileLayer(
  s_usgs_urlbase + "USGSHydroCached/MapServer/tile/{z}/{y}/{x}",
  {
    maxNativeZoom: 16,
    attribution:
      '<a href="' +
      s_usgs_urlbase +
      'USGSHydroCached/MapServer">USGS The National Map</a>: National Hydrography Dataset',
  }
);

// OpenStreetMaps & OpenTopoMap
var l_osm_fr = L.tileLayer(
  "https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png",
  {
    maxZoom: 20,
    attribution:
      'donn&eacute;es &copy; <a href="https://osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="https://openstreetmap.fr">OSM France</a>',
  }
);
var l_osm_hot = L.tileLayer(
  "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution:
      'donn&eacute;es &copy; <a href="https://osm.org/copyright">OpenStreetMap</a>/ODbL - Tiles courtesy of <a href="https://hot.openstreetmap.org/">Humanitarian OpenStreetMap Team</a>',
  }
);
var l_otm = L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxNativeZoom: 17,
  attribution:
    'Kartendaten: &copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>-Mitwirkende, SRTM | Kartendarstellung: &copy; <a href="http://opentopomap.org/">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
});

// University of Wisconsin Real Earth layers (selected from over 500 sets available)
var s_re_urlbase = "https://realearth.ssec.wisc.edu/";
var l_re_globalvis = L.tileLayer(
  s_re_urlbase + "tiles/globalvis/{z}/{x}/{y}.png",
  {
    maxZoom: 20,
    attribution:
      '<a href="' +
      s_re_urlbase +
      'products/globalvis">RealEarth</a> by SSEC &#64; University of Wisconsin-Madison',
  }
);
var l_re_globalir = L.tileLayer(
  s_re_urlbase + "tiles/globalir-rr/{z}/{x}/{y}.png",
  {
    maxZoom: 20,
    attribution:
      '<a href="' +
      s_re_urlbase +
      'products/globalir-rr">RealEarth</a> by SSEC &#64; University of Wisconsin-Madison',
  }
);
var l_re_globalwv = L.tileLayer(
  s_re_urlbase + "tiles/globalwv/{z}/{x}/{y}.png",
  {
    maxZoom: 20,
    attribution:
      '<a href="' +
      s_re_urlbase +
      'products/globalwv">RealEarth</a> by SSEC &#64; University of Wisconsin-Madison',
  }
);
var l_re_viirsmask = L.tileLayer(
  s_re_urlbase + "tiles/VIIRS-MASK-54000x27000/{z}/{x}/{y}.png",
  {
    maxZoom: 20,
    attribution:
      '<a href="' +
      s_re_urlbase +
      'products/VIIRS-MASK-54000x27000">RealEarth</a> by SSEC &#64; University of Wisconsin-Madison',
  }
);
var l_re_nightlights = L.tileLayer(
  s_re_urlbase + "tiles/NightLightsColored/{z}/{x}/{y}.png",
  {
    maxZoom: 20,
    attribution:
      '<a href="' +
      s_re_urlbase +
      'products/NightLightsColored">RealEarth</a> by SSEC &#64; University of Wisconsin-Madison',
  }
);

// Wikipedia
//var l_wiki_hillshading = L.tileLayer('http://c.tiles.wmflabs.org/hillshading/{z}/{x}/{y}.png',{maxNativeZoom:14, attribution:'NASA'});
//https://tiles.wmflabs.org/bw-mapnik/${z}/{x}/{y}.png
//https://tiles.wmflabs.org/osm-no-labels/{z}/{x}/{y}.png

// NASA World Wind
// https://worldwind.arc.nasa.gov/

// ==================
// iNaturalist Layers
// ==================
var s_inat_url = "https://api.inaturalist.org/v1/";

// Build query string for iNat observation layers
function fbuildqs(ary) {
  var qs = "";
  for (i = 0; i < ary.length; i++) {
    qs += (i == 0 ? "?" : "&") + ary[i];
  }
  return qs;
}
var inat_query_string = fbuildqs([
  //   'color=magenta', //set the color of the pins, circles, and heatmap
  //   'id=26357908,26454874', //observation id; separate values with comma
  //   'user_id=pisum', //separate values with comma
       "place_id=51727", //separate values with comma
       "project_id=snailblitz-2021", //separate values with comma
  //   'taxon_id=47114', //separate values with comma
  //   'd1=2019/04/01', // date range from
  //   'd2=2019/04/30', // date range to
  //   'year=2019', //separate values with comma
  //   'month=1,2', //separate values with comma
  //   'day=1', // separate values with comma
  //   'verifiable=true',
  //   'quality_grade=research', //research,needs_id,casual
]);

// Create iNat observation image tileset layers
var l_inat_pts = L.tileLayer(
  s_inat_url + "points/{z}/{x}/{y}.png" + inat_query_string,
  {
    maxZoom: 20,
    attribution:
      '<a href="' +
      s_inat_url +
      'docs/#!/Observation_Tiles/get_points_zoom_x_y_png">iNaturalist observation data</a>',
  }
);
var l_inat_cheat = L.tileLayer(
  s_inat_url + "colored_heatmap/{z}/{x}/{y}.png" + inat_query_string,
  {
    maxZoom: 20,
    attribution:
      '<a href="' +
      s_inat_url +
      'docs/#!/Observation_Tiles/get_colored_heatmap_zoom_x_y_png">iNaturalist observation data</a>',
  }
);
var l_inat_heat = L.tileLayer(
  s_inat_url + "heatmap/{z}/{x}/{y}.png" + inat_query_string,
  {
    maxZoom: 20,
    attribution:
      '<a href="' +
      s_inat_url +
      'docs/#!/Observation_Tiles/get_heatmap_zoom_x_y_png">iNaturalist observation data</a>',
  }
);

// Create iNaturalist UTFGrids and pair each with an observation tileset from above (skip heatmap, since there aren't distinct points in that)
function fpopup(obs) {

  const headers =
  (obs.taxon === null
    ? "[Unknown]"
    : "<h1>" + obs.taxon.preferred_common_name + "</h1><h2>" + "(" + obs.taxon.name + ")</h2>");

  const specimenPhoto =
    obs.photos.length == 0
      ? ""
      : '<img class="specimen-photo" src="' + obs.photos[0].url.replace("square", "small") + '" />';
  //s += obs.photos.length > 1 ? " [" + obs.photos.length + "]" : "";

  if (obs.user.name) {
    var name = obs.user.name;
  } else {
    var name = obs.user.login
  }

  const placeholderProfilePic = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="400px" height="400px" viewBox="0 0 400 400" version="1.1">
  <!-- Generator: Sketch 42 (36781) - http://www.bohemiancoding.com/sketch -->
  <title>Artboard 2</title>
  <desc>Created with Sketch.</desc>
  <defs/>
  <g id="wireframes" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="Artboard-2">
          <g id="Group">
              <circle id="Oval-4" fill="#E4E4E4" cx="200" cy="200" r="200"/>
              <g id="Contacts_000000" transform="translate(114.285714, 105.714286)" fill-rule="nonzero" fill="#000000">
                  <path d="M85.7142857,0 C52.6787314,0 25.7142857,26.9644397 25.7142857,60 C25.7142857,80.5119771 36.1747114,98.7240429 51.9642857,109.553571 C21.3047486,122.596483 0,153.084694 0,188.571429 L17.1428571,188.571429 C17.1428571,150.285711 47.4285686,120 85.7142857,120 C124.000003,120 154.285714,150.285711 154.285714,188.571429 L171.428571,188.571429 C171.428571,153.084694 150.123823,122.596483 119.464286,109.553571 C135.25386,98.7240429 145.714286,80.5119771 145.714286,60 C145.714286,26.9644397 118.74984,0 85.7142857,0 Z M85.7142857,17.1428571 C109.485154,17.1428571 128.571429,36.2291289 128.571429,60 C128.571429,83.7708686 109.485154,102.857143 85.7142857,102.857143 C61.9434171,102.857143 42.8571429,83.7708686 42.8571429,60 C42.8571429,36.2291289 61.9434171,17.1428571 85.7142857,17.1428571 Z" id="Shape"/>
              </g>
          </g>
      </g>
  </g>
  </svg>`

  const userName = `<h3>${name}</h3>`;
  const userIcon = obs.user.icon_url === null? placeholderProfilePic: `<img class='user-icon' src=${obs.user.icon_url}/>`;

  const observationUri =
    'observation #: <a href="' +
    obs.uri +
    '">' +
    obs.id +
    "</a>";

  if (obs.description === null) {
  } else if (obs.description.length < 200) {
    var observationDescription = "<br />" + obs.description;
  } else {
    var observationDescription = "<br />" + (obs.description.substring(0, 200) + "... (more)");
  }
  const popupOptions = {
    className: 'popup',
  } 

  popupContent = `${headers}<div class='flex-container'><div>${specimenPhoto}</div><div>${userIcon + userName + observationUri}<div></div>`

  L.popup(popupOptions)
    .setLatLng([obs.geojson.coordinates[1], obs.geojson.coordinates[0]])
    .setContent(popupContent)
    .openOn(mymap);
  document.getElementsByClassName('leaflet-popup-content')[0].style.width ="auto";
  console.log(obs.user.login)
}

var u_inat_pts = L.utfGrid(
  s_inat_url + "points/{z}/{x}/{y}color=blue.grid.json" + inat_query_string,
  { maxZoom: 20 }
); //no attribution here because it won't ever exist on its own

u_inat_pts.on("click", function (e) {
  // "mouseover" and "mouseout" events not used here
  if (e.data) {
    corslite(
      s_inat_url + "observations/" + e.data.id,
      function (err, response) {
        if (err) {
          self.fire("error", { error: err });
          return;
        }
        var obsdata = JSON.parse(response.responseText);
        fpopup(obsdata.results[0]);
      },
      true
    );
  }
});
var g_inat_pts = L.layerGroup([l_inat_pts, u_inat_pts]); // pair the UTFGrid with its map tile set.

var u_inat_cheat = L.utfGrid(
  s_inat_url + "colored_heatmap/{z}/{x}/{y}.grid.json" + inat_query_string,
  { maxZoom: 20 }
); //no attribution here because it won't ever exist on its own
u_inat_cheat.on("click", function (e) {
  // "mouseover" and "mouseout" events not used here
  if (e.data) {
    corslite(
      s_inat_url + "observations/" + e.data.id,
      function (err, response) {
        if (err) {
          self.fire("error", { error: err });
          return;
        }
        var obsdata = JSON.parse(response.responseText);
        fpopup(obsdata.results[0]);
      },
      true
    );
  }
});
var g_inat_cheat = L.layerGroup([l_inat_cheat, u_inat_cheat]);

// iNaturalist Place Layer
var inat_place_id = "51727"; //integer
var l_inat_place = L.tileLayer(
  s_inat_url + "places/" + inat_place_id + "/{z}/{x}/{y}.png",
  {
    maxZoom: 20,
    attribution:
      '<a href="' +
      s_inat_url +
      'docs/#!/Polygon_Tiles/get_places_place_id_zoom_x_y_png">iNaturalist place polygon</a>',
  }
);

// iNaturalist Taxon Places Checklist and Range Layers
var inat_taxon_id = "8229"; //integer
var l_inat_taxonplace = L.tileLayer(
  s_inat_url + "taxon_places/" + inat_taxon_id + "/{z}/{x}/{y}.png",
  {
    maxZoom: 20,
    attribution:
      '<a href="' +
      s_inat_url +
      'docs/#!/Polygon_Tiles/get_taxon_places_taxon_id_zoom_x_y_png">iNaturalist taxon place checklist data</a>',
  }
);
var l_inat_taxonrange = L.tileLayer(
  s_inat_url + "taxon_ranges/" + inat_taxon_id + "/{z}/{x}/{y}.png",
  {
    maxZoom: 20,
    attribution:
      '<a href="' +
      s_inat_url +
      'docs/#!/Polygon_Tiles/get_taxon_ranges_taxon_id_zoom_x_y_png">iNaturalist taxon range data</a>',
  }
);

// create map, and set default center coordinates, zoom level, and layers
var mymap = L.map("mapid", {
  center: [34.082, -118.2],
  zoom: 8,
  layers: [l_carto_light, g_inat_cheat],
  doubleClickZoom: false,
});

// define available basemaps (can view only one at a time)
var basemaps = {
  "Carto Light": l_carto_light,
  //"Carto Light Background": l_carto_lightbg,
  //"Carto Dark": l_carto_dark,
  //"Carto Dark Background": l_carto_darkbg,
  "Carto Voyager": l_carto_voyager,
  //"Carto Voyager Background": l_carto_voyagerbg,
  //"Carto Voyager Labels Under": l_carto_voyagerunder,
  //"Stamen Watercolor": l_stamen_watercolor,
  //"OpenTopoMap": l_otm,
  //"OpenStreetMap France": l_osm_fr,
  //"OpenStreetMap Humanitarian": l_osm_hot,
  "USGS Imagery": l_usgs_img,
  "USGS Topo": l_usgs_topo,
  //"USGS Imagery + Topo": l_usgs_imgtopo,
  "USGS Relief": l_usgs_relief,
  //"RealEarth Global Visible": l_re_globalvis,
  //"RealEarth Global Water Vapor": l_re_globalwv,
  //"RealEarth Global Black Marble": l_re_viirsmask
};

// define available overlay maps (can view more than one at a time, arranged in order from lowest to highest)
var overlaymaps = {
  "USGS Hydro": l_usgs_hydro,
  //"RealEarth Global Night Lights": l_re_nightlights,
  //"RealEarth Global Rain Rate": l_re_globalir,
  "Stamen Terrain Lines": l_stamen_terrainlines,
  //"Stamen Toner Lines": l_stamen_tonerlines,
  //"Stamen Toner Hybrid": l_stamen_tonerhybrid,
  "Carto Light Labels": l_carto_lightlabels,
  //"Carto Dark Labels": l_carto_darklabels,
  //"Carto Voyager Labels": l_carto_voyagerlabels,
  //"Stamen Terrain Labels": l_stamen_terrainlabels,
  //"Stamen Toner ": l_stamen_tonerlabels,
  //"iNaturalist Taxon Range": l_inat_taxonrange,
  //"iNaturalist Taxon Places": l_inat_taxonplace,
  //"iNaturalist Place": l_inat_place,
  "iNaturalist Heatmap": l_inat_heat,
  "iNaturalist Circles": g_inat_cheat,
  //"iNaturalist Points": g_inat_pts,
};

// add a layer selector control and scale bar
L.control.layers(basemaps, overlaymaps).addTo(mymap);
L.control.scale().addTo(mymap);

// add an indicator for zoom level
// todo: show mouseover coordinates
/*
var ZoomViewer = L.Control.extend({
   onAdd: function(){
      var gauge = L.DomUtil.create('div');
      gauge.style.width = '100px';
      gauge.style.background = 'rgba(255,255,255,0.5)';
      gauge.style.textAlign = 'left';
      gauge.style.padding = '0px 5px';
      mymap.on('zoomstart zoom zoomend', function(ev) { gauge.innerHTML = 'Zoom level: ' + Math.round(mymap.getZoom());
      })
      return gauge;
   }
});
(new ZoomViewer).addTo(mymap);
*/
