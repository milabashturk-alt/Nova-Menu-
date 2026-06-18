<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NOVA Cafe Menu</title>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

<style>
:root{
  --bg:#f6efe6;
  --card:#fffaf3;
  --brown:#5a3e2b;
  --gold:#b08a5b;
}

body{
  margin:0;
  font-family:Arial;
  background:var(--bg);
  color:#2b1d14;
}

/* HEADER */
header{
  text-align:center;
  padding:30px;
  background:linear-gradient(135deg,var(--brown),var(--gold));
  color:white;
}

/* TABS */
.tabs{
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  gap:10px;
  padding:15px;
  background:#fff;
  position:sticky;
  top:0;
}

.tab{
  padding:10px 15px;
  background:var(--card);
  border:1px solid #ddd;
  border-radius:20px;
  cursor:pointer;
  transition:.3s;
}

.tab:hover{
  background:var(--gold);
  color:white;
}

/* SECTION */
.section{
  display:none;
  padding:20px;
}

.active{
  display:block;
}

.title{
  font-size:22px;
  color:var(--brown);
  margin-bottom:10px;
  border-bottom:2px solid var(--gold);
  display:inline-block;
}

.card{
  background:var(--card);
  padding:15px;
  border-radius:12px;
  box-shadow:0 5px 15px rgba(0,0,0,.05);
}

.item{
  display:flex;
  justify-content:space-between;
  padding:6px 0;
  border-bottom:1px dashed #ddd;
}

/* FLOAT BUTTONS */
.float{
  position:fixed;
  bottom:20px;
  right:20px;
  display:flex;
  flex-direction:column;
  gap:10px;
}

.float a{
  width:50px;height:50px;
  display:flex;align-items:center;justify-content:center;
  border-radius:50%;
  color:white;
  text-decoration:none;
}

.whatsapp{background:#25D366}
.phone{background:#007bff}
.fb{background:#1877f2}
</style>
</head>

<body>

<header>
<h1>NOVA Cafe Menu</h1>
<p>Subject to 10% Service Charge</p>
</header>

<!-- TABS -->
<div class="tabs">
<div class="tab" onclick="show('smoothies')">Smoothies</div>
<div class="tab" onclick="show('juices')">Juices</div>
<div class="tab" onclick="show('hot')">Hot Drinks</div>
<div class="tab" onclick="show('coffee')">Coffee</div>
<div class="tab" onclick="show('icecoffee')">Ice Coffee</div>
<div class="tab" onclick="show('mojito')">Mojito</div>
<div class="tab" onclick="show('cocktails')">Cocktails</div>
<div class="tab" onclick="show('milk')">Milkshakes</div>
<div class="tab" onclick="show('soft')">Soft Drinks</div>
<div class="tab" onclick="show('icecream')">Ice Cream</div>
<div class="tab" onclick="show('dessert')">Dessert</div>
<div class="tab" onclick="show('shisha')">Shisha</div>
</div>

<!-- SMOOTHIES -->
<div id="smoothies" class="section active">
<div class="title">Smoothies</div>
<div class="card">
<div class="item"><span>Lemon</span><b>70 LE</b></div>
<div class="item"><span>Mango</span><b>80 LE</b></div>
<div class="item"><span>Kiwi</span><b>90 LE</b></div>
<div class="item"><span>Strawberry</span><b>80 LE</b></div>
<div class="item"><span>Watermelon Mint</span><b>90 LE</b></div>
</div>
</div>

<!-- JUICES -->
<div id="juices" class="section">
<div class="title">Fresh Juices</div>
<div class="card">
<div class="item"><span>Orange</span><b>65 LE</b></div>
<div class="item"><span>Mango</span><b>70 LE</b></div>
<div class="item"><span>Avocado</span><b>125 LE</b></div>
<div class="item"><span>Guava</span><b>65 LE</b></div>
</div>
</div>

<!-- HOT DRINKS -->
<div id="hot" class="section">
<div class="title">Hot Drinks</div>
<div class="card">
<div class="item"><span>Tea</span><b>35 LE</b></div>
<div class="item"><span>Hot Chocolate</span><b>75 LE</b></div>
<div class="item"><span>Sahlab</span><b>70 LE</b></div>
</div>
</div>

<!-- COFFEE -->
<div id="coffee" class="section">
<div class="title">Hot Coffee</div>
<div class="card">
<div class="item"><span>Espresso</span><b>55 LE</b></div>
<div class="item"><span>Cappuccino</span><b>80 LE</b></div>
<div class="item"><span>Latte</span><b>80 LE</b></div>
<div class="item"><span>Turkish Coffee</span><b>45 LE</b></div>
</div>
</div>

<!-- ICE COFFEE -->
<div id="icecoffee" class="section">
<div class="title">Ice Coffee</div>
<div class="card">
<div class="item"><span>Ice Latte</span><b>75 LE</b></div>
<div class="item"><span>Frappe</span><b>95 LE</b></div>
<div class="item"><span>Caramel Macchiato</span><b>105 LE</b></div>
</div>
</div>

<!-- MOJITO -->
<div id="mojito" class="section">
<div class="title">Mojito</div>
<div class="card">
<div class="item"><span>Strawberry Mojito</span><b>115 LE</b></div>
<div class="item"><span>Red Bull Mojito</span><b>115 LE</b></div>
</div>
</div>

<!-- COCKTAILS -->
<div id="cocktails" class="section">
<div class="title">Cocktails</div>
<div class="card">
<div class="item"><span>Pina Colada</span><b>90 LE</b></div>
<div class="item"><span>Blue Hawaii</span><b>85 LE</b></div>
</div>
</div>

<!-- MILKSHAKES -->
<div id="milk" class="section">
<div class="title">Milkshakes</div>
<div class="card">
<div class="item"><span>Oreo</span><b>100 LE</b></div>
<div class="item"><span>KitKat</span><b>125 LE</b></div>
<div class="item"><span>Strawberry</span><b>80 LE</b></div>
</div>
</div>

<!-- SOFT DRINKS -->
<div id="soft" class="section">
<div class="title">Soft Drinks</div>
<div class="card">
<div class="item"><span>Pepsi</span><b>45 LE</b></div>
<div class="item"><span>Red Bull</span><b>85 LE</b></div>
</div>
</div>

<!-- ICE CREAM -->
<div id="icecream" class="section">
<div class="title">Ice Cream</div>
<div class="card">
<div class="item"><span>Chocolate</span><b>45 LE</b></div>
<div class="item"><span>Mango</span><b>50 LE</b></div>
</div>
</div>

<!-- DESSERT -->
<div id="dessert" class="section">
<div class="title">Dessert</div>
<div class="card">
<div class="item"><span>Molten Cake</span><b>120 LE</b></div>
<div class="item"><span>Cheesecake</span><b>105 LE</b></div>
</div>
</div>

<!-- SHISHA -->
<div id="shisha" class="section">
<div class="title">Shisha</div>
<div class="card">
<div class="item"><span>Fruit Shisha</span><b>120 LE</b></div>
<div class="item"><span>Molasses</span><b>25 LE</b></div>
</div>
</div>

<!-- FLOAT BUTTONS -->
<div class="float">
<a class="whatsapp" href="https://wa.me/201080741142"><i class="fab fa-whatsapp"></i></a>
<a class="phone" href="tel:01080741142"><i class="fas fa-phone"></i></a>
<a class="fb" href="https://www.facebook.com/share/1F6eTsFaMH/"><i class="fab fa-facebook"></i></a>
</div>

<script>
function show(id){
document.querySelectorAll(".section").forEach(s=>s.classList.remove("active"));
document.getElementById(id).classList.add("active");
}
</script>

</body>
</html>
