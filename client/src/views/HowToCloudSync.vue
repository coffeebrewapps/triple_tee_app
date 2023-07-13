<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <div class="page-container">
    <h1>How To Setup Cloud Sync</h1>

    <p class="paragraph">
      Triple Tee App is designed to run on your local machine so that your data is protected against potential
      breach that can happen if the data were to live on the Internet.
    </p>

    <p class="paragraph">
      However, if you still require the flexibility of accessing your data from multiple devices, you could setup
      cloud sync to your trusted cloud storage provider, eg. iCloud or Google Drive. We do not have affiliation to
      any of these providers, and do not endorse any of them, but for demonstration purpose, we will show you how you
      can configure the app to sync your data to the cloud.
    </p>

    <h2>Step 1: Create Folder on iCloud Drive</h2>

    <p class="paragraph">
      First, create a new folder in iCloud Drive. You can name it "Triple Tee App", or any other name you find easy
      to remember.
    </p>

    <p class="paragraph">
      You will need to create 2 sub-folders, namely "data" and "uploads". "data" will be used to store app data files,
      while "uploads" will be used to store uploaded files.
    </p>

    <div class="image">
      <img src="/screenshots/cloud_sync/setup_icloud_dir.png"/>
      <small class="caption">Triple Tee App root directory on iCloud Drive.</small>
    </div>

    <h2>Step 2: Configure App to Use iCloud Folder</h2>

    <p class="paragraph">
      Then, open the Triple Tee App. You will be prompted to configure the Data Root Directory for the app.
    </p>

    <p class="paragraph">
      Choose the "Triple Tee App" folder you have just on iCloud Drive.
    </p>

    <div class="image">
      <img src="/screenshots/cloud_sync/setup_data_root_dir.png"/>
      <small class="caption">Choose Triple Tee App on iCloud Drive as root directory.</small>
    </div>

    <h2>Step 3: Launch App to Create Data Files</h2>

    <p class="paragraph">
      After choosing the appropriate folder, launch the app. The app will automatically create data files at your
      chosen location.
    </p>

    <p class="paragraph">
      Now if you go back to iCloud Drive, you should see all the .json files created under the "data" folder.
    </p>

    <div class="image">
      <img src="/screenshots/cloud_sync/icloud_data.png"/>
      <small class="caption">System-generated data files.</small>
    </div>
  </div>
</template>

<style scoped>
</style>
