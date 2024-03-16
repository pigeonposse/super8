#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
		.setup(|_app| {
			#[cfg(desktop)]
			_app.handle().plugin(tauri_plugin_updater::Builder::new().build())?;
			Ok(())
		})
        .plugin(tauri_plugin_shell::init())
		// .plugin(tauri_plugin_window::init())
        // .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
