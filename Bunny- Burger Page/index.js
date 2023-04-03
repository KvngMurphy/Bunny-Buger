// hamburger-menu

const navToggle = document.getElementById("nav-toggle")
const darken = document.getElementById("darken")
const navList = document.getElementById("nav-list")
const lineOne = document.getElementById("nav-line-1")
const lineTwo = document.getElementById("nav-line-2")
const lineThree = document.getElementById("nav-line-3")

let hasClickedToggle = false
function navToggleClose() {
  lineOne.style.transform = "rotate(0deg)"
  lineOne.style.inset = "0 auto auto auto"
  lineTwo.style.opacity = "1"
  lineThree.style.inset = "auto auto 0 auto"
  lineThree.style.transform = "rotate(0deg)"
  navList.style.inset = "0 auto 0 -100%"
  darken.style.zIndex = "-1"
  darken.style.opacity = "0"
  navToggle.style.marginLeft = "0"
  hasClickedToggle = false
}

navToggle.addEventListener("click", function() {
  if (hasClickedToggle === false) {
  lineOne.style.transform = "rotate(135deg)"
  lineOne.style.inset = "50% auto auto auto"
  lineTwo.style.opacity = "0"
  lineThree.style.inset = "50% auto auto auto"
  lineThree.style.transform = "rotate(-135deg)"
  navList.style.inset = "0 auto 0 0"
  navToggle.style.marginLeft = "1em"
  darken.style.zIndex = "1"
  darken.style.opacity = "0.8"
  hasClickedToggle = true
} else {
  navToggleClose()
}
})
darken.addEventListener("click", navToggleClose())

// Products display
const previousIcon = document.getElementById("previous-icon")
const nextIcon = document.getElementById("next-icon")
const collections = document.getElementById("collections")

let index = 0

function imageSwitch() {
  if (index === 0) {
    collections.style.content = "url(/images/burger1.jpeg)"

  } else if (index === 1) {
    collections.style.content = "url(/images/burger2.jpeg)"

  } else if (index === 2) {
    collections.style.content = "url(/images/burger3.jpeg)"

  } else if (index === 3) {
    collections.style.content = "url(/images/burger4.jpeg)"
  }
}

nextIcon.addEventListener("click", function() {
  if (index < 3) {
    index += 1
  } else if (index === 3) {
    index = 0
  }
  imageSwitch()
})

previousIcon.addEventListener("click", function() {
  if (index > 0) {
    index -= 1
  } else if (index === 0) {
    index = 3
  }
  imageSwitch()
})

//quantity-selector
const plusSign = document.getElementById("plus-sign")
const minusSign = document.getElementById("minus-sign")
const quantity = document.getElementById("quantity")
let quantityInt = parseInt(quantity.textContent)

plusSign.addEventListener("click", function() {
  if (quantityInt < 10) {
    quantity.textContent = quantityInt + 1
    quantityInt += 1
    minusSign.style.opacity = "1"
  } else {
    quantity.textContent = 0
    quantityInt = 0
  }
})
minusSign.addEventListener("click", function() {
  if (quantityInt > 1) {
    quantity.textContent -= 1
    quantityInt -= 1
  } else {
    quantity.textContent = 0
    quantityInt = 0
    minusSign.style.opacity = "0.4"
  }
})

//cart
const cartContainer = document.querySelector(".cart-container::after")
const cartIcon = document.getElementById("cart-icon")
const addToCart = document.getElementById("cart-text")
const numeric = document.getElementById("numeric")
const amount = document.getElementById("amount")
const checkoutBody = document.getElementById("checkout-body")
const checkoutBtn = document.getElementById("checkout-btn")
const empty = document.getElementById("empty")

addToCart.addEventListener("click", function() {
  if (parseInt(quantity.textContent) > 0) {
    cartIcon.nextElementSibling.textContent = quantity.textContent
    cartIcon.nextElementSibling.style.height = "15px"
    numeric.textContent = `x ${cartIcon.nextElementSibling.textContent}`
    amount.textContent = `$${quantity.textContent * 6.25}`
    checkoutBody.style.display = "flex"
    checkoutBtn.style.display = "flex"
    empty.style.display = "none"
  } else {
    cartIcon.nextElementSibling.textContent = ""
    cartIcon.nextElementSibling.style.height = "0"
    numeric.textContent = ""
    checkoutBody.style.display = "none"
    checkoutBtn.style.display = "none"
    empty.style.display = "block"
  }
})

//checkout 
const deleteBtn = document.getElementById("delete-btn")
const checkout = document.getElementById("checkout")
let hasClickedCart = false

cartIcon.addEventListener("click", function() {
  console.log("clicked")
  if (hasClickedCart === false) {
    checkout.style.transform = "scaleY(1)"
    hasClickedCart = true
  } else {
    checkout.style.transform = "scaleY(0)" 
    hasClickedCart = false
  }
})
deleteBtn.addEventListener("click", function() {
  if (checkoutBody.style.display === "flex") {
    cartIcon.nextElementSibling.textContent = ""
    cartIcon.nextElementSibling.style.height = "0"
    numeric.textContent = ""
    checkoutBody.style.display = "none"
    checkoutBtn.style.display = "none"
    empty.style.display = "block"
  } else {}
})
let scroll = () => {
  checkout.style.transform = "scaleY(0)" 
  hasClickedCart = false
}

//desktopVersion
const productOne = document.querySelector("#product-one")
const productTwo = document.querySelector("#product-two")
const productThree = document.querySelector("#product-three")
const productFour = document.querySelector("#product-four")

let hasClickedOne = false
let hasClickedTwo = false
let hasClickedThree = false
let hasClickedFour = false

const hasClickedArray = [hasClickedOne, hasClickedTwo, hasClickedThree, hasClickedFour]
const productArray = [productOne, productTwo, productThree, productFour]

function unclick() {
  for (let i = 0; i < hasClickedArray.length; i++) {
    hasClickedArray[i] = false
  }
  for (let i = 0; i < productArray.length; i++) {
    productArray[i].style.opacity = "1"
    productArray[i].parentElement.style.borderColor = "transparent"
  }
}

productOne.addEventListener("click", function(e) {
  index = 0
  if (hasClickedArray[0] === false) {
    unclick()
    e.target.style.opacity = "0.3"
    e.target.parentElement.style.borderColor = "var(--orange)"
    hasClickedArray[0] = true
    imageSwitch()
  } else {
    e.target.style.opacity = "1"
    e.target.parentElement.style.borderColor = "transparent"
    hasClickedArray[0] = false
  }
})

productTwo.addEventListener("click", function(e) {
  index = 1
  if (hasClickedArray[1] === false) {
    unclick()
    e.target.style.opacity = "0.3"
    e.target.parentElement.style.borderColor = "var(--orange)"
    hasClickedArray[1] = true
    imageSwitch()
  } else {
    e.target.style.opacity = "1"
    e.target.parentElement.style.borderColor = "transparent"
    hasClickedArray[1] = false
  }
})

productThree.addEventListener("click", function(e) {
  index = 2
  if (hasClickedArray[2] === false) {
    unclick()
    e.target.style.opacity = "0.3"
    e.target.parentElement.style.borderColor = "var(--orange)"
    hasClickedArray[2] = true
    imageSwitch()
  } else if (hasClickedArray[2] === true) {
    e.target.style.opacity = "1"
    e.target.parentElement.style.borderColor = "transparent"
    hasClickedArray[2] = false
  }
})

productFour.addEventListener("click", function(e) {
  index = 3
  if (hasClickedArray[3] === false) {
    unclick()
    e.target.style.opacity = "0.3"
    e.target.parentElement.style.borderColor = "var(--orange)"
    hasClickedArray[3] = true
    imageSwitch()
  } else {
    e.target.style.opacity = "1"
    e.target.parentElement.style.borderColor = "transparent"
    hasClickedArray[3] = false
  }
})
// media query
const windowWidth = window.matchMedia("(min-width: 600px)")
const queryObject = document.getElementById("zindexed")
const zCollections = document.getElementById("zindexed-collections")
const closeIcon = document.getElementById("close-icon")
const zProductOne = document.getElementById("zindexed-product-one")
const zProductTwo = document.getElementById("zindexed-product-two")
const zProductThree = document.getElementById("zindexed-product-three")
const zProductFour = document.getElementById("zindexed-product-four")
const zNext = document.getElementById("zindexed-next-icon")
const zPrevious = document.getElementById("zindexed-previous-icon")

function mediaQuery(X) {
  if (X.matches) {
    collections.addEventListener("click", function() {
      queryObject.style.display = "block"
      queryObject.style.zIndex = "4"
      queryObject.style.opacity = "1"
      darken.style.zIndex = "1"
      darken.style.opacity = "0.8"
      queryObject.scrollIntoView()
    })
  } else {
      queryObject.style.display = "none"
      queryObject.style.zIndex = "-2"
      queryObject.style.opacity = "0"
      darken.style.zIndex = "-1"
      darken.style.opacity = "0"

      collections.addEventListener("click", function() {
        queryObject.style.display = "none"
        queryObject.style.zIndex = "-2"
        queryObject.style.opacity = "0"
        darken.style.zIndex = "-1"
        darken.style.opacity = "0"
      })
    }
}

mediaQuery(windowWidth)
windowWidth.addListener(mediaQuery)

closeIcon.addEventListener("click", function() {
  queryObject.style.display = "none"
  queryObject.style.zIndex = "-1"
  queryObject.style.opacity = "0"
  darken.style.zIndex = "-1"
  darken.style.opacity = "0"
})

let hasClickedZOne = false
let hasClickedZTwo = false
let hasClickedZThree = false
let hasClickedZFour = false

const hasClickedZArray = [hasClickedZOne, hasClickedZTwo, hasClickedZThree, hasClickedZFour]
const productZArray = [zProductOne, zProductTwo, zProductThree, zProductFour]

function zUnclick() {
  for (let i = 0; i < hasClickedZArray.length; i++) {
    hasClickedZArray[i] = false
  }
  for (let i = 0; i < productZArray.length; i++) {
    productZArray[i].style.opacity = "1"
    productZArray[i].parentElement.style.borderColor = "transparent"
  }
}

function zImageSwitch() {
  if (index === 0) {
    zCollections.style.content = "url(/images/burger1.jpeg)"
  } else if (index === 1) {
    zCollections.style.content = "url(/images/burger2.jpeg)"
  } else if (index === 2) {
    zCollections.style.content = "url(/images/burger3.jpeg)"
  } else if (index === 3) {
    zCollections.style.content = "url(/images/burger4.jpeg)"
  }
}

zProductOne.addEventListener("click", function(e) {
  index = 0
  if (hasClickedZArray[0] === false) {
    zUnclick()
    e.target.style.opacity = "0.3"
    e.target.parentElement.style.borderColor = "var(--orange)"
    hasClickedZArray[0] = true
    zImageSwitch()
  } else {
    e.target.style.opacity = "1"
    e.target.parentElement.style.borderColor = "transparent"
    hasClickedZArray[0] = false
  }
})
zProductTwo.addEventListener("click", function(e) {
  index = 1
  if (hasClickedZArray[1] === false) {
    zUnclick()
    e.target.style.opacity = "0.3"
    e.target.parentElement.style.borderColor = "var(--orange)"
    hasClickedZArray[1] = true
    zImageSwitch()
  } else {
    e.target.style.opacity = "1"
    e.target.parentElement.style.borderColor = "transparent"
    hasClickedZArray[1] = false
  }
})
zProductThree.addEventListener("click", function(e) {
  index = 2
  if (hasClickedZArray[2] === false) {
    zUnclick()
    e.target.style.opacity = "0.3"
    e.target.parentElement.style.borderColor = "var(--orange)"
    hasClickedZArray[2] = true
    zImageSwitch()
  } else {
    e.target.style.opacity = "1"
    e.target.parentElement.style.borderColor = "transparent"
    hasClickedZArray[2] = false
  }
})
zProductFour.addEventListener("click", function(e) {
  index = 3
  if (hasClickedZArray[3] === false) {
    zUnclick()
    e.target.style.opacity = "0.3"
    e.target.parentElement.style.borderColor = "var(--orange)"
    hasClickedZArray[3] = true
    zImageSwitch()
  } else {
    e.target.style.opacity = "1"
    e.target.parentElement.style.borderColor = "transparent"
    hasClickedZArray[3] = false
  }
})

zNext.addEventListener("click", function() {
  if (index < 3) {
    index += 1
  } else if (index === 3) {
    index = 0
  }
  zImageSwitch()
})

zPrevious.addEventListener("click", function() {
  if (index > 0) {
    index -= 1
  } else if (index === 0) {
    index = 3
  }
  zImageSwitch()
})