// Payment processes configuration
const paymentProcesses = {
  'credit-card': {
    title: 'Add Credit Card',
    icon: '💳',
    steps: [
      {
        title: 'Card Details',
        fields: [
          { name: 'cardName', label: 'Cardholder Name', type: 'text', placeholder: 'John Doe' },
          { name: 'cardNumber', label: 'Card Number', type: 'text', placeholder: '4532 1234 5678 9010', maxlength: '19' },
          { name: 'expiryDate', label: 'Expiry Date (MM/YY)', type: 'text', placeholder: '12/25', maxlength: '5' },
          { name: 'cvv', label: 'CVV', type: 'text', placeholder: '123', maxlength: '4' }
        ],
        info: 'Your card details are encrypted and securely stored. We never store your CVV.'
      },
      {
        title: 'Billing Address',
        fields: [
          { name: 'street', label: 'Street Address', type: 'text', placeholder: '123 Main Street' },
          { name: 'city', label: 'City', type: 'text', placeholder: 'New York' },
          { name: 'state', label: 'State/Province', type: 'text', placeholder: 'NY' },
          { name: 'zipcode', label: 'ZIP/Postal Code', type: 'text', placeholder: '10001' },
          { name: 'country', label: 'Country', type: 'text', placeholder: 'United States' }
        ],
        info: ''
      },
      {
        title: 'Verification',
        fields: [],
        info: '✓ Card verified successfully!',
        infoSuccess: true,
        finalMessage: 'Your credit card is now active and ready to use for all subscriptions.'
      }
    ]
  },
  'digital-wallet': {
    title: 'Connect Digital Wallet',
    icon: '🔐',
    steps: [
      {
        title: 'Select Wallet',
        fields: [
          { name: 'walletType', label: 'Choose Your Wallet', type: 'select', options: ['PayPal', 'Apple Pay', 'Google Pay', 'Samsung Pay'] }
        ],
        info: 'You will be redirected to your wallet provider to authorize the connection.'
      },
      {
        title: 'Authorization',
        fields: [
          { name: 'walletEmail', label: 'Connected Wallet Email', type: 'text', placeholder: 'user@example.com', disabled: true }
        ],
        info: '✓ Authorization successful!',
        infoSuccess: true
      },
      {
        title: 'Confirmation',
        fields: [],
        info: '✓ Digital wallet connected successfully!',
        infoSuccess: true,
        finalMessage: 'Your wallet is now securely linked. Enable biometric authentication for added security.'
      }
    ]
  },
  'bank-transfer': {
    title: 'Connect Bank Account',
    icon: '🏦',
    steps: [
      {
        title: 'Bank Details',
        fields: [
          { name: 'accountHolder', label: 'Account Holder Name', type: 'text', placeholder: 'John Doe' },
          { name: 'bankName', label: 'Bank Name', type: 'text', placeholder: 'Your Bank' },
          { name: 'routingNumber', label: 'Routing Number', type: 'text', placeholder: '021000021' },
          { name: 'accountNumber', label: 'Account Number', type: 'text', placeholder: '123456789' },
          { name: 'accountType', label: 'Account Type', type: 'select', options: ['Checking', 'Savings'] }
        ],
        info: 'Your bank information is encrypted and only used for verification.'
      },
      {
        title: 'Micro-Deposits',
        fields: [
          { name: 'deposit1', label: 'First Deposit Amount', type: 'text', placeholder: '$0.XX', disabled: true },
          { name: 'deposit2', label: 'Second Deposit Amount', type: 'text', placeholder: '$0.XX', disabled: true }
        ],
        info: 'We have sent two small deposits to your account. Check your bank in 1-2 business days and return here to verify.'
      },
      {
        title: 'Verification Complete',
        fields: [],
        info: '✓ Bank account verified successfully!',
        infoSuccess: true,
        finalMessage: 'Your bank account is now verified. You can use ACH transfers with lower fees.'
      }
    ]
  },
  'crypto': {
    title: 'Add Cryptocurrency Wallet',
    icon: '₿',
    steps: [
      {
        title: 'Select Cryptocurrency',
        fields: [
          { name: 'cryptoType', label: 'Choose Your Cryptocurrency', type: 'select', options: ['Bitcoin (BTC)', 'Ethereum (ETH)'] }
        ],
        info: 'We support Bitcoin and Ethereum for all payments. Transactions are on the blockchain.'
      },
      {
        title: 'Wallet Address',
        fields: [
          { name: 'walletAddress', label: 'Wallet Address', type: 'text', placeholder: '1A1z7agoat2dwNZvXXXXXXXXXXXX' },
          { name: 'walletProvider', label: 'Wallet Provider', type: 'select', options: ['MetaMask', 'Coinbase Wallet', 'Ledger', 'Trezor', 'Other'] }
        ],
        info: 'Ensure you control the private keys. We will send payment requests to this address.'
      },
      {
        title: 'Confirmation',
        fields: [],
        info: '✓ Cryptocurrency wallet added successfully!',
        infoSuccess: true,
        finalMessage: 'Your wallet is verified and ready for blockchain transactions. Lower fees on international payments!'
      }
    ]
  }
};

let currentPaymentMethod = null;
let currentStepIndex = 0;
const formData = {};

// Initialize event listeners
document.querySelectorAll('.cta button').forEach(btn => {
  btn.addEventListener('click', () => {
    const method = btn.dataset.payment;
    openPaymentProcess(method);
  });
});

function openPaymentProcess(method) {
  if (!paymentProcesses[method]) return;
  
  currentPaymentMethod = method;
  currentStepIndex = 0;
  formData[method] = {};
  
  document.getElementById('processModal').classList.add('active');
  renderProcessStep();
}

function closePaymentProcess() {
  document.getElementById('processModal').classList.remove('active');
  currentPaymentMethod = null;
  currentStepIndex = 0;
}

function renderProcessStep() {
  if (!currentPaymentMethod) return;
  
  const process = paymentProcesses[currentPaymentMethod];
  const step = process.steps[currentStepIndex];
  
  // Render step indicators
  let stepsHTML = '<div class="process-steps">';
  process.steps.forEach((s, idx) => {
    const isActive = idx === currentStepIndex;
    const isCompleted = idx < currentStepIndex;
    const statusClass = isActive ? 'active' : isCompleted ? 'completed' : '';
    stepsHTML += `
      <div class="process-step ${statusClass}">
        <div class="process-step-number">${isCompleted ? '✓' : idx + 1}</div>
        <div class="process-step-label">${s.title}</div>
      </div>
    `;
  });
  stepsHTML += '</div>';
  
  // Render form fields
  let fieldsHTML = '';
  if (step.fields.length > 0) {
    const isTwoCol = step.fields.length > 2;
    fieldsHTML = isTwoCol ? '<div class="process-form-row">' : '';
    
    step.fields.forEach(field => {
      fieldsHTML += '<div class="process-form-group">';
      fieldsHTML += `<label for="${field.name}">${field.label}</label>`;
      
      if (field.type === 'select') {
        fieldsHTML += `<select id="${field.name}" name="${field.name}">`;
        field.options.forEach(opt => {
          fieldsHTML += `<option value="${opt}">${opt}</option>`;
        });
        fieldsHTML += '</select>';
      } else {
        const disabled = field.disabled ? 'disabled' : '';
        const maxlength = field.maxlength ? `maxlength="${field.maxlength}"` : '';
        fieldsHTML += `<input type="${field.type}" id="${field.name}" name="${field.name}" placeholder="${field.placeholder}" ${disabled} ${maxlength}>`;
      }
      
      fieldsHTML += '</div>';
    });
    
    if (isTwoCol) fieldsHTML += '</div>';
  }
  
  // Render info box
  const infoClass = step.infoSuccess ? 'process-info-success' : '';
  let infoHTML = step.info ? `<div class="process-info ${infoClass}">${step.info}</div>` : '';
  
  // Render buttons
  const isLastStep = currentStepIndex === process.steps.length - 1;
  const backBtnHTML = currentStepIndex > 0 ? `<button class="process-btn-secondary" onclick="previousStep()">Back</button>` : '';
  const nextBtnText = isLastStep ? 'Complete' : 'Continue';
  
  const html = `
    <div class="process-header">
      <h2>${process.title}</h2>
      <p>Step ${currentStepIndex + 1} of ${process.steps.length}</p>
    </div>
    ${stepsHTML}
    ${infoHTML}
    ${fieldsHTML}
    ${step.finalMessage ? `<div class="process-info process-info-success">${step.finalMessage}</div>` : ''}
    <div class="process-button-group">
      ${backBtnHTML}
      <button class="process-btn-primary" onclick="nextStep()">${nextBtnText}</button>
    </div>
  `;
  
  document.getElementById('processContainer').innerHTML = html;
}

function nextStep() {
  const process = paymentProcesses[currentPaymentMethod];
  
  if (currentStepIndex < process.steps.length - 1) {
    currentStepIndex++;
    renderProcessStep();
  } else {
    completePaymentProcess();
  }
}

function previousStep() {
  if (currentStepIndex > 0) {
    currentStepIndex--;
    renderProcessStep();
  }
}

function completePaymentProcess() {
  const process = paymentProcesses[currentPaymentMethod];
  alert(`✓ ${process.title} added successfully!\n\nYour payment method is now active. Redirecting to account setup...`);
  
  // Mark card as selected
  document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
  document.querySelector(`[data-payment="${currentPaymentMethod}"]`).closest('.card').classList.add('selected');
  
  closePaymentProcess();
  
  // Set payment completion flag in localStorage
  localStorage.setItem('paymentCompleted', 'true');
  localStorage.setItem('paymentMethod', currentPaymentMethod);
  localStorage.setItem('paymentDate', new Date().toISOString());
  
  // Redirect to Account Settings to set up profile after successful payment setup
  setTimeout(() => {
    window.location.href = "../10-account-settings/accounts.html";
  }, 1000);
}

const style = document.createElement('style');
style.textContent = `
  .card.selected { 
    outline: 2px solid rgba(239, 35, 60, 0.65); 
    outline-offset: 3px;
  }
`;
document.head.appendChild(style);
