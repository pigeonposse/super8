#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
		.plugin(tauri_plugin_shell::init())
		.setup(|_app| {
			#[cfg(desktop)]
			_app.handle().plugin(tauri_plugin_updater::Builder::new().build())?;
			Ok(())
		})
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
